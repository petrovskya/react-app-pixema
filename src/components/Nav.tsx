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
      <CustomLink to={ROUTE.FAVORITES} component={BookmarkIcon}>
        Favorites
      </CustomLink>
      <CustomLink to={ROUTE.SETTINGS} component={SubtractIcon}>
        Settings
      </CustomLink>
    </StyledNav>
  );
};

export const StyledNav = styled.nav`
  display: grid;
  place-content: start;
  gap: 40px;
  margin-top: 64px;
`;
