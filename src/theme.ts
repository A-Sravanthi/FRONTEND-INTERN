import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",   // Blue → change to your Figma primary color
    },
    secondary: {
      main: "#9c27b0",   // Purple → change if needed
    },
    background: {
      default: "#fafafa", // Chat background
      paper: "#ffffff",   // Panels, inputs
    },
    text: {
      primary: "#000000", // Black text
      secondary: "#555555", // Grey text
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
