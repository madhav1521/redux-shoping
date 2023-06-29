import { createTheme } from "@mui/material";
import { cyan, green, purple } from "@mui/material/colors";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      light: cyan[400]
    },
    secondary: {
      main: green[500],
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.cart-box": {
            maxHeight: '30rem',
            overflowY: 'auto',
            boxShadow: '0px 2px 10px rgba(167, 164, 139 , 0.60)',
            marginTop: '2rem',
          }
        }
      }
    }

  }
});