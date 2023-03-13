import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";

type LoginType = {
    username: string;
    password: string;
}

export const LoginPage: React.FC<{}> = () => {

    const { getError, getSuccess } = useNotification();

    const [loginData, setLoginData] = React.useState<LoginType>({
        username: "",
        password: "",
    });

    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({...loginData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        LoginValidate.validate(loginData)
            .then(() => {
                getSuccess(JSON.stringify(loginData));
            }).catch((error) => {
                getError(error.message);
            })
    };

    return (
        <Container maxWidth="sm">
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Typography
                            variant="h4"
                            sx={{ mt:1, mb:1 }}
                        >
                            Formulario
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                name="username"
                                margin="normal"
                                fullWidth
                                label="Email"
                                sx={{ mt: 2, mb: 1.5 }}
                                type="text"
                                onChange={dataLogin}
                            />
                            <TextField
                                margin="normal"
                                name="password"
                                fullWidth
                                label="Password"
                                sx={{ mt: 1.5, mb: 1.5 }}
                                type="password"
                                onChange={dataLogin}
                            />
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={{ mt:1.5, mb:3 }}
                            >
                                Iniciar Sesión
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};