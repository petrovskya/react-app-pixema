import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../router/routes';

export const Nav = () => {
  return (
    <nav>
      <Link to={ROUTE.HOME}>Home</Link>
      <Link to={ROUTE.MOVIE}>Movie</Link>
      <Link to={ROUTE.FAVORITES}>Favorites</Link>
      <Link to={ROUTE.SEARCH}>Search</Link>
      <Link to={ROUTE.TRENDS}>Trends</Link>
      <Link to={ROUTE.SIGN_UP}>Sign In</Link>
      <Link to={ROUTE.SIGN_IN}>Sign Up</Link>
      <Link to={ROUTE.SETTINGS}>Settings</Link>
      <Link to={ROUTE.RESET_PAAWORD}>Reset password</Link>
    </nav>
  );
};
