import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { transformFullMovie } from 'mappers';
import { FullMovie } from 'types';

interface MovieState {
  movie: FullMovie | null;
  isLoading: boolean;
  error: string | null;
  imdbID: string;
}

export const fetchFullMovie = createAsyncThunk<
  FullMovie,
  { imdbID: string },
  { rejectValue: string }
>('movie/fetchFullMovie', async ({ imdbID }, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=af084387`
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
  imdbID: '',
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieId(state, action) {
      state.imdbID = action.payload;
    },
  },
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
const { actions } = movieSlice;
export const { setMovieId } = actions;
