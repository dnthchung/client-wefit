import React from "react";
import { Button } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

const ModeToggle: React.FC = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <Button
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
};

export default ModeToggle;

/**
 * - using hook useColorScheme, this hook will help us to save theme variable like dark or light to local storage so that we don't need to save it by ourselves
 * CSR - SSR
 * - in CSR, we can use this hook directly
 * - in SSR, we need to use getInitColorSchemeScript() API prevent flickering
 */
