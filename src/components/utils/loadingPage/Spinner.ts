import styled from "styled-components";

export const Spinner = styled.div`
  border: 16px solid #0042a4;
  border-radius: 50%;
  border-width: 16px;
  border-style: solid;
  border-top-color: ${({ theme }) => theme.palette.primary};
  border-right-color: ${({ theme }) => theme.palette.primary};
  border-bottom-color: ${({ theme }) => theme.palette.secondary};
  border-left-color: ${({ theme }) => theme.palette.secondary};
  width: 100px;
  height: 100px;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
    border-width: 10px;
  }
`;
