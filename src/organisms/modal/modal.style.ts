import styled from "styled-components";

interface IModal {
  open?: boolean;
  modeTheme: "light" | "dark";
}

export const ContainerModal = styled.div<IModal>`
  display: ${({ open }) => (open ? "flex" : "none")};
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 3;
`;
//  box-shadow: -5px 9px 27px -11px rgba(219, 220, 222, 1);
// box-shadow: 2px 11px 31px 24px rgba(0,0,0,0.75);
export const ContentModal = styled.div<IModal>`
  box-shadow: ${({ modeTheme }) =>
    modeTheme === "light"
      ? "none"
      : "1px 0px 31px 14px  rgba(219, 220, 222, 1)"};
  margin: 40px 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background};
  overflow-y: auto;
  z-index: 5;

  @media (max-width: 768px) {
    margin: 70px 20px;
  }
`;

export const ButtonClose = styled.div`
  position: absolute;
  color: ${({ theme }) => theme.palette.secondary};
  top: 15px;
  right: 15px;
  height: 50px;
  width: 50px;
  z-index: 5;
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ContainerClose = styled.div`
  position: absolute;
  background-color: transparent;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
`;
