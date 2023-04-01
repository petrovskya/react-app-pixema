import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformFullMovie } from "mappers";
import { FullMovie } from "types";

interface MovieState {
  movie: FullMovie;
  isLoading: boolean;
  error: string | null;
}

export const fetchFullMovie = createAsyncThunk<
  FullMovie,
  { imdbID: string },
  { rejectValue: string }
>("movie/fetchFullMovie", async ({ imdbID }, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=af084387`,
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
  movie: {} as FullMovie,
};

const movieSlice = createSlice({
  name: "movie",
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
