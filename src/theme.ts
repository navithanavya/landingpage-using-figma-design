import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#0077b6" },
    secondary: { main: "#ffb703" }
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.6 }
  }
});

export default theme;
