import styled from "styled-components";

export const LineCard = styled.div`
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.palette.secondary};
  border-bottom-width: 2px;
  width: 100%;
  height: 10px;
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.subTitle};
  color: ${({ theme }) => theme.palette.texts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.mobile.subTitle};
  }
`;
