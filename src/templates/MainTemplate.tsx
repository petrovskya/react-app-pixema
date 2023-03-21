import React from 'react';
import { Outlet } from 'react-router-dom';
import { CustomLink, Nav } from 'components';
import { LogoIconLight, SignInIcon, SignUpIcon } from 'assets';
import { ROUTE } from 'router';
import { ArrowIcon } from 'assets';
import {
  StyledAside,
  StyledMenu,
  StyledWrap,
  StyledMain,
  StyledUserInfo,
  StyledSearchInput,
  StyledTemplate,
  StyledText,
  FixedWrapContainer,
} from './styles';

export const MainTemplate = () => {
  const isAuth = false;

  return (
    <StyledTemplate>
      <StyledAside>
        <StyledMenu>
          <LogoIconLight />
          <Nav />
        </StyledMenu>
        <StyledText>© All Rights Reserved</StyledText>
      </StyledAside>
      <FixedWrapContainer>
        <StyledWrap>
          <StyledSearchInput placeholder='Search' />
          {isAuth ? (
            <StyledUserInfo>
              <div> </div>
              <div>Artem Lapitski</div>
              <button>
                <ArrowIcon />
              </button>
            </StyledUserInfo>
          ) : (
            <StyledUserInfo>
              <CustomLink to={ROUTE.SIGN_IN} component={SignInIcon}>
                Sign In
              </CustomLink>
              <CustomLink to={ROUTE.SIGN_UP} component={SignUpIcon}>
                Sign Up
              </CustomLink>
            </StyledUserInfo>
          )}
        </StyledWrap>
      </FixedWrapContainer>

      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledTemplate>
  );
};
