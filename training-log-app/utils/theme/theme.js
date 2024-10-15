import { createTheme } from '@mui/material/styles';
import { deepPurple, indigo } from '@mui/material/colors';

const theme = createTheme({ 
    colorSchemes: {
        light: {
            palette: {
                primary: deepPurple,
                secondary: indigo
            },
        },
        dark: {
            palette: {
                primary: deepPurple,
                secondary: indigo
            },
        },
    }, 
    typography: {
        fontSize: 8
    }
});

export { theme };