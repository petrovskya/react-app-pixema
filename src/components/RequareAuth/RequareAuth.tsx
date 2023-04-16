import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useLayoutEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { ROUTE } from "router/routes";
import { setUserAuth, unsetUserAuth } from "store/features";
import { UseAppDispatch, useAppSelector } from "store/hooks";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
