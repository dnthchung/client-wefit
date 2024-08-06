"use client";
import React from "react";
import { Typography, Button, Box } from "@mui/material";
import ModeSelect from "./themes/ModeSelect";
import ModeToggle from "./themes/ModeToggle";

import Header from "./components/Header/Header";
import ImageSlider from "./components/ImageSlider/ImageSlider";

const App: React.FC = () => {
  const images = [
    "https://res.cloudinary.com/dio2hil1s/image/upload/v1721293217/hlw4c8a85b338d0407a_image5.jpg",
    "https://res.cloudinary.com/dio2hil1s/image/upload/v1721293217/hlw4c8a85b338d0407a_image1.jpg",
    "https://res.cloudinary.com/dio2hil1s/image/upload/v1721293217/hlw4c8a85b338d0407a_image3.jpg",
    // Add more images as needed
  ];

  return (
    <>
      <Header />

      <Box
        sx={{
          padding: 5,
        }}>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
          <ModeSelect />
        </Box>
        <hr />
        <ModeToggle />
        <hr />
        <Typography variant="body2" color="text.primary">
          Hello World
        </Typography>
        <hr />
        <Button variant="contained" color="primary">
          hi hi
        </Button>

        <hr />
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            mx: "auto",
            mt: 4,
          }}>
          <ImageSlider images={images} showThumbnails={true} />
        </Box>
        <hr />
        <Button variant="contained" color="secondary">
          hi hi
        </Button>
      </Box>
    </>
  );
};

export default App;
