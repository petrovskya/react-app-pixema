import {
  fetchAllMovies,
  fetchSearchMovies,
  fetchSearchNextPage,
  fetchNextMoviesPage,
  setSearchTitle,
  setNextPage,
  setTitleFilter,
  setYearFilter,
  unsetTitleFilter,
  unsetYearFilter,
} from "./moviesSlice";

import {
  fetchTrendsMovies,
  fetchNextTrendsPage,
  fetchSearchNextTrendsPage,
  fetchSearchTrends,
  setNextTrendsPage,
  setTrends,
  setSearchTitleTrends,
  setTitleFilterTrends,
  setYearFilterTrends,
  unsetTitleFilterTrends,
  unsetYearFilterTrends,
} from "./trendsSlice";

import { fetchFullMovie } from "./movieSlice";

import {
  setUserAuth,
  unsetUserAuth,
  fetchSignUpUser,
  fetchSignInUser,
  setVerificationStatus,
} from "./userSlice";

import { setTheme } from "./themeSlice";

export {
  setTheme,
  setSearchTitle,
  setNextPage,
  setTitleFilter,
  setYearFilter,
  fetchAllMovies,
  fetchTrendsMovies,
  fetchFullMovie,
  fetchNextMoviesPage,
  fetchSearchMovies,
  fetchSearchNextPage,
  fetchNextTrendsPage,
  fetchSearchNextTrendsPage,
  fetchSearchTrends,
  fetchSignUpUser,
  fetchSignInUser,
  setUserAuth,
  unsetUserAuth,
  unsetTitleFilter,
  unsetYearFilter,
  setNextTrendsPage,
  setTrends,
  setSearchTitleTrends,
  setTitleFilterTrends,
  setYearFilterTrends,
  unsetTitleFilterTrends,
  unsetYearFilterTrends,
  setVerificationStatus,
};
