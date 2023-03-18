import React from 'react';
import { ROUTE } from 'router';
import styled from 'styled-components';
import { CustomLink } from 'components';
import { BookmarkIcon, FireIcon, HomeIcon, SubtractIcon } from 'assets';

export const Nav = () => {
  return (
    <StyledNav>
      <CustomLink to={ROUTE.HOME} component={HomeIcon}>
        Home
      </CustomLink>
      <CustomLink to={ROUTE.TRENDS} component={FireIcon}>
        Trends
      </CustomLink>
      {/* <CustomLink to={ROUTE.MOVIE}>Movie</CustomLink> */}
      <CustomLink to={ROUTE.FAVORITES} component={BookmarkIcon}>
        Favorites
      </CustomLink>
      {/* <CustomLink to={ROUTE.SEARCH}>Search</CustomLink> */}
      {/* <CustomLink to={ROUTE.SIGN_UP}>Sign In</CustomLink>
      <CustomLink to={ROUTE.SIGN_IN}>Sign Up</CustomLink> */}
      <CustomLink to={ROUTE.SETTINGS} component={SubtractIcon}>
        Settings
      </CustomLink>
      {/* <CustomLink to={ROUTE.RESET_PAAWORD}>Reset password</CustomLink> */}
    </StyledNav>
  );
};

export const StyledNav = styled.nav`
  display: grid;
  gap: 40px;
`;