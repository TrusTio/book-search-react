import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "contexts/AuthContext";
import { AppRoutes } from "AppRoutes";
import { MainContent } from "components/Layout/MainContent";
import { AppBar } from "components/Layout/AppBar";
import { ThemeProvider } from "styled-components";
import { DarkThemeToggle } from "components/generic/DarkThemeToggle";
import { GlobalStyles } from "components/Layout/Theme/global";
import { useDarkMode } from "components/Layout/Theme/useDarkMode";
import { darkTheme, lightTheme } from "components/Layout/Theme/theme";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <AuthContextProvider>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <BrowserRouter>
            <AppBar>
              <DarkThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </AppBar>
            <MainContent>
              <AppRoutes></AppRoutes>
            </MainContent>
          </BrowserRouter>
        </>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
