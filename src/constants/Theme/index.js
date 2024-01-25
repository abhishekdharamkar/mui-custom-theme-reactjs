import { createTheme } from "@mui/material/styles";
import { themeButtons } from "./buttons";
import { themePalette } from "./colors";
import { themeTypography } from "./typography";
import { themeAlert } from "./alert";
import { themeInputs } from "./inputs";
import { themeSelect } from "./select";
console.log(themeAlert)
const theme = createTheme(
  themeButtons,
  themePalette,
  themeAlert,
  themeSelect,
  themeTypography,
  
  // themeInputs,
);

export default theme;