import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './moviesSlice';
import trendsReducer from './trendsSlice';
import movieReducer from './movieSlice';
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    trends: trendsReducer,
    movie: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
