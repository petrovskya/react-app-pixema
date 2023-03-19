import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { transformShortMovies } from 'mappers';
import { TransformedShortMovie } from 'types';

interface MoviesState {
  movies: TransformedShortMovie[];
  isLoading: boolean;
  error: string | null;
}

export const fetchAllMovies = createAsyncThunk('movies/fetchAll', async () => {
  const { data } = await axios.get(
    'http://www.omdbapi.com/?s=dream&plot=full&apikey=af084387'
  );
  return transformShortMovies(data);
});

const initialState: MoviesState = {
  isLoading: false,
  error: null,
  movies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllMovies.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies.push(...payload);
    });
    builder.addCase(fetchAllMovies.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});

export default moviesSlice.reducer;
