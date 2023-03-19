import { MoviesApi, TransformedShortMovie } from 'types';

export const transformShortMovies = (
  movies: MoviesApi
): TransformedShortMovie[] => {
  return movies.Search.map(({ Poster, Title, Type, Year, imdbID }) => ({
    poster: Poster,
    title: Title,
    type: Type,
    year: Year,
    imdbID: imdbID,
  }));
};
