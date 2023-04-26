import { MoviesApi, Movie } from "types";

export const filterTrends = (movies: MoviesApi, year: string): Movie[] => {
  const filteredMovies = movies.Search.filter(({ Year }) => Year === year);
  return filteredMovies.map(({ Poster, Title, Type, Year, imdbID }) => ({
    poster: Poster,
    title: Title,
    type: Type,
    year: Year,
    imdbID: imdbID,
  }));
};
