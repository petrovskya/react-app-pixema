import React from "react";
import { StyledBurgerButton } from "./styles";
import { BurgerIcon, CancelIcon } from "assets";
import { Color } from "ui";

interface BurgerMenuProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const BurgerMenu = ({ toggleMenu, isMenuOpen }: BurgerMenuProps) => {
  return (
    <StyledBurgerButton onClick={toggleMenu}>
      {isMenuOpen ? <CancelIcon fill={Color.WHITE} /> : <BurgerIcon />}
    </StyledBurgerButton>
  );
};
