import styled from "styled-components";

export const AnchorProjects = styled.div`
  display: block;
  height: 65px; /*same height as header*/
  margin-top: -65px; /*same height as header*/
  visibility: hidden;
`;

export const ContainerProjects = styled.div`
  width: 100%;
  padding: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    padding: 60px 150px;
  }
`;
