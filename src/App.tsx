"use client";
import React from "react";
import { Typography, Button, Box } from "@mui/material";
import ModeSelect from "./themes/ModeSelect";
import ModeToggle from "./themes/ModeToggle";

import Header from "./components/Header/Header";

const App: React.FC = () => {
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
        <Button variant="contained" color="secondary">
          hi hi
        </Button>
      </Box>
    </>
  );
};

export default App;
