import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformShortMovies } from "mappers";
import { Movie } from "types";
import { getRandomMoviesTheme } from "utils";

interface TrendsState {
  trends: Movie[];
  isLoading: boolean;
  error: string | null;
  page: number;
  theme: ReturnType<typeof getRandomMoviesTheme>;
}

export const fetchTrendsMovies = createAsyncThunk<
  Movie[],
  { theme: string },
  { rejectValue: string }
>("trends/fetchTrends", async ({ theme }, { rejectWithValue }: any) => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?plot=full&apikey=af084387&s=${theme}`,
    );
    return transformShortMovies(data);
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});
export const fetchNextTrendsPage = createAsyncThunk<
  Movie[],
  { theme: string; page: number },
  { rejectValue: string }
>("trends/fetchNextPage", async ({ theme, page }, { dispatch, rejectWithValue }: any) => {
  try {
    dispatch(changePage(page + 1));
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=af084387&plot=full&s=${theme}&page=${page}`,
    );
    return transformShortMovies(data);
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const initialState: TrendsState = {
  isLoading: false,
  error: null,
  trends: [],
  page: 2,
  theme: getRandomMoviesTheme(),
};

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {
    changePage: (state: TrendsState, { payload }) => {
      state.page = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTrendsMovies.pending, (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTrendsMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.trends = payload;
      state.error = null;
    });
    builder.addCase(fetchTrendsMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchNextTrendsPage.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNextTrendsPage.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.trends = [...state.trends, ...payload];
      state.error = null;
    });
    builder.addCase(fetchNextTrendsPage.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export const { changePage } = trendsSlice.actions;
export default trendsSlice.reducer;
