import styled, { StyledComponent, DefaultTheme } from "styled-components";

interface Props {
  active: boolean;
}

export const ContainerNavBar = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  border-bottom: solid 1px ${({ theme }) => theme.palette.secondary};
  height: 65px;
  display: flex;
`;

export const List = styled.ul`
  margin-block-start: 0px;
  list-style: none;
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.desktop.regular};
  color: ${({ theme }) => theme.palette.texts.title};
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 0;
  padding-right: 2vw;
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
