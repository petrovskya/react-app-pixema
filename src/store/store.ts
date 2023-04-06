import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/moviesSlice";
import trendsReducer from "./features/trendsSlice";
import movieReducer from "./features/movieSlice";
import userReducer from "./features/userSlice";
import themeReducer from "./features/themeSlice";
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    trends: trendsReducer,
    movie: movieReducer,
    user: userReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
