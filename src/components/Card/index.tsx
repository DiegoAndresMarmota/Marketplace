import { Card, CardMedia, CardContent, Typography, CardActions, Button, Divider } from "@mui/material";
import React from "react";

type CardProps = {
    title: string,
    description: string,
    image: string,
    price: number,
}

export const CardComponent: React.FC<CardProps> = ({title, description, image, price}) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Mercaderia"
            />
            <CardContent>
                <Typography variant="h5" sx={{ mb: 1.5 }}> {title} </Typography>
                <Divider />
                <Typography variant="h6" sx={{ mt: 1.5 }}> ${price} </Typography>
                <Divider />
                <Typography variant="h6" sx={{ mt: 1.5 }}> {description} </Typography>
            </CardContent>
            <CardActions>
                <Button fullWidth variant="contained" size="small">Añadir cantidad</Button>
                <Button fullWidth variant="contained" size="small">Añadir al Carrito</Button>
            </CardActions>
        </Card>
    )
}
