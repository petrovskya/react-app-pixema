import {
  fetchAllMovies,
  setSearchTitle,
  setNextPage,
  setTitleFilter,
  setYearFilter,
  unsetTitleFilter,
  unsetYearFilter,
} from "./moviesSlice";
import { fetchTrendsMovies } from "./trendsSlice";
import { fetchFullMovie } from "./movieSlice";
import { fetchNextMoviesPage } from "./moviesSlice";
import { fetchNextTrendsPage } from "./trendsSlice";
import { setUserAuth, unsetUserAuth, fetchSignUpUser, fetchSignInUser } from "./userSlice";
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
  fetchNextTrendsPage,
  fetchSignUpUser,
  fetchSignInUser,
  setUserAuth,
  unsetUserAuth,
  unsetTitleFilter,
  unsetYearFilter,
};
