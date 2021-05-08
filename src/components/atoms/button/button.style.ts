import styled from "styled-components";

interface Ibutton {
  status: "primary";
}

export const Button = styled.button<Ibutton>`
  background-color: ${({ status, theme }) =>
    status === "primary" ? theme.palette.primary : theme.palette.background};
  color: ${({ status, theme }) =>
    status === "primary" ? theme.palette.background : theme.palette.primary};
  padding: 10px 35px;
  transition: 0.4s;
  border-radius: 50px;
  border: none;
  font-size: 20px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
