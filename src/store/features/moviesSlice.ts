import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { transformShortMovies } from 'mappers';
import { Movie } from 'types';
import { getRandomMoviesTheme } from 'utils';

interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  error: string | null;
  page: number;
  theme: ReturnType<typeof getRandomMoviesTheme>;
}

export const fetchAllMovies = createAsyncThunk<
  Movie[],
  { theme: string },
  { rejectValue: string }
>('movies/fetchAll', async ({ theme }, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=af084387&s=${theme}&plot=full`
    );
    return transformShortMovies(data);
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

export const fetchNextMoviesPage = createAsyncThunk<
  Movie[],
  { theme: string; page: number },
  { rejectValue: string }
>(
  'movies/fetchNextPage',
  async ({ theme, page }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(changePage(page + 1));
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=af084387&s=${theme}&plot=full&page=${page}`
      );
      return transformShortMovies(data);
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  }
);

const initialState: MoviesState = {
  isLoading: false,
  error: null,
  movies: [] as Movie[],
  page: 2,
  theme: getRandomMoviesTheme(),
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    changePage: (state: MoviesState, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
      state.error = null;
    });
    builder.addCase(fetchAllMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchNextMoviesPage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNextMoviesPage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = [...state.movies, ...payload];
      state.error = null;
    });
    builder.addCase(fetchNextMoviesPage.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export const { changePage } = moviesSlice.actions;

export default moviesSlice.reducer;
