import React from "react";
import { ContainerCard } from "./boxcard.style";
import useStore from "../../../hooks/useStore";

const BoxCard: React.FC = ({ children }) => {
  const { modeTheme } = useStore();
  return <ContainerCard modeTheme={modeTheme}>{children}</ContainerCard>;
};

export default BoxCard;
