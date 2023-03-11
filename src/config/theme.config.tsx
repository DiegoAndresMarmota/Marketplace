import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element;
};

export enum ThemePalette {
    BG = "#12181b",
    PRIMARY = "#C8FA5F",
    FONT_GLOBAL = "'Montserrat', sans-serif"
};

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: ThemePalette.BG,
        },
        primary: {
            main: ThemePalette.PRIMARY,
        },
    },
    typography: {
        fontFamily: ThemePalette.FONT_GLOBAL,
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em",
                }
            }
        }
    }   
})

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
};