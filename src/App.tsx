import React from "react";
import ThemeProvider from "./theme/ThemeProvider";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div style={{ height: "350px" }}>My Reactttt</div>
    </ThemeProvider>
  );
};

export default App;
