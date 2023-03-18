import React from 'react';
import { ROUTE } from '../router/routes';
import styled from 'styled-components';
import { CustomLink } from './CustomLink';
import { BookmarkIcon, FireIcon, HomeIcon, SubtractIcon } from 'assets';

export const Nav = () => {
  return (
    <StyledNav>
      <CustomLink to={ROUTE.HOME}>
        <HomeIcon />
        Home
      </CustomLink>
      <CustomLink to={ROUTE.TRENDS}>
        <FireIcon />
        Trends
      </CustomLink>
      {/* <CustomLink to={ROUTE.MOVIE}>Movie</CustomLink> */}
      <CustomLink to={ROUTE.FAVORITES}>
        <BookmarkIcon />
        Favorites
      </CustomLink>
      {/* <CustomLink to={ROUTE.SEARCH}>Search</CustomLink> */}
      {/* <CustomLink to={ROUTE.SIGN_UP}>Sign In</CustomLink>
      <CustomLink to={ROUTE.SIGN_IN}>Sign Up</CustomLink> */}
      <CustomLink to={ROUTE.SETTINGS}>
        <SubtractIcon />
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
