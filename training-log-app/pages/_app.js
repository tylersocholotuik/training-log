import "@/styles/globals.css";

// fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// theme
import { ThemeProvider } from "@emotion/react";
import { theme } from "@/utils/theme/theme";

export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
          <Component {...pageProps} />
       </ThemeProvider>
   ;
}
