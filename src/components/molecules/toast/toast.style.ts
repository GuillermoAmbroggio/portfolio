import styled from "styled-components";

interface IStatus {
  status: "success" | "error";
}

export const ContainerToast = styled.div<IStatus>`
  display: flex;
  align-items: center;
  background-color: ${({ status }) =>
    status === "error" ? "#ffbebd" : "#dff2bf"};
  padding: 20px;
  border-radius: 10px;
  align-self: center;
  i {
    color: ${({ status, theme }) =>
      status === "error" ? theme.palette.error : theme.palette.success};
    padding-top: 5px;
    font-size: 18px;
  }
`;

export const TextMessage = styled.p<IStatus>`
  margin-left: 12px;
  font-weight: bold;
  font-size: 18px;
  color: ${({ status, theme }) =>
    status === "success" ? theme.palette.success : theme.palette.error};
`;
