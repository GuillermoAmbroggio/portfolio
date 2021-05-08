import styled from "styled-components";

interface IStatus {
  status?: "success" | "error";
}

export const ContainerInput = styled.div``;
export const ContainerMessage = styled.div`
  padding: 0px 8px;
`;

export const Input = styled.input<IStatus>`
  height: 44px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 18px;
  border: 1px solid #ced4da;
  border-color: ${({ status, theme }) =>
    status === "error"
      ? theme.palette.error
      : status === "success"
      ? theme.palette.success
      : theme.palette.secondary};
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.texts.regular};
  background-color: ${({ theme }) => theme.palette.background};
  padding: 0px 20px;

  &::placeholder {
    color: ${({ theme }) => theme.palette.texts.subTitle};
  }

  &:focus {
    outline: none !important;
    border: 2px solid;
    border-color: ${({ theme }) => theme.palette.primary};
  }
`;

export const TextArea = styled.textarea<IStatus>`
  height: 200px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 18px;
  border: 1px solid;
  border-color: ${({ status, theme }) =>
    status === "error"
      ? theme.palette.error
      : status === "success"
      ? theme.palette.success
      : theme.palette.secondary};
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.texts.regular};
  background-color: ${({ theme }) => theme.palette.background};
  padding: 10px 20px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.palette.texts.subTitle};
  }

  &:focus {
    outline: none !important;
    border: 2px solid;
    border-color: ${({ theme }) => theme.palette.primary};
  }
`;

export const TextMessage = styled.p<IStatus>`
  color: ${({ status, theme }) =>
    status === "success" ? theme.palette.success : theme.palette.error};
  font-style: oblique;
  font-weight: 300;
`;
