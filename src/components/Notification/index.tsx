import { Alert, AlertColor, Snackbar, Typography } from "@mui/material";
import React from "react";

type NotificationProps = {
    open: boolean,
    message: string,
    severity: AlertColor | undefined,
    handleCloseAlert: () => void
}

export const Notification: React.FC< NotificationProps > = (
    {   open,
        message,
        severity,
        handleCloseAlert,
    }) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={4000}
            open={open}
            onClose={handleCloseAlert}
        >
            <Alert onClose={handleCloseAlert} severity={severity}>
                <Typography>
                    {message}
                </Typography>
            </Alert>
        </Snackbar>
    )
}