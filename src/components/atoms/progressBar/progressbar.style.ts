import styled from "styled-components";

interface IProgressbar {
  backgroundColor?: string;
}
interface IBar {
  statusColor?: string;
  status: string;
}

export const ContainerProgressBar = styled.div<IProgressbar>`
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? backgroundColor : theme.palette.secondary};
  width: 100%;
  height: ${({ theme }) => theme.fontSizes.desktop.regular};
`;

export const Bar = styled.div<IBar>`
  background-color: ${({ theme, statusColor }) =>
    statusColor ? statusColor : theme.palette.primary};
  height: 100%;
  width: ${({ status }) => status};
  transition: 2s;

  animation-name: animated-bar;
  animation-duration: 2s;
  @keyframes animated-bar {
    from {
      width: 0%;
    }
    to {
      width: ${({ status }) => status};
    }
  }
`;
