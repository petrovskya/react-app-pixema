import { configureStore } from "@reduxjs/toolkit";

import moviesReducer from "./features/moviesSlice";
import trendsReducer from "./features/trendsSlice";
import movieReducer from "./features/movieSlice";
import userReducer from "./features/userSlice";
import themeReducer from "./features/themeSlice";
import filterReducer from "./features/filterSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    trends: trendsReducer,
    movie: movieReducer,
    user: userReducer,
    theme: themeReducer,
    filter: filterReducer,
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
