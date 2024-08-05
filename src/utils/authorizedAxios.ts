// Author: TrungQuanDev: https://youtube.com/@trungquandev
import axios from "axios";
import { toast } from "react-toastify";
import { handleLogoutAPI, handleCallRefreshTokenAPI } from "~/apis";

//khởi tạo 1 đối tượng axios (authorizedAxiosInstance) mục đích để custom và cấu hình chung cho dự án
let authorizedAxiosInstance = axios.create();

//thời gian chờ tối đa của 1 request : 10p
authorizedAxiosInstance.defaults.timeout = 100 * 60 * 10;

//phục vụ cho trường hợp chúng ta sử dụng JWT token (refresh và access) theo cơ chế httpOnly cookie
authorizedAxiosInstance.defaults.withCredentials = true;

authorizedAxiosInstance.interceptors.request.use(
  (config) => {
    // Lấy access token từ localStorage và đính kèm vào header của mỗi request
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

let refreshTokenPromise: any = null;
authorizedAxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    /**======================== xử lý auto refresh token =================== */
    if (error.response?.status === 401) {
      handleLogoutAPI().then(() => {
        //nếu mà dùng cookie thì cần xóa user info trong localStorage - mở comment dòng dưới
        // localStorage.removeItem("userInfo");
        location.href = "/login";
      });
    }
    const originalRequest = error.config;
    console.log("originalRequest", originalRequest);
    if (error.response?.status === 410 && originalRequest) {
      originalRequest._retry = true;

      if (!refreshTokenPromise) {
        //lấy refresh token từ localStorage
        const refreshToken = localStorage.getItem("refreshToken");
        //call api refresh token
        refreshTokenPromise = handleCallRefreshTokenAPI(refreshToken)
          .then((res) => {
            const { accessToken } = res.data;
            localStorage.setItem("accessToken", accessToken);
            authorizedAxiosInstance.defaults.headers.authorization = `Bearer ${accessToken}`;
          })
          .catch((_error) => {
            handleLogoutAPI().then(() => {
              location.href = "/login";
            });
            return Promise.reject(_error);
          })
          .finally(() => {
            refreshTokenPromise = null;
          });
      }

      return refreshTokenPromise.then(() => {
        return authorizedAxiosInstance(originalRequest);
      });
    }

    if (error.response?.status !== 410) {
      toast.error(error.response?.data?.message || error?.message);
    }
    return Promise.reject(error);
  },
);

export default authorizedAxiosInstance;
