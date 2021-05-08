import styled from "styled-components";

interface IThemeProps {
  modeTheme: "light" | "dark";
}

export const ContainerCard = styled.div<IThemeProps>`
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: rgba(69, 80, 91, 0.8);
  height: 400px;
  width: 400px;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:before {
    content: "";
    background: ${({ modeTheme }) =>
      modeTheme === "light"
        ? "rgba(255, 255, 255, 0.9)"
        : "rgba(0, 0, 0, 0.8)"};
    position: absolute;
    left: 30px;
    right: 30px;
    top: 30px;
    bottom: 30px;
    transition: all ease-in-out 0.3s;
    z-index: 2;
    opacity: 0;
  }

  & .portfolio-info {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    z-index: 3;
    transition: all ease-in-out 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  & .portfolio-info:before {
    display: block;
    content: "";
    width: 48px;
    height: 48px;
    position: absolute;
    top: 35px;
    left: 35px;
    border-top: 3px solid #d7dce1;
    border-left: 3px solid #d7dce1;
    transition: all 0.5s ease 0s;
    z-index: 9994;
  }

  & .portfolio-info:after {
    display: block;
    content: "";
    width: 48px;
    height: 48px;
    position: absolute;
    bottom: 35px;
    right: 35px;
    border-bottom: 3px solid #d7dce1;
    border-right: 3px solid #d7dce1;
    transition: all 0.5s ease 0s;
    z-index: 9994;
  }

  &:hover:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
  }

  &:hover .portfolio-info {
    opacity: 1;
  }

  &:hover .portfolio-info:before {
    top: 15px;
    left: 15px;
  }

  &:hover .portfolio-info:after {
    bottom: 15px;
    right: 15px;
  }
`;

export const ContainerIcon = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.tertiary};
  color: ${({ theme }) => theme.palette.texts.subTitle};

  &:hover {
    cursor: pointer;
    height: 40px;
    width: 40px;
    background-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.background};
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
