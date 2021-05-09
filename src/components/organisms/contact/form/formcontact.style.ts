import styled from "styled-components";

export const ContainerForm = styled.form`
  min-height: 200px;
`;

export const LeftInput = styled.div`
  margin-right: 10px;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const RightInput = styled.div`
  margin-left: 10px;
  margin-bottom: 20px;

  width: 100%;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const ContainerButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ContainerToast = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
