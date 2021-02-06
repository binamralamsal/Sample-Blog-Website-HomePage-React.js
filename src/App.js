import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

function App() {
  const localMode = localStorage.getItem("mode");
  const [theme, setTheme] = useState(localMode == "light" ? "light" : "dark");

  const darkTheme = createMuiTheme({
    palette: {
      type: theme,
    },
  });

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Header />
        <main>
          <Sidebar changeTheme={changeTheme} />
          <div class="container">
            <div class="content"></div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
