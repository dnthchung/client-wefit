// "use client";
// import {
//   Box,
//   Button,
//   PaletteMode,
//   Typography,
//   useColorScheme,
// } from "@mui/material";
// // import useMediaQuery from "@mui/material/useMediaQuery";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// // icon
// import {
//   LightMode,
//   DarkModeOutlined,
//   SettingsBrightness,
// } from "@mui/icons-material";

// function ModeSelect() {
//   const { mode, setMode } = useColorScheme();

//   const handleChange = (event: SelectChangeEvent) => {
//     const selectedMode = event.target.value as PaletteMode;
//     setMode(selectedMode);
//   };

//   return (
//     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//       <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
//       <Select
//         labelId="label-select-dark-light-mode"
//         id="demo-select-small"
//         value={mode}
//         label="Mode"
//         onChange={handleChange}
//       >
//         <MenuItem value="light">
//           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <LightMode fontSize="small" />
//             Light
//           </div>
//         </MenuItem>
//         <MenuItem value="dark">
//           {/* <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <DarkModeOutlined fontSize="small" />
//             Dark
//           </div> */}
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//             <DarkModeOutlined fontSize="small" />
//             Dark
//           </Box>
//         </MenuItem>
//         <MenuItem value="system">
//           {/* <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <SettingsBrightness fontSize="small" />
//             System
//           </div> */}
//           <Box display="flex" alignItems="center" gap={1}>
//             <SettingsBrightness fontSize="small" />
//             System
//           </Box>
//         </MenuItem>
//       </Select>
//     </FormControl>
//   );
// }

// function ModeToggle() {
//   const { mode, setMode } = useColorScheme();
//   //cach 1: get theme mode from system -> https://mui.com/material-ui/customization/dark-mode/
//   // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
//   // const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
//   // console.log({ prefersDarkMode, prefersLightMode });

//   //cach 2: get theme mode from system -> https://mui.com/material-ui/experimental-api/css-theme-variables/usage/#cssvarsprovider-gt-nbsp-props

//   return (
//     <Button
//       onClick={() => {
//         setMode(mode === "light" ? "dark" : "light");
//       }}
//     >
//       {mode === "light" ? "Turn dark" : "Turn light"}
//     </Button>
//   );
// }

// function App() {
//   return (
//     <>
//       <ModeSelect />
//       <hr />
//       <ModeToggle />
//       <hr />
//       <Typography variant="body2" color="text.primary">
//         Hello World
//       </Typography>
//       <hr />
//       <Button variant="contained" color="secondary">
//         hi hi
//       </Button>
//     </>
//   );
// }

// export default App;

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
