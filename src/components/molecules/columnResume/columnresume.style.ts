import styled from "styled-components";

export const ContainerColumnResume = styled.div`
  display: flex;
  width: 100%;
`;

export const ContainerLeft = styled.div`
  position: relative;
  width: 16px;
  display: flex;
  justify-content: center;
  margin-right: 8px;
  margin-top: 4px;
`;

export const Circle = styled.div`
  border-color: ${({ theme }) => theme.palette.primary};
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 0px;
  top: 0px;
`;

export const Bar = styled.div`
  background-color: ${({ theme }) => theme.palette.primary};
  width: 2px;
  height: calc(100% - 16px);
  margin-top: 16px;
`;
