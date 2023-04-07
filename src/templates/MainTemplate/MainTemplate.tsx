import React, { SetStateAction, memo, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BurgerMenu, CustomLink, Nav, SearchInput } from "components";
import { LogoIcon, SignInIcon, SignUpIcon } from "assets";
import { ROUTE } from "router";
import { ArrowIcon } from "assets";
import {
  StyledWrap,
  Main,
  UserInfo,
  StyledSearchInput,
  FixedWrapContainer,
  StyledMainTemplate,
  UserInitials,
  UserName,
  Aside,
  Menu,
} from "./styles";
import { Color, CopyrightText } from "ui";
import { UseAppDispatch, useAppSelector, useWindowSize } from "store/hooks";
import { getUserInitials } from "utils";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { setSearchTheme, setUserAuth } from "store/features";
import { useDebounce, useInput } from "hooks";
import { fetchSearchMovies } from "store/features/moviesSlice";
export const MainTemplate = memo(() => {
  const { theme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const { isAuth, name } = useAppSelector((state) => state.user);
  const { width } = useWindowSize();
  const dispatch = UseAppDispatch();
  const searchValue = useInput();
  const debouncedValue = useDebounce(searchValue.value, 1000);
  useEffect(() => {
    dispatch(setSearchTheme(debouncedValue));
  }, [dispatch, debouncedValue]);

  // const [authUser, setAuthUser] = useState(null);
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user: any) => {
  //     if (user) {
  //       setAuthUser(user);
  //     } else {
  //       setAuthUser(null);
  //     }
  //   });
  // }, []);
  // console.log(authUser);

  // const userSignOut = () => {
  //   signOut(auth);
  //   setAuthUser(null);
  // };
  // const dispatch = UseAppDispatch();
  // useEffect(() => {
  //   onAuthStateChanged(
  //     auth,
  //     (user) => {
  //       console.log(user);
  //       dispatch(setUserAuth(user));
  //     },
  //     // else {
  //     //   //User is signed out
  //     // }
  //   );
  // }, []);
  return (
    <StyledMainTemplate>
      {/* <Modal /> */}
      {width && width > 1280 && (
        <Aside>
          <Menu>
            <Nav />
          </Menu>
          <CopyrightText>© All Rights Reserved</CopyrightText>
        </Aside>
      )}
      <FixedWrapContainer>
        <Link to={ROUTE.HOME}>
          <LogoIcon fill={Color.WHITE} />
        </Link>
        <StyledWrap>
          {width && width >= 768 && <SearchInput placeholder="Search" {...searchValue} />}
          {width &&
            width > 1280 &&
            (isAuth ? (
              <UserInfo>
                <UserInitials>{getUserInitials(name)}</UserInitials>
                <UserName>{name}</UserName>
                <button>
                  <ArrowIcon />
                </button>
              </UserInfo>
            ) : (
              <UserInfo>
                <CustomLink to={ROUTE.SIGN_IN} component={SignInIcon}>
                  Sign In
                </CustomLink>
                <CustomLink to={ROUTE.SIGN_UP} component={SignUpIcon}>
                  Sign Up
                </CustomLink>
              </UserInfo>
            ))}
        </StyledWrap>
        {width && width <= 1280 && <BurgerMenu />}
        {width && width < 768 && <StyledSearchInput placeholder="Search" />}
      </FixedWrapContainer>
      <Main>
        <Outlet />
      </Main>
    </StyledMainTemplate>
  );
});
