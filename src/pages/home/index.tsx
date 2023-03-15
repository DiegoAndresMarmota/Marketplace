import React from "react";
import { Button, Container } from "@mui/material";
import { HeaderComponent } from "../../components";
import { characters } from "../../api/character";

export const HomePage: React.FC<{}> = () => {

    const [] = React.useState(null);

    React.useEffect(() => {
        characters.getAll({ page: 1 }).then((res) => {
            console.log(res.data.results);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <Container
            maxWidth="xl">
            <HeaderComponent
                title="Registro "
                description="Lista de Compras para ir al mercado."
                element={<Button
                    fullWidth
                    variant="contained">Revisar pedido</Button>}
            />

        </Container>
    );
};