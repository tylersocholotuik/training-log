import "@/styles/globals.css";

// fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// theme
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/utils/theme/theme";

import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }) {
   return <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
         <NavBar />
      </header>
      <Component {...pageProps} />
   </ThemeProvider>
      ;
}
