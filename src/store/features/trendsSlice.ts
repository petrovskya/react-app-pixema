import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { filterTrends, transformShortMovies } from "mappers";
import { Movie } from "types";
import { getRandomMoviesTheme } from "utils";
import { getSearchTitle, getSearchYear } from "utils/localStorage";

interface TrendsState {
  trends: Movie[];
  isLoading: boolean;
  isLoadingMore: boolean;
  error: string | null;
  page: number;
  theme: ReturnType<typeof getRandomMoviesTheme>;
  searchTitle: string;
  searchYear: string;
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
    dispatch(setNextTrendsPage(page + 1));
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=af084387&plot=full&s=${theme}&page=${page}`,
    );
    return transformShortMovies(data);
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

export const fetchSearchTrends = createAsyncThunk<
  Movie[],
  { theme: string; searchYear: string },
  { rejectValue: string }
>("trends/fetchSearchTrends", async ({ theme, searchYear }, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=af084387&s=${theme}&y=${searchYear}&plot=full`,
    );

    if (data.Response === "False") {
      throw new Error(data.Error);
    }
    return filterTrends(data, searchYear);
  } catch (error) {
    if (error instanceof Error) {
      dispatch(setTrends([]));
      const { message } = error as Error;
      return rejectWithValue(message);
    }
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

export const fetchSearchNextTrendsPage = createAsyncThunk<
  Movie[],
  { theme: string; searchYear: string; page: number },
  { rejectValue: string }
>(
  "trends/fetchSearchNextTrendsPage",
  async ({ theme, searchYear, page }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setNextTrendsPage(page + 1));
      const { data } = await axios.get(
        // eslint-disable-next-line max-len
        `https://www.omdbapi.com/?apikey=af084387&s=${theme}&y=${searchYear}&plot=full&page=${page}`,
      );
      return filterTrends(data, searchYear);
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

const initialState: TrendsState = {
  isLoading: false,
  isLoadingMore: false,
  error: null,
  trends: [],
  page: 2,
  theme: getRandomMoviesTheme(),
  searchTitle: getSearchTitle(),
  searchYear: getSearchYear(),
};

const trendsSlice = createSlice({
  name: "trends",
  initialState,
  reducers: {
    setNextTrendsPage: (state: TrendsState, { payload }) => {
      state.page = payload;
    },
    setTrends: (state, { payload }) => {
      state.trends = payload;
    },
    setSearchTitleTrends: (state: TrendsState, { payload }) => {
      state.searchTitle = payload;
    },
    setTitleFilterTrends: (state: TrendsState, { payload }) => {
      state.searchTitle = payload;
      localStorage.setItem("searchTitle", JSON.stringify(payload));
    },
    unsetTitleFilterTrends: (state: TrendsState) => {
      state.searchTitle = initialState.searchTitle;
      localStorage.removeItem("searchTitle");
    },
    setYearFilterTrends: (state: TrendsState, { payload }) => {
      state.searchYear = payload;
      localStorage.setItem("searchYear", JSON.stringify(payload));
    },
    unsetYearFilterTrends: (state: TrendsState) => {
      state.searchYear = initialState.searchYear;
      localStorage.removeItem("searchYear");
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
      state.isLoadingMore = true;
      state.error = null;
    });
    builder.addCase(fetchNextTrendsPage.fulfilled, (state, { payload }) => {
      state.isLoadingMore = false;
      state.trends = [...state.trends, ...payload];
      state.error = null;
    });
    builder.addCase(fetchNextTrendsPage.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingMore = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchSearchTrends.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearchTrends.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.trends = payload;
      state.error = null;
    });
    builder.addCase(fetchSearchTrends.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchSearchNextTrendsPage.pending, (state) => {
      state.isLoadingMore = true;
      state.error = null;
    });
    builder.addCase(fetchSearchNextTrendsPage.fulfilled, (state, { payload }) => {
      state.isLoadingMore = false;
      state.trends = [...state.trends, ...payload];
      state.error = null;
    });
    builder.addCase(fetchSearchNextTrendsPage.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingMore = false;
        state.error = payload;
      }
    });
  },
});

export const {
  setNextTrendsPage,
  setTrends,
  setSearchTitleTrends,
  setTitleFilterTrends,
  setYearFilterTrends,
  unsetTitleFilterTrends,
  unsetYearFilterTrends,
} = trendsSlice.actions;
export default trendsSlice.reducer;
