export {
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

export {
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

export { fetchFullMovie } from "./movieSlice";

export {
  setUserAuth,
  unsetUserAuth,
  fetchSignUpUser,
  fetchSignInUser,
  setVerificationStatus,
  fetchChangeUserEmail,
  fetchChangeUserName,
  handleConfirmModal,
  fetchChangePassword,
} from "./userSlice";

export { setTheme } from "./themeSlice";
