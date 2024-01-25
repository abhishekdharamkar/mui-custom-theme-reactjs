import React, { useState } from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

function CustomAlerts() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");

  const showAlert = (severity) => {
    setAlertSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
    setAlertSeverity(null);
  };

  return (
    <div>
      <div>
        <Button
          variant="contained"
          color="success"
          onClick={() => showAlert("success")}
        >
          Show Success Snackbar
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={() => showAlert("warning")}
        >
          Show Warning Snackbar
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => showAlert("error")}
        >
          Show Error Snackbar
        </Button>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Alert onClose={handleSnackbarClose} severity={alertSeverity}>
            This is a {alertSeverity} alert!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default CustomAlerts;
