import React from 'react';
import { Outlet } from 'react-router-dom';
import { CustomLink, Nav, Modal } from 'components';
import { LogoIconLight, SignInIcon, SignUpIcon } from 'assets';
// import { ROUTE } from 'router';
import { ArrowIcon } from 'assets';
import {
  StyledAside,
  StyledMenu,
  StyledWrap,
  StyledMain,
  StyledUserInfo,
  StyledSearchInput,
  StyledText,
  FixedWrapContainer,
  StyledMainTemplate,
} from './styles';
import { ROUTE2 } from 'router/routes';
import { CopyrightText } from 'ui';

export const MainTemplate = () => {
  const isAuth = false;

  return (
    <StyledMainTemplate>
      {/* <Modal /> */}
      <StyledAside>
        <StyledMenu>
          <LogoIconLight />
          <Nav />
        </StyledMenu>
        <CopyrightText>© All Rights Reserved</CopyrightText>
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
              <CustomLink to={ROUTE2.SIGN_IN} component={SignInIcon}>
                Sign In
              </CustomLink>
              <CustomLink to={ROUTE2.SIGN_UP} component={SignUpIcon}>
                Sign Up
              </CustomLink>
            </StyledUserInfo>
          )}
        </StyledWrap>
      </FixedWrapContainer>

      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledMainTemplate>
  );
};
