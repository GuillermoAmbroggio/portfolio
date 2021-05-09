import styled from "styled-components";

export const ContainerResume = styled.div`
  width: 100%;
  padding: 60px 60px 0px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    padding: 60px 150px 0px 150px;
  }
  @media (max-width: 376px) {
    padding: 60px 20px 0px 20px;
  }
`;

export const Date = styled.div`
  background-color: ${({ theme }) => theme.palette.tertiary};
  padding: 5px 15px;
  margin: 10px 0px;
  display: flex;
  align-self: flex-start;
  align-items: center;
`;
