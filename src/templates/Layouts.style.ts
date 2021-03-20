import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ColumnLeft = styled.div`
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

export const ColumnRight = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 768px) {
    padding-left: 0px;
    margin-top: 15px;
  }
`;
