import { createTheme } from "@mui/material/styles";

export const themeLayout = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
    },
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.size === "large" && {
            borderRadius: 28,
            padding: theme.spacing(3),
          }),
          ...(ownerState.size === "medium" && {
            borderRadius: 14,
            padding: theme.spacing(2),
          }),
          ...(ownerState.size === "small" && {
            borderRadius: 7,
            padding: theme.spacing(1),
          }),
        }),
      },
    },
  },
});