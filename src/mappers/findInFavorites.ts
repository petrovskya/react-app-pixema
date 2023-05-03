import { Movie } from "types";

export const findInFavorites = (id: string, favorites: Movie[]): boolean => {
  const isFavorite = favorites.find(({ imdbID }) => imdbID === id);
  return isFavorite ? true : false;
};
