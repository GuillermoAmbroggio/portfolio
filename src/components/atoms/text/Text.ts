import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.regular};
  color: ${({ theme }) => theme.palette.texts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: 480px) {
    justify-content: left;
    font-size: ${({ theme }) => theme.fontSizes.mobile.regular};
  }
`;

export const SmallText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.small};
  color: ${({ theme }) => theme.palette.texts.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.mobile.small};
  }
`;

export const BoldText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.regular};
  color: ${({ theme }) => theme.palette.texts.regular};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.mobile.regular};
  }
`;

export const HeroTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.heroTitle};
  color: ${({ theme }) => theme.palette.texts.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.mobile.title};
  }
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.title};
  color: ${({ theme }) => theme.palette.texts.title};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration-line: underline;

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.mobile.title};
  }
`;
export const SubTitleHero = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.subTitle};
  color: ${({ theme }) => theme.palette.texts.subTitle};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.desktop.subTitle};
  color: ${({ theme }) => theme.palette.texts.subTitle};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.mobile.subTitle};
  }
`;

export const Link = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.desktop.regular};
  color: ${({ theme }) => theme.palette.primary};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.mobile.regular};
  }

  &:visited {
  }
  &:hover {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;
