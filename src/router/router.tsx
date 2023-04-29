import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import {
  HomePage,
  MoviePage,
  ResetPasswordPage,
  SearchPage,
  SettingsPage,
  SignInPage,
  SignUpPage,
  TrendsPage,
  FavoritesPage,
} from "pages";
import { ROUTE } from "router";
import { MainTemplate, AuthTemplate } from "templates";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.AUTH} element={<AuthTemplate />}>
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      </Route>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.MOVIE} element={<MoviePage />} />
        <Route path={ROUTE.TRENDS} element={<TrendsPage />} />
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
      </Route>
    </>,
  ),
  { basename: "/react-app-pixema" },
);
