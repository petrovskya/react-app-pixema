import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { transformFullMovie } from 'mappers';
import { FullMovie } from 'types';

interface MovieState {
  movie: FullMovie | null;
  isLoading: boolean;
  error: string | null;
}

export const fetchFullMovie = createAsyncThunk<
  FullMovie,
  { id: string },
  { rejectValue: string }
>('movie/fetchFullMovie', async ({ id }, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${id}&plot=full&apikey=af084387`
    );
    return transformFullMovie(data);
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const initialState: MovieState = {
  isLoading: false,
  error: null,
  movie: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchFullMovie.pending, (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchFullMovie.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movie = payload;
    });
    builder.addCase(fetchFullMovie.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default movieSlice.reducer;
