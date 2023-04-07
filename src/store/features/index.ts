import { fetchAllMovies, setSearchTheme, setNextPage } from "./moviesSlice";
import { fetchTrendsMovies } from "./trendsSlice";
import { fetchFullMovie } from "./movieSlice";
import { fetchNextMoviesPage } from "./moviesSlice";
import { fetchNextTrendsPage } from "./trendsSlice";
import { setUserAuth, unsetUserAuth, fetchSignUpUser, fetchSignInUser } from "./userSlice";
import { setTheme } from "./themeSlice";
export {
  setTheme,
  setSearchTheme,
  setNextPage,
  fetchAllMovies,
  fetchTrendsMovies,
  fetchFullMovie,
  fetchNextMoviesPage,
  fetchNextTrendsPage,
  fetchSignUpUser,
  fetchSignInUser,
  setUserAuth,
  unsetUserAuth,
};
