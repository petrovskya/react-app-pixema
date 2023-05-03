import { createSlice } from "@reduxjs/toolkit";
import { findInFavorites } from "mappers";

import { Movie } from "types";
import { getFavoritesMovies, getSearchTitle, getSearchYear } from "utils/localStorage";

interface FavoritesState {
  favorites: Movie[];
  page: number;
  searchTitle: string;
  searchYear: string;
}

const initialState: FavoritesState = {
  favorites: getFavoritesMovies(),
  page: 1,
  searchTitle: getSearchTitle(),
  searchYear: getSearchYear(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      !findInFavorites(payload.imdbID, state.favorites) &&
        state.favorites.push({ ...payload, isFavorite: true });
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    deleteFromFavorites(state, { payload }) {
      state.favorites = state.favorites.filter(({ imdbID }) => {
        return imdbID !== payload;
      });
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export default favoritesSlice.reducer;
export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;
