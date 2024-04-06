import styled from 'styled-components';

export const Link = styled.a`
  &:visited {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

export const ContainerDownload = styled.div`
  position: fixed;
  z-index: 1;
  top: 140px;
  left: 16px;
  margin-right: 16px;
  background-color: ${({ theme }) => theme.palette.common.black};
  padding: 8px 12px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.palette.common.white};
  border-width: 1px;
  border-style: solid;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.common.white};

  &:hover {
    background-color: ${({ theme }) => theme.palette.common.black};
    color: ${({ theme }) => theme.palette.background};
  }
  &:hover > span.textMenu {
    transition: 1s;
    font-size: initial;
    margin-left: 8px;
  }
  &:hover > p {
    color: ${({ theme }) => theme.palette.background};
  }

  @media (max-width: 480px) {
    opacity: 0.2;
    &:hover {
      opacity: 1;
    }
  }
`;

export const TextCV = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-left: 8px;

  &:hover {
    color: ${({ theme }) => theme.palette.background};
  }
`;

export const IconFixtuwin = styled.img`
  height: 30px;
  width: 30px;
`;
