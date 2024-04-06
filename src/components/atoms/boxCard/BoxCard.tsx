import React, { ReactNode } from 'react';
import { ContainerCard } from './boxcard.style';
import useStore from '../../../hooks/useStore';

interface BoxCardProps {
  children: ReactNode;
}
const BoxCard: React.FC<BoxCardProps> = ({ children }) => {
  const { modeTheme } = useStore();
  return <ContainerCard modeTheme={modeTheme}>{children}</ContainerCard>;
};

export default BoxCard;
