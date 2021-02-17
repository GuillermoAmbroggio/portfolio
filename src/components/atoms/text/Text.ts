import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.regular};
  color: ${({ theme }) => theme.palette.texts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.mobile.regular};
  }
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.title};
  color: ${({ theme }) => theme.palette.texts.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.mobile.title};
  }
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.subTitle};
  color: ${({ theme }) => theme.palette.texts.subTitle};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.mobile.subTitle};
  }
`;
