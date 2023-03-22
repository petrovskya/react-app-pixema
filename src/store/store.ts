import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/moviesSlice';
import trendsReducer from './features/trendsSlice';
import movieReducer from './features/movieSlice';
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    trends: trendsReducer,
    movie: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
