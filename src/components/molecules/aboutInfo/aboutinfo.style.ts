import styled from "styled-components";

export const ContainerAboutInfo = styled.div`
  display: flex;
  align-items: center;

  i {
    margin-right: 8px;
    color: ${({ theme }) => theme.palette.primary};
  }
`;
