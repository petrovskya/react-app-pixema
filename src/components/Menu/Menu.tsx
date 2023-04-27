import { ROUTE } from "router";
import { CustomLink, UserInfo } from "components";
import { BookmarkIcon, FireIcon, HomeIcon, SubtractIcon } from "assets";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { unsetUserAuth } from "store/features";

import { auth } from "../../firebase";
import { StyledMenu } from "./styled";

interface MenuProps {
  isLaptop: boolean;
  isOpen: boolean;
  handleClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
  idle: {},
};

export const Menu = ({ isOpen, handleClose, isLaptop }: MenuProps) => {
  const currentVariant = isLaptop ? (isOpen ? "open" : "closed") : "idle";
  const { isAuth, name } = useAppSelector((state) => state.user);
  const dispatch = UseAppDispatch();

  const handleClick = () => {
    auth.signOut();
    dispatch(unsetUserAuth());
  };

  return (
    <StyledMenu animate={currentVariant} variants={menuVariants} initial="idle">
      <UserInfo isAuth={isAuth} name={name} onClick={handleClick} />

      <CustomLink to={ROUTE.HOME} component={HomeIcon} onClick={handleClose}>
        Home
      </CustomLink>
      <CustomLink to={ROUTE.TRENDS} component={FireIcon} onClick={handleClose}>
        Trends
      </CustomLink>
      <CustomLink to={ROUTE.FAVORITES} component={BookmarkIcon} onClick={handleClose}>
        Favorites
      </CustomLink>
      <CustomLink to={ROUTE.SETTINGS} component={SubtractIcon} onClick={handleClose}>
        Settings
      </CustomLink>
    </StyledMenu>
  );
};
