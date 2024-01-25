import { createTheme } from "@mui/material/styles";
import { Primary, secondary } from "./colors";

export const themeInputs = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        borderRadius: '5px',
        variants: [
          {
            props: { color: 'primary', error: false, disabled: false },
            style: {
              '&:focus-within': {
                backgroundColor: Primary[50],
              },
            },
          },
        ],
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          zIndex: 0,
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        color: 'primary',
        autoComplete: 'off',
      },
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        color: 'primary',
      },
      variants: [
        {
          props: { color: 'primary', error: false, disabled: false },
          style: {
            backgroundColor: Primary[50], // Adjust as needed
            '&:hover': {
              backgroundColor: Primary[200], // Adjust as needed
            },
            '&:focus-within': {
              backgroundColor: Primary[50], // Adjust as needed
            },
          },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        color: 'primary',
      },
      variants: [
        {
          props: { variant: 'outlined', error: false, disabled: false },
          style: {
            borderColor:secondary[300],
            color:secondary[600],
            '&:hover': {
              borderColor: secondary[200], 
            },
            '&:focus-within': {
              borderColor: secondary[500], 
              color:Primary[500]
            },
           
            '&:disabled': {  //not working
              backgroundColor: secondary[200], 
              color: secondary[500], 
              borderColor:secondary[300]
            },
          },
        },
        // {
        //   props: { color: 'success' },
        //   style: {
        //     borderColor:Primary[500],
        //     color:success[500],
        //   },
        // },

      ],
    },
  },
});