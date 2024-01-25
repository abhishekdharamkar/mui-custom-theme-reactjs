import { createTheme } from "@mui/material/styles";

export const Primary = {
    100: '#FAEDEA',
    200: '#F4D2CB',
    300: '#E8A698',
    400: '#DD7964',
    500: '#D24C31',
    600: '#B3412A',
    700: '#933522',
    800: '#742A1B',
    900: '#541E14',
};

export const  secondary={
    main: '#999999',
    100: '#FFFFFF',
    200: '#F2F2F2',
    300: '#E5E5E5',
    400: '#BFBFBF',
    500: '#999999',
    600: '#737373',
    700: '#4C4C4C',
    800: '#262626',
    900: '#000000',
  }

  export const success={
    100: '#D4F4E2', 
    500: '#28C76F', 
    900: '#1E9553',
  }
  export const danger={
    100: '#FBDDDD',
    500: '#EA5455',
    900: '#B03F40',
  }
  export const warning={
    100: '#FFECD9',
    500: '#FF9F43',
    900: '#BF7732',
  }

export const themePalette = createTheme({
  palette: {
    type: "light",
    primary: {
      main: Primary[500],
      ...Primary
    },
    secondary: {
      main: secondary[500],
      ...secondary,

    },
   success: {
      100: '#D4F4E2', 
      500: '#28C76F', 
      900: '#1E9553', 
    },
    danger: {
      100: '#FBDDDD',
      500: '#EA5455',
      900: '#B03F40',
    },
    warning: {
      100: '#FFECD9',
      500: '#FF9F43',
      900: '#BF7732',
    },
    info: {
      100: '#CCF5FA',  
      500: '#00CFE8',  
      900: '#009BAE',  
    },
    other: {
      lightBlue: '#88C2DD', 
      darkBlue: '#1C3E58', 
    },
    // hover: {
    //   main: "#40a9ff",
    // },
    // tabIndicator: { main: "#F32836" },
    // button: {
    //   main: Primary[500],
    //   dark: "#45166E",
    //   borderLight: "#968E99",
    //   light: "#E7E1E5",
    //   link: "#0047BB",
    //   lightSecondary: "#EDDDF6",
    // },
    // containerBorder: {
    //   light: "#968E99",
    // },
    // containers: {
    //   surface5: "rgba(118, 73, 160, 0.14)",
    // },
  },
});