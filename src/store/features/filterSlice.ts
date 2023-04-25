import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { transformShortMovies } from "mappers";
import { Movie } from "types";

interface FilterState {
  movies: Movie[];
  isLoading: boolean;
  isLoadingMore: boolean;
  error: string | null;
  page: number;
  title: string;
  year: string;
}

const initialState: FilterState = {
  isLoading: false,
  isLoadingMore: false,
  error: null,
  movies: [],
  page: 2,
  title: "",
  year: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setNextPage: (state: FilterState, { payload }) => {
      state.page = payload;
    },
    setSearchTitle: (state: FilterState, { payload }) => {
      state.title = payload;
    },
    setMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

// export const { } = filterSlice.actions;

export default filterSlice.reducer;
