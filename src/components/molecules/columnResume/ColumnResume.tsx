import React, { ReactNode } from 'react';
import {
  Circle,
  Bar,
  ContainerLeft,
  ContainerColumnResume,
} from './columnresume.style';
import { Column } from '../../templates/Layouts.style';

interface IColumnResume {
  style?: React.CSSProperties;
  children: ReactNode;
}

const ColumnResume: React.FC<IColumnResume> = ({ children, style }) => {
  return (
    <ContainerColumnResume style={style}>
      <ContainerLeft>
        <Circle />
        <Bar />
      </ContainerLeft>
      <Column> {children}</Column>
    </ContainerColumnResume>
  );
};

export default ColumnResume;
