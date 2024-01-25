import { createTheme } from "@mui/material/styles";
import { Primary, secondary, themePalette } from "./colors";
export const themeButtons = createTheme(themePalette, {
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: '"Montserrat"',
          justifyContent: "center",
          alignItems: "center",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            "&:hover": {
              backgroundColor: Primary[700],
              boxShadow: "0px 2px 4px 0px rgba(10, 39, 86, 0.15);",
            },
            // "&:focus": {
            //   backgroundColor: Primary[400],
            // },
            "&:disabled": {
              backgroundColor: Primary[500],
              color: secondary[100],
              opacity: 0.5,
            },
            // "&:active": {
            //   backgroundColor: Primary[500],
            //   boxShadow: "unset",
            // },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            color: secondary[800],
            borderColor: Primary[500],
            "&:hover": {
              backgroundColor:"transparent",
              borderColor: Primary[700],
              boxShadow: "0px 2px 4px 0px rgba(10, 39, 86, 0.15)",
            },
            "&:disabled": {
              backgroundColor: secondary[100],
              borderColor: Primary[500],
              color: secondary[800],
              opacity: 0.5,
            },
            // "&:active": {
            //   color:  secondary[800],
            //   borderColor:  Primary[500],
            // },
          },
        },
        {
          props: { variant: "Tertiary", color: "primary" },
          style: {
            color: Primary[500],
            backgroundColor: secondary[100],

            "&:hover": {
              backgroundColor: secondary[100],
              color: Primary[700],
              // borderColor: Primary[700],
              border: "1px solid ",
            },
            // "&:focus": {
            // backgroundColor: "none",
            // borderColor: Primary[500],
            // },
            "&:disabled": {
              backgroundColor: secondary[100],
              borderColor: "none",
              color: Primary[500],
            },
            // "&:active": {
            //     borderColor: Primary[700],
            //     color: Primary[700],
            // },
          },
        },
        {
          props: { size: "small" },
          style: {
            padding: "6px 14px",
            fontSize: "12px",
            height: "30px",
            gap: "10px",
            borderRadius: "4px",
          },
        },
        {
          props: { size: "medium" },
          style: {
            height: "40px",
            padding: "9px 20px",
            gap: "10px",
            borderRadius: "6px",
          },
        },
        {
          props: { size: "large" },
          style: {
            height: "50px",
            padding: "12px 26px",
            gap: "10px",
            borderRadius: "8px",
          },
        },
      ],
    },
  },
});
