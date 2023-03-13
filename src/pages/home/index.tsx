import { Button, Container } from "@mui/material";
import React from "react";
import { useNotification } from "../../context/notifications.context";

export const HomePage: React.FC<{}> = () => {

    const { getError } = useNotification();
    const handleClick = () => {
        getError("Tienes un mensaje!");
    }

    return (
        <Container sx={{ mt: 9 }} maxWidth="xl">
            <Button
                fullWidth
                variant='contained'
                onClick={handleClick}
            >
                Hola Home!
            </Button>
        </Container>
    )
}