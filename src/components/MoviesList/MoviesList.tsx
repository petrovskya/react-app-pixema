import React from 'react';
import { TransformedShortMovie } from 'types';
import { MovieCard } from 'components';
import { StyledMoviesList } from './styles';
interface MoviesListProps {
  movies: TransformedShortMovie[];
}
export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <StyledMoviesList>
      {movies.map((movie): any => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </StyledMoviesList>
  );
};
