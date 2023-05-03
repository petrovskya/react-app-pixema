import { configureStore } from "@reduxjs/toolkit";

import {
  moviesReducer,
  trendsReducer,
  movieReducer,
  userReducer,
  themeReducer,
  filterReducer,
  favoritesReducer,
} from "store/features";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    trends: trendsReducer,
    movie: movieReducer,
    user: userReducer,
    theme: themeReducer,
    filter: filterReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["user/setUserAuth", "user/unsetUserAuth"],
        ignoredActionPaths: ["meta.arg", "payload.timestamp"],
        ignoredPaths: ["items.dates"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
