import styled from "styled-components";

export const AnchorAbout = styled.div`
  display: block;
  height: 65px; /*same height as header*/
  margin-top: -65px; /*same height as header*/
  visibility: hidden;
`;

export const ContainerAbout = styled.div`
  width: 100%;
  padding: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    padding: 60px 150px;
  }
  @media (max-width: 480px) {
    padding: 60px 20px;
  }
`;

export const Row = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgProfile = styled.img`
  width: 33.333%;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    list-style: none;
    margin-block-start: 0px;
    padding: 0px;
    margin: 0px;

    li {
      margin-bottom: 20px;
    }
  }
`;
