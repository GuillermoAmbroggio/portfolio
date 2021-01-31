import styled from "styled-components";
export const Wrapper = styled.main`
  // let's put all our global typography at the top
  ${({ theme }) => theme.typography};

  padding: 0px;
  margin: 0px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary.primary1};
  color: ${({ theme }) => theme.colors.secondary.secondary2};
`;
