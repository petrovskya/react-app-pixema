import { ROUTE } from "router";
import { CustomLink } from "components";
import { BookmarkIcon, FireIcon, HomeIcon, SubtractIcon } from "assets";

import { StyledNav } from "./styles";

export const Nav = () => (
  <StyledNav>
    <CustomLink to={ROUTE.HOME} component={HomeIcon}>
      Home
    </CustomLink>
    <CustomLink to={ROUTE.TRENDS} component={FireIcon}>
      Trends
    </CustomLink>
    <CustomLink to={ROUTE.FAVORITES} component={BookmarkIcon}>
      Favorites
    </CustomLink>
    <CustomLink to={ROUTE.SETTINGS} component={SubtractIcon}>
      Settings
    </CustomLink>
  </StyledNav>
);
