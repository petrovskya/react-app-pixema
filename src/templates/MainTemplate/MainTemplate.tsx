import { memo, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  BurgerMenu,
  FilterBadge,
  FilterModal,
  Nav,
  SearchInputGroup,
  Spinner,
  Menu,
  UserInfo,
} from "components";
import { LogoIcon } from "assets";
import { ROUTE } from "router";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import {
  setSearchTitle,
  setSearchTitleTrends,
  setUserAuth,
  setVerificationStatus,
  unsetTitleFilter,
  unsetTitleFilterTrends,
  unsetUserAuth,
  unsetYearFilter,
  unsetYearFilterTrends,
} from "store/features";
import { useDebounce, useInput, useToggle, useWindowSize } from "hooks";
import { Color, CopyrightText } from "ui";

import { auth } from "../../firebase";
import {
  StyledWrap,
  Main,
  FixedWrapContainer,
  StyledMainTemplate,
  Aside,
  BadgeGroup,
  AsideMenu,
} from "./styles";

export const MainTemplate = memo(() => {
  const { theme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const { isAuth, name } = useAppSelector((state) => state.user);
  const [isOpen, toggleModal] = useToggle();

  const dispatch = UseAppDispatch();
  const searchValue = useInput();
  const debouncedValue = useDebounce(searchValue.value, 1000);
  const { searchTitle, searchYear } = useAppSelector((state) => state.movies);

  const [isFiltered, setFiltered] = useState<boolean>(false);

  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width < 768;
  const isDesktop = width > 1280;
  const isLaptop = width <= 1280;
  const isTablet = width >= 768;

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
        dispatch(setVerificationStatus(user.emailVerified));
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
      {isDesktop && (
        <Aside>
          <AsideMenu>
            <Nav />
          </AsideMenu>
          <CopyrightText>© All Rights Reserved</CopyrightText>
        </Aside>
      )}
      <FixedWrapContainer>
        <Link to={ROUTE.HOME}>
          <LogoIcon fill={Color.WHITE} />
        </Link>
        <StyledWrap>
          {isTablet && (
            <SearchInputGroup
              isFiltered={isFiltered}
              props={searchValue}
              placeholder="Search"
              onClick={toggleModal}
            />
          )}
          {isDesktop && <UserInfo isAuth={isAuth} name={name} onClick={handleClick} />}
        </StyledWrap>
        {isLaptop && <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />}
        {isMobile && (
          <SearchInputGroup
            isFiltered={isFiltered}
            props={searchValue}
            placeholder="Search"
            onClick={toggleModal}
          />
        )}
        <Menu isOpen={isMenuOpen} isLaptop={isLaptop} handleClose={toggleMenu} />
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
