import { Box, Typography } from "@mui/material";
import "./App.css";
import CustomTypography from "./component/CustomTypography";
import CustomButton from "./component/CustomButton";
import Customtextfield from "./component/Customtextfield";
import CustomSelect from "./component/CustomSelect";
import CustomAlerts from "./component/CustomAlerts";

function App() {
  return (
    <div className="App" style={{margin:"100px"}}>
    <Box sx={{ display:"flex",flexDirection:"column",gap:"2rem"}}>
    <CustomTypography />
    <CustomButton/>
    <Customtextfield/>
    <CustomSelect/>
    <CustomAlerts/>
    </Box>
    </div>
  );
}

export default App;
