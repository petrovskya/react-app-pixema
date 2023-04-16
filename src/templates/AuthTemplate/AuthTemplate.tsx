import React, { useEffect, useLayoutEffect } from "react";
import { Outlet } from "react-router-dom";
import { StyledAuthTemplate } from "./styles";
import { LogoLink } from "components";
import { onAuthStateChanged } from "firebase/auth";
import { setUserAuth, unsetUserAuth } from "store/features";
import { auth } from "../../firebase";
import { UseAppDispatch, useAppSelector } from "store/hooks";

export const AuthTemplate = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const { theme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  const dispatch = UseAppDispatch();
  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        dispatch(setUserAuth(user));
      } else {
        dispatch(unsetUserAuth());
      }
    });
  }, [dispatch]);
  return (
    <StyledAuthTemplate>
      <LogoLink />
      <Outlet />
      <p style={{ color: "#fff" }}>© All Rights Reserved</p>
    </StyledAuthTemplate>
  );
};
