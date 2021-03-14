import styled from "styled-components";
import image from "../../../assets/home/herobg.jpg";

export const ContainerHome = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${image}) top right no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    background-color: ${({ theme }) => theme.palette.background};
    opacity: 0.7;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
`;
