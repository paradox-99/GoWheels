import { createTheme } from "@mui/material";

export const customTheme1 = createTheme({
    typography: {
        fontFamily: '"Merriweather", serif',
    }
})

export const customTheme2 = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 700,
        }
    },
    typography: {
        fontFamily: '"Nunito Sans", sans-serif',
    }
})