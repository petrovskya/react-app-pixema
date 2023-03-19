import React from 'react';
import { Outlet } from 'react-router-dom';
import { CustomLink, Nav } from 'components';
import { LogoIconLight, SignInIcon, SignUpIcon } from 'assets';
import { ROUTE } from 'router';
import { ArrowIcon } from 'assets';
import {
  StyledAside,
  StyledHeader,
  StyledMain,
  StyledOutlet,
  StyledSearchInput,
  StyledTemplate,
  StyledText,
} from './styles';

export const MainTemplate = () => {
  const isAuth = false;

  return (
    <StyledTemplate>
      <StyledAside>
        <LogoIconLight />
        <Nav />
      </StyledAside>
      <StyledMain>
        <StyledHeader>
          <StyledSearchInput placeholder='Search' />
          {isAuth ? (
            <>
              <div> </div>
              <div>Artem Lapitski</div>
              <button>
                <ArrowIcon />
              </button>
            </>
          ) : (
            <>
              <CustomLink to={ROUTE.SIGN_IN} component={SignInIcon}>
                Sign In
              </CustomLink>
              <CustomLink to={ROUTE.SIGN_UP} component={SignUpIcon}>
                Sign UP
              </CustomLink>
            </>
          )}
        </StyledHeader>
        <StyledOutlet>
          <Outlet />
        </StyledOutlet>
      </StyledMain>
      <StyledText>© All Rights Reserved</StyledText>
    </StyledTemplate>
  );
};
