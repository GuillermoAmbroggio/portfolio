import styled from "styled-components";
import flagArg from "../../../assets/navbar/flagarg.png";
import flagUsa from "../../../assets/navbar/flagusa.png";

interface Props {
  active: boolean;
}

interface IThemeProps {
  modeTheme: "light" | "dark";
}

interface ILanguageProps {
  language: "es" | "en";
}

interface IMenu {
  activeMenu: boolean;
  modeTheme?: "light" | "dark";
}

export const ContainerNavBar = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  border-bottom: solid 1px ${({ theme }) => theme.palette.secondary};
  height: 65px;
  display: flex;
  position: fixed;
  z-index: 2;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
`;

export const List = styled.ul`
  margin-block-start: 0px;
  list-style: none;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.desktop.regular};
  color: ${({ theme }) => theme.palette.texts.title};
  align-items: center;
  justify-content: flex-end;
  padding: 0px;
  margin: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LeftList = styled.ul`
  margin-block-start: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.desktop.regular};
  color: ${({ theme }) => theme.palette.texts.title};
  align-items: center;
  justify-content: center;
  padding: 30px 0px;
  margin: 0;

  a {
    width: 100%;
    padding: 10px 20px;
  }

  .textMenu {
    font-size: 16px;
    margin-left: 8px;
  }
`;

export const LeftListItem = styled.li<Props>`
  background-color: ${(props) =>
    props.active ? props.theme.palette.primary : props.theme.palette.tertiary};
  padding: 15px 18px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.active
      ? props.theme.palette.background
      : props.theme.palette.texts.title};

  &:hover {
    transition: 0s;

    background-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.background};
  }
`;

export const ListItem = styled.li<Props>`
  margin-right: 16px;
  background-color: ${(props) =>
    props.active ? props.theme.palette.primary : props.theme.palette.tertiary};
  padding: 8px 12px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.active
      ? props.theme.palette.background
      : props.theme.palette.texts.title};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.background};
  }
  &:hover > span.textMenu {
    transition: 1s;
    font-size: initial;
    margin-left: 8px;
  }
`;

export const Link = styled.a`
  &:visited {
    color: ${({ theme }) => theme.palette.texts.title};
  }
`;

export const Menu = styled.div<IMenu>`
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, activeMenu }) =>
    activeMenu ? theme.palette.primary : theme.palette.texts.title};
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const LeftMenu = styled.div<IMenu>`
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  position: fixed;
  height: calc(100vh - 65px);
  top: 65px;
  -webkit-transition: 1s;
  transition: 1s;
  width: ${({ activeMenu }) => (activeMenu ? "300px" : "0px")};
  background-color: ${({ modeTheme }) =>
    modeTheme === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.9)"};
  z-index: 2;
  color: ${({ theme }) => theme.palette.background};

  html,
  body {
    margin: 0;
    height: 100%;
    overflow: hidden;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Toggle = styled.label<IThemeProps>`
  position: relative;
  width: 70px;
  border-radius: 30px;
  height: 35px;
  background-color: ${({ theme }) => theme.palette.tertiary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
  cursor: pointer;
  overflow: hidden;

  input {
    display: none;
  }
  .fa-sun {
    color: ${({ theme }) => theme.palette.primary};
    transform: ${({ modeTheme }) =>
      modeTheme === "light" ? "translatey(0px)" : "translatey(50px)"};
    -webkit-transition: 2s;
    transition: 2s;
  }

  .fa-moon {
    color: ${({ theme }) => theme.palette.primary};
    -webkit-transition: 2s;
    transition: 2s;
    transform: ${({ modeTheme }) =>
      modeTheme === "light" ? "translatey(-50px)" : "translatey(0px)"};
  }

  button {
    background: transparent;
    position: absolute;
    border-width: 0;
    left: 0;
    cursor: pointer;
    width: 70px;
    border-radius: 30px;
    height: 35px;
  }
  button:focus {
    outline: none;
  }
`;

export const Flags = styled.div`
  width: 70px;
  border-radius: 30px;
  height: 35px;
  background-color: ${({ theme }) => theme.palette.tertiary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  cursor: pointer;
`;

export const Arg = styled.img<ILanguageProps>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: url(${flagArg});
  background-size: cover;
  transform: ${({ language }) =>
    language === "en" ? "scale(0.5)" : "scale(1)"};
  -webkit-transition: 1s;
  transition: 1s;
`;

export const Usa = styled.img<ILanguageProps>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: url(${flagUsa});
  background-size: cover;
  transform: ${({ language }) =>
    language === "es" ? "scale(0.5)" : "scale(1)"};
  -webkit-transition: 1s;
  transition: 1s;
`;

export const ArrowUp = styled.div`
  background-color: ${({ theme }) => theme.palette.primary};
  color: white;
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    opacity: 0.6;
    bottom: 16px;
    right: 16px;
    &:hover {
      opacity: 1;
    }
  }
`;
