import styled from "styled-components";

export const AnchorProjects = styled.div`
  display: block;
  height: 65px; /*same height as header*/
  margin-top: -65px; /*same height as header*/
  visibility: hidden;
`;

export const ContainerProjects = styled.div`
  width: 100%;
  padding: 60px 60px 0px 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    padding: 60px 150px;
  }
  @media (max-width: 480px) {
    padding: 60px 20px 0px 20px;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`;
