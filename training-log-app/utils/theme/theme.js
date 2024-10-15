import { createTheme } from '@mui/material/styles';
import { deepPurple, indigo } from '@mui/material/colors';

const theme = createTheme({  
    palette: {
        mode: 'dark',
        primary: deepPurple,
        secondary: indigo
    },
    typography: {
        fontSize: 8
    }
});

export { theme };