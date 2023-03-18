import React from 'react';
import { ROUTE } from '../router/routes';
import styled from 'styled-components';
import { CustomLink } from './CustomLink';
import { BookmarkIcon, FireIcon, HomeIcon, SubtractIcon } from 'assets';
import { Colors } from 'ui/colors';

export const Nav = () => {
  return (
    <StyledNav>
      <CustomLink
        to={ROUTE.HOME}
        component={HomeIcon}
        fill={Colors.SECONDARY}
        inheritViewBox
      >
        Home
      </CustomLink>
      <CustomLink
        to={ROUTE.TRENDS}
        component={FireIcon}
        fill={Colors.SECONDARY}
        inheritViewBox
      >
        Trends
      </CustomLink>
      {/* <CustomLink to={ROUTE.MOVIE}>Movie</CustomLink> */}
      <CustomLink
        to={ROUTE.FAVORITES}
        component={BookmarkIcon}
        fill={Colors.SECONDARY}
        inheritViewBox
      >
        Favorites
      </CustomLink>
      {/* <CustomLink to={ROUTE.SEARCH}>Search</CustomLink> */}
      {/* <CustomLink to={ROUTE.SIGN_UP}>Sign In</CustomLink>
      <CustomLink to={ROUTE.SIGN_IN}>Sign Up</CustomLink> */}
      <CustomLink
        to={ROUTE.SETTINGS}
        component={SubtractIcon}
        fill={Colors.SECONDARY}
        inheritViewBox
      >
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
