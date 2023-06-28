import { createTheme } from "@mui/material";
import { cyan, green, purple } from "@mui/material/colors";

export const appTheme = createTheme({
    palette: {
      primary: {
        main: purple[500],
        light:cyan[400]
      },
      secondary: {
        main: green[500],
      },
    },
    components:{
        MuiPaper:{
            styleOverrides:{
                root:{
                    "&.product-list":{
                        backgroundColor:'#adb5bd',
                    }
                }
            }
        }
    }
  });