import React from "react";
import { ThemeProvider as StyleThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import { Wrapper } from "./wrapper/Wrapper.style";

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <StyleThemeProvider theme={lightTheme}>
      <Wrapper />
      {children}
    </StyleThemeProvider>
  );
};

export default ThemeProvider;
