import styled from 'styled-components';

export const ContainerCarrusel = styled.div`
  width: -webkit-fill-available;
  padding: 20px 20px 0px 20px;
  @media (max-width: 980px) {
    width: auto;
  }
`;

export const Column = styled.div`
  width: -webkit-fill-available;
  padding: 0px 20px 20px 20px;

  @media (max-width: 980px) {
    width: auto;
  }
`;

export const RowResponsive = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
