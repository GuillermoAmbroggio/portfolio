import styled from "styled-components";

interface Props {
  active: boolean;
}

interface ITProps {
  modeTheme: "light" | "dark";
}

export const ContainerNavBar = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  border-bottom: solid 1px ${({ theme }) => theme.palette.secondary};
  height: 65px;
  display: flex;
  position: fixed;
  z-index: 2;
  width: 100%;
`;

export const List = styled.ul`
  margin-block-start: 0px;
  list-style: none;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.desktop.regular};
  color: ${({ theme }) => theme.palette.texts.title};
  align-items: center;
  justify-content: flex-end;
  padding: 0px 30px 0px 30px;
  margin: 0;
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

export const Toggle = styled.label<ITProps>`
  position: relative;
  width: 70px;
  border-radius: 30px;
  height: 35px;
  background-color: ${({ theme }) => theme.palette.tertiary};
  position: relative;
  left: 55%;
  top: 15px;
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
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .fa-moon {
    color: ${({ theme }) => theme.palette.primary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
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
