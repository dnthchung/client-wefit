"use client";
import { Button, PaletteMode, Typography, useColorScheme } from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function ModeSelect() {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event: SelectChangeEvent) => {
    const selectedMode = event.target.value as PaletteMode;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
        <MenuItem value="system">System</MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  //cach 1: get theme mode from system -> https://mui.com/material-ui/customization/dark-mode/
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
  // console.log({ prefersDarkMode, prefersLightMode });

  //cach 2: get theme mode from system -> https://mui.com/material-ui/experimental-api/css-theme-variables/usage/#cssvarsprovider-gt-nbsp-props

  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

function App() {
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
        hihi
      </Button>
    </>
  );
}

export default App;
