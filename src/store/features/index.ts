import { fetchAllMovies } from './moviesSlice';
import { fetchTrendsMovies } from './trendsSlice';
import { fetchFullMovie } from './movieSlice';
import { fetchNextMoviesPage } from './moviesSlice';
import { changePage } from './moviesSlice';
import { fetchNextTrendsPage } from './trendsSlice';

export {
  fetchAllMovies,
  fetchTrendsMovies,
  fetchFullMovie,
  changePage,
  fetchNextMoviesPage,
  fetchNextTrendsPage,
};
