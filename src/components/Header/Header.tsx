import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonHeader from "./ButtonHeader";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

import WEARIT from "~/assets/WEARIT.svg";
import "./header.css";

const Header = () => {
  return (
    <>
      {/* =============================================== HEADER 1 =============================================== */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
          color: "white",
          boxShadow: "none",
          paddingX: { xs: 5, sm: 7 },
        }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: "13px",
              }}>
              <div>
                John Doe
                <span className="ml-4 mr-4"> | </span>
                User
              </div>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      {/* =============================================== HEADER 2 =============================================== */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          borderBottom: "1px solid",
          borderColor: "grey.200",
          paddingX: { xs: 5, sm: 7 },
        }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <RouterLink to="/">
              <img src={WEARIT} alt="brand logo" style={{ height: 80, marginRight: 30, marginTop: 8 }} />
            </RouterLink>
            <Button component={RouterLink} to="/men" color="inherit">
              Men
            </Button>
            <Button component={RouterLink} to="/women" color="inherit">
              Women
            </Button>
            <Button component={RouterLink} to="/all-category" color="inherit">
              All
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}>
            {/* ============================================== CART ============================================== */}
            <ButtonHeader to="/cart" title="Cart" Icon={ShoppingCartIcon} />
            {/* ============================================== PROFILE ============================================== */}
            <ButtonHeader to="/profile" title="Profile" Icon={PersonIcon} />
            {/* ============================================== DASHBOARD ============================================== */}
            <ButtonHeader to="/dashboard" title="Dashboard" Icon={DashboardIcon} />
            {/* ============================================== WISH LIST ============================================== */}
            <ButtonHeader to="/wishlist" title="Wish list" Icon={FavoriteBorderRoundedIcon} />
            {/* ============================================== SPAN ============================================== */}
            <span
              style={{
                color: "grey",
                fontSize: "25px",
                fontWeight: "10",
              }}>
              |
            </span>
            {/* ============================================== LOGOUT ============================================== */}
            <ButtonHeader to="/logout" title="Logout" Icon={LogoutIcon} />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
