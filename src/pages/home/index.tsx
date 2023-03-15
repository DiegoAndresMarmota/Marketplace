import React from "react";
import { Button, Container } from "@mui/material";
import { HeaderComponent } from "../../components";
import { characters } from "../../api/character";

export const HomePage: React.FC<{}> = () => {

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
                title="Cafetera Piccolo Xs Cápsulas Starbucks X3 Cajas"
                description="Cafetera Nescafé Dolce Gusto Piccolo XS black , es una máquina de café manual perfecta para cualquier cocina gracias a su pequeño tamaño y a su diseño moderno. Su sistema de alta presión de hasta 15 bares te permitirá preparar bebidas de gran calidad en solo 30 segundos, tú solo deberás introducir tu cápsula y pulsar el botón."
                element={<Button
                    fullWidth
                    variant="contained">Añadir</Button>}
            />
        </Container>
    );
};