export { default as moviesReducer } from "./moviesSlice";
export { default as trendsReducer } from "./trendsSlice";
export { default as movieReducer } from "./movieSlice";
export { default as userReducer } from "./userSlice";
export { default as themeReducer } from "./themeSlice";
export { default as filterReducer } from "./filterSlice";
export { default as favoritesReducer } from "./favoritesSlice";

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
  toggleFavorite,
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
  setFavorites,
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
  fetchSentResetPasswordEmail,
  fetchConfirmResetPassword,
} from "./userSlice";

export { setTheme } from "./themeSlice";

export { addToFavorites, deleteFromFavorites } from "./favoritesSlice";
