import { store } from './store';
import type { RootState, AppDispatch } from './store';
import { fetchAllMovies } from './moviesSlice';
import { fetchTrendsMovies } from './trendsSlice';

export { store, RootState, AppDispatch, fetchAllMovies, fetchTrendsMovies };
