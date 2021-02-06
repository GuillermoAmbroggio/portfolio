import { createGlobalStyle } from "styled-components";

export const Wrapper = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.texts.regular};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Helvetica, Arial, sans-serif, 'Merriweather', Georgia, serif, 'Open Sans'; 
    transition: all 0.25s linear;
  }

  `;
