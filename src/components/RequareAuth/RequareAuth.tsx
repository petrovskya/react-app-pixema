import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTE2 } from 'router/routes';

export const RequareAuth = () => {
  const isAuth = false;
  return isAuth ? <Outlet /> : <Navigate to={ROUTE2.SIGN_UP} />;
};
