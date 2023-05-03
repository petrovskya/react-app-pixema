import { MoviesApi, Movie } from "types";
import { getFavoritesMovies } from "utils/localStorage";

import { findInFavorites } from "./findInFavorites";

export const filterTrends = (movies: MoviesApi, year: string): Movie[] => {
  const filteredMovies = movies.Search.filter(({ Year }) => Year === year);
  return filteredMovies.map(({ Poster, Title, Type, Year, imdbID }) => ({
    poster: Poster,
    title: Title,
    type: Type,
    year: Year,
    imdbID: imdbID,
    isFavorite: findInFavorites(imdbID, getFavoritesMovies()),
  }));
};
