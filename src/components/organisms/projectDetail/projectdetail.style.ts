import styled from "styled-components";

export const ContainerCarrusel = styled.div`
  width: 60%;
  padding: 20px;
  @media (max-width: 980px) {
    width: auto;
  }
`;

export const Column = styled.div`
  width: 40%;
  padding: 20px;
  @media (max-width: 980px) {
    width: auto;
  }
`;

export const RowResponsive = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
