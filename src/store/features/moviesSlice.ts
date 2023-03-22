import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { transformShortMovies } from 'mappers';
import { Movie } from 'types';

interface MoviesState {
  movies: Movie[];
  isLoading: string;
  error: string | null;
}

export const fetchAllMovies = createAsyncThunk<
  Movie[],
  { theme: string },
  { rejectValue: string }
>('movies/fetchAll', async ({ theme }, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${theme}}&plot=full&apikey=af084387`
    );
    return transformShortMovies(data);
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const initialState: MoviesState = {
  isLoading: 'idle',
  error: null,
  movies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllMovies.pending, (state, { payload }) => {
      if (state.isLoading === 'idle') {
        state.isLoading = 'pending';
        state.error = null;
      }
    });
    builder.addCase(fetchAllMovies.fulfilled, (state, { payload }) => {
      if (state.isLoading === 'pending') {
        state.isLoading = 'successful';
        state.movies = payload;
      }
    });
    builder.addCase(fetchAllMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = 'failed';
        state.error = payload;
      }
    });
  },
});

export default moviesSlice.reducer;
