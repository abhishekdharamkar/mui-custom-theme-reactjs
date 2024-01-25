import { createTheme } from "@mui/material/styles";
import { success, warning,danger, themePalette } from "./colors";

  export const themeAlert = createTheme(themePalette,{
  
    components: {
      
        MuiAlert: {
          variants: [
            {
              props: { severity: "success" },
              style: {
              backgroundColor: success[100],
              color: success[900],
              },
             
            },
            {
              props: { severity: "warning" },
              style: {
              backgroundColor: warning[100],
              color: warning[900],
              },
              
            },
            {
              props: { severity: "error" },
              style: {
              backgroundColor: danger[100],
              color: danger[900],
              },
            }
          ],
        },
      },
  });