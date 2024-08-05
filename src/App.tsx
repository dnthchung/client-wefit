"use client";
import React from "react";
import { Typography, Button } from "@mui/material";
import ModeSelect from "./themes/ModeSelect";
import ModeToggle from "./themes/ModeToggle";

const App: React.FC = () => {
  return (
    <>
      <ModeSelect />
      <hr />
      <ModeToggle />
      <hr />
      <Typography variant="body2" color="text.primary">
        Hello World
      </Typography>
      <hr />
      <Button variant="contained" color="secondary">
        hi hi
      </Button>
    </>
  );
};

export default App;
