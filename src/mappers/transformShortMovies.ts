import { MoviesApi, Movie } from "types";
import { findInFavorites } from "./findInFavorites";
import { getFavoritesMovies } from "utils/localStorage";

export const transformShortMovies = (movies: MoviesApi): Movie[] => {
  return movies.Search.map(({ Poster, Title, Type, Year, imdbID }) => ({
    poster: Poster,
    title: Title,
    type: Type,
    year: Year,
    imdbID: imdbID,
    isFavorite: findInFavorites(imdbID, getFavoritesMovies()),
  }));
};
