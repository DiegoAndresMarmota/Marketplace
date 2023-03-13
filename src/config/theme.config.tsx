import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React from "react";

type ThemeProp = {
    children: JSX.Element;
};

export enum ThemePalette {
    BG = "#12181b",
    PRIMARY = "#C8FA5F",
    FONT_GLOBAL = "'Montserrat', sans-serif",
    ERROR_MAIN = "#f44336",
    BG_ERROR_MAIN = "rgba(244, 67, 54, 0.1)",
    SUCCESS_MAIN = "66bb6a",
    BG_SUCCESS_MAIN = "rgba(102, 187, 106, 0.1)",
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
        },
        MuiAlert: {
            defaultProps: {
                style: {
                    borderRadius: "0.7em",
                    fontSize: "1.1em",
                },
            },
            styleOverrides: {
                standardError: {
                    border: `1px solid ${ThemePalette.ERROR_MAIN}`,
                    backgroundColor: ThemePalette.BG_ERROR_MAIN,
                },
                standardSuccess: {
                    border: `1px solid ${ThemePalette.SUCCESS_MAIN}`,
                    backgroundColor: ThemePalette.BG_SUCCESS_MAIN,
                },
            },
        },
    },
});

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
};