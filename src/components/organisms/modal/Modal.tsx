import React, { ReactNode } from 'react';
import {
  ContainerModal,
  ContentModal,
  ButtonClose,
  ContainerClose,
} from './modal.style';
import Icon from '../../atoms/icon/Icon';
import useStore from '../../../hooks/useStore';

interface IModal {
  open: boolean;
  close: () => void;
  children: ReactNode;
}

const Modal: React.FC<IModal> = ({ open, children, close }) => {
  const { modeTheme } = useStore();

  return (
    <ContainerModal open={open} modeTheme={modeTheme}>
      <ButtonClose onClick={close}>
        <Icon name='fas fa-times' size={50} />
      </ButtonClose>
      <ContainerClose onClick={close} />
      <ContentModal modeTheme={modeTheme}>{children}</ContentModal>
    </ContainerModal>
  );
};

export default Modal;
