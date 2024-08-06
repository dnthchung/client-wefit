import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageSliderProps {
  images: string[];
  showThumbnails?: boolean; // Optional prop to show thumbnails
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, showThumbnails = false }) => {
  const settings = {
    // dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    // customPaging: showThumbnails
    //   ? (i: number) => (
    //       // <a>
    //       //   <img src={images[i]} alt={`thumbnail ${i + 1}`} style={{ width: 50, height: 50 }} />
    //       // </a>
    //       <Box
    //         sx={{
    //           marginTop: 10,
    //         }}>
    //         <img src={images[i]} alt={`thumbnail ${i + 1}`} style={{ width: 50, height: 50 }} />
    //       </Box>
    //     )
    //   : undefined,
    dotsClass: showThumbnails ? "slick-dots slick-thumb" : "slick-dots",
  };

  return (
    <Box sx={{ width: "50%", maxWidth: 800, mx: "auto", mt: 4 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%", height: "auto" }} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
