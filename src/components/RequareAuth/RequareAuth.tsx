import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "router/routes";
import { useAppSelector } from "store/hooks";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
