import { cyan, grey, orange } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// import { amber } from '@mui/material/colors';

// const color = red[500];

// A custom theme for this app
// const lightMain = "#9c27b0";
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          // main: lightMain,
          main: "#000000",
        },
        secondary: grey,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
    // ...other properties
  },
});

export default theme;
