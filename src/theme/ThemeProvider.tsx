import React from "react";
import { ThemeProvider as StyleThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { Wrapper } from "./wrapper/Wrapper.style";
import useStore from "../hooks/useStore";

const ThemeProvider: React.FC = ({ children }) => {
  const { modeTheme } = useStore();

  return (
    <StyleThemeProvider theme={modeTheme === "light" ? lightTheme : darkTheme}>
      <Wrapper />
      {children}
    </StyleThemeProvider>
  );
};

export default ThemeProvider;
