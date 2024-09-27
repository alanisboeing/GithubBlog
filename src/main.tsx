import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme.ts";
import { GlobalStyle } from "./styles/GlobalStyle.ts";
import { UserProvider } from "./contexts/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>
        <App />
      </UserProvider>
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>
);
