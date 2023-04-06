import React from "react";
import { Link, Outlet } from "react-router-dom";
import { BurgerMenu, CustomLink, Nav } from "components";
import { LogoIcon, SignInIcon, SignUpIcon } from "assets";
import { ROUTE } from "router";
import { ArrowIcon } from "assets";
import {
  StyledAside,
  StyledMenu,
  StyledWrap,
  StyledMain,
  StyledUserInfo,
  StyledSearchInput,
  FixedWrapContainer,
  StyledMainTemplate,
} from "./styles";
import { Color, CopyrightText } from "ui";
import { useWindowSize } from "store/hooks";

export const MainTemplate = () => {
  const isAuth = false;
  const { width } = useWindowSize();
  return (
    <StyledMainTemplate>
      {/* <Modal /> */}
      {width && width > 1280 && (
        <StyledAside>
          <StyledMenu>
            <Nav />
          </StyledMenu>
          <CopyrightText>© All Rights Reserved</CopyrightText>
        </StyledAside>
      )}
      <FixedWrapContainer>
        <Link to={ROUTE.HOME}>
          <LogoIcon fill={Color.WHITE} />
        </Link>
        <StyledWrap>
          {width && width >= 768 && <StyledSearchInput placeholder="Search" />}
          {width &&
            width > 1280 &&
            (isAuth ? (
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
            ))}
        </StyledWrap>
        {width && width <= 1280 && <BurgerMenu />}
        {width && width < 768 && <StyledSearchInput placeholder="Search" />}
      </FixedWrapContainer>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </StyledMainTemplate>
  );
};
