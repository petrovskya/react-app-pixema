import { Movie } from "types";

export const getFavoritesMovies = (): Movie[] | [] => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) {
    return JSON.parse(favorites);
  } else return [];
};
