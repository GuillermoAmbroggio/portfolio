import styled from "styled-components";

export const ContainerSkills = styled.div`
  width: 100%;
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    padding: 0px 150px;
  }
  @media (max-width: 480px) {
    padding: 0px 20px;
  }
`;

export const RowSkills = styled.div`
  display: flex;
  height: 250px;
  margin-top: 40px;
  width: 100%;
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;
