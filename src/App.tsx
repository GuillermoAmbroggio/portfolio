import React from "react";
import ThemeProvider from "./theme/ThemeProvider";
import { NavBar } from "./components";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <NavBar />
        My Reactttasdasfjsdkf
        <h1>TITULO</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
