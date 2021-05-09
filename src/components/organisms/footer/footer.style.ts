import styled from "styled-components";

export const ContainerFooter = styled.div`
  background-color: ${({ theme }) => theme.palette.tertiary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  text-align: center;
`;

export const TextName = styled.p`
  color: ${({ theme }) => theme.palette.texts.title};
  font-size: 36px;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  margin-left: 10px;
  @media (max-width: 480px) {
    font-size: 26px;
    margin: 15px 0px;
  }
`;

export const ContainerTexts = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 480px) {
    display: block;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 0px;
  }
`;

export const FirstTexts = styled.p`
  display: flex;
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
`;

export const SubText = styled.p`
  color: ${({ theme }) => theme.palette.texts.regular};
  font-style: italic;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  padding: 0;
  margin: 0 0 40px 0;
`;
export const ContainerIcons = styled.div`
  display: flex;

  i {
    color: ${({ theme }) => theme.palette.background};
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.primary};
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: 15px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Corazon = styled.p`
  color: ${({ theme }) => theme.palette.primary};
  margin-left: 10px;
  margin-right: 10px;
`;
