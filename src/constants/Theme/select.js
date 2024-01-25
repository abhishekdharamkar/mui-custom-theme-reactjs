import { createTheme } from "@mui/material/styles";
import { Primary, themePalette } from "./colors";

export const themeSelect = createTheme({
  components: {
   
    MuiSelect: {
      variants: [
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            width: "10rem",
            height: "2.5rem",
            textAlign: "left",
            padding: "0.8125rem 1rem",
            color: themePalette.palette.secondary[800],
            fontWeight: 500,
            fontSize: "0.875rem !important",
            borderRadius: "5px",
            border: `1px solid ${themePalette.palette.secondary[200]}`,
            "&& fieldset": {
              borderColor: themePalette.palette.secondary[200],
            },
            "&:hover": {
              border: `1px solid ${themePalette.palette.secondary[200]}`,
            },
            "&:focus": {
              borderColor: themePalette.palette.secondary[200],
            },
            "&:active": {
              borderColor: themePalette.palette.secondary[200],
            },
          },
         
        },
      ],
    },
  },
});
