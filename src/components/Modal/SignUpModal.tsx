import { LogoIconLight } from 'assets';
import { Portal, PortalTarget } from 'components/Portal/Portal';
import React from 'react';
import { StyledModal } from './styles';

export const Modal = () => {
  return (
    <Portal target={PortalTarget.MODAL}>
      <StyledModal>Mодал</StyledModal>
    </Portal>
  );
};
