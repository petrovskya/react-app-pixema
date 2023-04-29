import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

import { transformShortMovies } from "mappers";
import { Movie } from "types";
import { getRandomMoviesTheme } from "utils";
import { getSearchTitle, getSearchYear } from "utils/localStorage";

interface MoviesState {
  movies: Movie[];
  isLoading: boolean;
  isLoadingMore: boolean;
  error: string | null;
  page: number;
  theme: ReturnType<typeof getRandomMoviesTheme>;
  searchTitle: string;
  searchYear: string;
}

export const fetchAllMovies = createAsyncThunk<Movie[], { theme: string }, { rejectValue: string }>(
  "movies/fetchAll",
  async ({ theme }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=af084387&s=${theme}}&plot=full`,
      );
      return transformShortMovies(data);
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

export const fetchSearchMovies = createAsyncThunk<
  Movie[],
  { searchTitle: string; searchYear: string },
  { rejectValue: string }
>(
  "movies/fetchSearchMovies",
  async ({ searchTitle, searchYear }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=af084387&s=${searchTitle}&y=${searchYear}&plot=full`,
      );

      if (data.Response === "False") {
        throw new Error(data.Error);
      }
      return transformShortMovies(data);
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setMovies([]));
        const { message } = error as Error;
        return rejectWithValue(message);
      }
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

export const fetchSearchNextPage = createAsyncThunk<
  Movie[],
  { searchTitle: string; searchYear: string; page: number },
  { rejectValue: string }
>(
  "movies/fetchSearchNextPage",
  async ({ searchTitle, searchYear, page }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setNextPage(page + 1));
      const { data } = await axios.get(
        // eslint-disable-next-line max-len
        `https://www.omdbapi.com/?apikey=af084387&s=${searchTitle}&y=${searchYear}&plot=full&page=${page}`,
      );
      return transformShortMovies(data);
    } catch (error) {
      const { message } = error as AxiosError;
      return rejectWithValue(message);
    }
  },
);

export const fetchNextMoviesPage = createAsyncThunk<
  Movie[],
  { theme: string; page: number },
  { rejectValue: string }
>("movies/fetchNextPage", async ({ theme, page }, { dispatch, rejectWithValue }) => {
  try {
    dispatch(setNextPage(page + 1));
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=af084387&s=${theme}&plot=full&page=${page}`,
    );
    return transformShortMovies(data);
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const initialState: MoviesState = {
  isLoading: false,
  isLoadingMore: false,
  error: null,
  movies: [],
  page: 2,
  theme: getRandomMoviesTheme(),
  searchTitle: getSearchTitle(),
  searchYear: getSearchYear(),
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setNextPage: (state: MoviesState, { payload }) => {
      state.page = payload;
    },
    setSearchTitle: (state: MoviesState, { payload }) => {
      state.searchTitle = payload;
    },
    setMovies: (state, { payload }) => {
      state.movies = payload;
    },
    setTitleFilter: (state: MoviesState, { payload }) => {
      state.searchTitle = payload;
      localStorage.setItem("searchTitle", JSON.stringify(payload));
    },
    unsetTitleFilter: (state: MoviesState) => {
      state.searchTitle = initialState.searchTitle;
      localStorage.removeItem("searchTitle");
    },
    setYearFilter: (state: MoviesState, { payload }) => {
      state.searchYear = payload;
      localStorage.setItem("searchYear", JSON.stringify(payload));
    },
    unsetYearFilter: (state: MoviesState) => {
      state.searchYear = initialState.searchYear;
      localStorage.removeItem("searchYear");
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
    builder.addCase(fetchSearchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
      state.error = null;
    });
    builder.addCase(fetchSearchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchSearchNextPage.pending, (state) => {
      state.isLoadingMore = true;
      state.error = null;
    });
    builder.addCase(fetchSearchNextPage.fulfilled, (state, { payload }) => {
      state.isLoadingMore = false;
      state.movies = [...state.movies, ...payload];
      state.error = null;
    });
    builder.addCase(fetchSearchNextPage.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingMore = false;
        state.error = payload;
      }
    });
    builder.addCase(fetchNextMoviesPage.pending, (state) => {
      state.isLoadingMore = true;
      state.error = null;
    });
    builder.addCase(fetchNextMoviesPage.fulfilled, (state, { payload }) => {
      state.isLoadingMore = false;
      state.movies = [...state.movies, ...payload];
      state.error = null;
    });
    builder.addCase(fetchNextMoviesPage.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoadingMore = false;
        state.error = payload;
      }
    });
  },
});

export const {
  setNextPage,
  setSearchTitle,
  setMovies,
  setTitleFilter,
  setYearFilter,
  unsetTitleFilter,
  unsetYearFilter,
} = moviesSlice.actions;

export default moviesSlice.reducer;
