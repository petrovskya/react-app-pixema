import { BurgerIcon, CancelIcon } from "assets";
import { Color } from "ui";

import { StyledBurgerButton } from "./styles";

interface BurgerMenuProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const BurgerMenu = ({ toggleMenu, isMenuOpen }: BurgerMenuProps) => (
  <StyledBurgerButton onClick={toggleMenu}>
    {isMenuOpen ? <CancelIcon fill={Color.WHITE} /> : <BurgerIcon />}
  </StyledBurgerButton>
);
