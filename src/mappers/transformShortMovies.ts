import { MoviesApi, Movie } from 'types';

export const transformShortMovies = (movies: MoviesApi): Movie[] => {
  return movies.Search.map(({ Poster, Title, Type, Year, imdbID }) => ({
    poster: Poster,
    title: Title,
    type: Type,
    year: Year,
    imdbID: imdbID,
  }));
};
