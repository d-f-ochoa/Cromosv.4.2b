import "./styles.css";

// React
import { useState } from "react";

// Material UI
import { CssBaseline } from "@mui/material/";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { MainScreen } from "./components/MainScreen.js";
import { SettingsScreen } from "./components/SettingsScreen";

export default function App() {
  // estados
  const [currentScreen, setCurrentScreen] = useState("main");
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const screenJSX =
    currentScreen == "main" ? (
      <MainScreen onSettings={() => setCurrentScreen("settings")} />
    ) : (
      <SettingsScreen
        mode={mode}
        onToggleTheme={() => setMode(mode === "light" ? "dark" : "light")}
        onBack={() => setCurrentScreen("main")}
      />
    );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {screenJSX}
    </ThemeProvider>
  );
}
