import styled from "styled-components";

interface ICard {
  modeTheme: "light" | "dark";
}

export const ContainerCard = styled.div<ICard>`
  box-shadow: ${({ modeTheme }) =>
    modeTheme === "light"
      ? "-5px 9px 27px -11px rgba(219, 220, 222, 1)"
      : "1px 0px 34px -1px rgba(219, 220, 222, 1)"};
  padding: 20px;
`;
