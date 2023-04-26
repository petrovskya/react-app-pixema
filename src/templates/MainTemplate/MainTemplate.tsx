import React, { memo, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  BurgerMenu,
  CustomLink,
  FilterBadge,
  FilterModal,
  Nav,
  SearchInputGroup,
  SignOutButton,
  Spinner,
} from "components";
import { LogoIcon, SignInIcon, SignUpIcon } from "assets";
import { ROUTE } from "router";
import {
  StyledWrap,
  Main,
  UserInfo,
  FixedWrapContainer,
  StyledMainTemplate,
  UserInitials,
  UserName,
  Aside,
  Menu,
  BadgeGroup,
} from "./styles";
import { Color, CopyrightText } from "ui";
import { UseAppDispatch, useAppSelector, useWindowSize } from "store/hooks";
import { getUserInitials } from "utils";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import {
  setSearchTitle,
  setSearchTitleTrends,
  setUserAuth,
  unsetTitleFilter,
  unsetTitleFilterTrends,
  unsetUserAuth,
  unsetYearFilter,
  unsetYearFilterTrends,
} from "store/features";
import { useDebounce, useInput, useToggle } from "hooks";
import { useAuthState } from "react-firebase-hooks/auth";

export const MainTemplate = memo(() => {
  const { theme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const { isAuth, name } = useAppSelector((state) => state.user);
  const [isOpen, toggleModal] = useToggle();
  const { width } = useWindowSize();
  const dispatch = UseAppDispatch();
  const searchValue = useInput();
  const debouncedValue = useDebounce(searchValue.value, 1000);
  const { searchTitle, searchYear } = useAppSelector((state) => state.movies);

  const [isFiltered, setFiltered] = useState<boolean>(false);

  useEffect(() => {
    searchTitle || searchYear ? setFiltered(true) : setFiltered(false);
  }, [searchTitle, searchYear]);

  useEffect(() => {
    if (!searchTitle) {
      dispatch(setSearchTitle(debouncedValue));
      dispatch(setSearchTitleTrends(debouncedValue));
    }
  }, [dispatch, debouncedValue, searchTitle]);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        dispatch(setUserAuth(user));
      } else {
        dispatch(unsetUserAuth());
      }
    });
  }, [dispatch]);

  const handleClick = () => {
    auth.signOut();
    dispatch(unsetUserAuth());
  };

  const resetTitleFilter = () => {
    dispatch(unsetTitleFilter());
    dispatch(unsetYearFilter());
    dispatch(unsetYearFilterTrends());
    dispatch(unsetTitleFilterTrends());
    dispatch(setSearchTitle(""));
  };

  const resetYearFilter = () => {
    dispatch(unsetYearFilter());
    dispatch(unsetYearFilterTrends());
    dispatch(setSearchTitle(""));
  };

  const [user, loading] = useAuthState(auth);

  return (
    <StyledMainTemplate>
      <FilterModal isOpen={isOpen} toggleModal={toggleModal} />
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
          {width && width >= 768 && (
            <SearchInputGroup
              isFiltered={isFiltered}
              props={searchValue}
              placeholder="Search"
              onClick={toggleModal}
            />
          )}
          {width &&
            width > 1280 &&
            (isAuth ? (
              <UserInfo>
                <Link to={ROUTE.SETTINGS}>
                  <UserInitials>{name && getUserInitials(name)}</UserInitials>
                </Link>
                <UserName>{name}</UserName>
                <SignOutButton onClick={handleClick} />
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
        {width && width < 768 && (
          <SearchInputGroup
            isFiltered={isFiltered}
            props={searchValue}
            placeholder="Search"
            onClick={toggleModal}
          />
        )}
      </FixedWrapContainer>
      <Main>
        <BadgeGroup>
          {searchTitle && <FilterBadge label={searchTitle} onClick={resetTitleFilter} />}
          {searchYear && searchTitle && (
            <FilterBadge label={searchYear} onClick={resetYearFilter} />
          )}
        </BadgeGroup>

        {loading ? <Spinner /> : <Outlet />}
      </Main>
    </StyledMainTemplate>
  );
});
