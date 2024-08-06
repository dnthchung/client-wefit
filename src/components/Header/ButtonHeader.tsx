import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { SvgIconComponent } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

interface ButtonHeaderProps {
  to: string;
  title: string;
  Icon: SvgIconComponent;
}

const ButtonHeader: React.FC<ButtonHeaderProps> = ({ to, title, Icon }) => {
  return (
    <Tooltip title={title} arrow>
      <Box
        component={RouterLink}
        to={to}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          color: "text.primary",
          paddingY: 1,
          paddingX: 1,
          border: "1px solid",
          borderColor: "grey.200",
          borderRadius: 1,
          boxShadow: 1,
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "grey.50",
            color: grey[500],
            // Apply color to icon on hover
            "& .icon": {
              color: grey[500],
            },
          },
        }}>
        <Icon
          className="icon"
          sx={{
            color: grey[800],
            width: 15,
            height: 15,
          }}
        />
      </Box>
    </Tooltip>
  );
};

export default ButtonHeader;
