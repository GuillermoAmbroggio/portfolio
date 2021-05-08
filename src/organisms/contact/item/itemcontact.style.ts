import styled from "styled-components";

export const ContainerItem = styled.div`
  display: flex;

  &:hover .containericon {
    background-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.background};
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  width: 60px;
  height: 50px;
  background-color: #eef7ff;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.palette.primary};
  margin-right: 16px;
`;

export const Title = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.palette.texts.title};
  font-weight: 600;
`;
export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.texts.subTitle};
`;
