import React from "react";
import { ThemeProvider as StyleThemeProvider } from "styled-components";
import theme from "./theme";
import { Wrapper } from "./wrapper/Wrapper.style";

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <StyleThemeProvider theme={theme.demoContainer}>
      <Wrapper>{children}</Wrapper>
    </StyleThemeProvider>
  );
};

export default ThemeProvider;
