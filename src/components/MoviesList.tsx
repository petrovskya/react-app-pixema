import React from 'react';
import styled from 'styled-components';
import { TransformedShortMovie } from 'types';
import { MoviesItem } from './MoviesItem';
interface MoviesListProps {
  movies: TransformedShortMovie[];
}
export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <StyledMoviesList>
      {movies.map((movie): any => (
        <MoviesItem movie={movie} key={movie.imdbID} />
      ))}
    </StyledMoviesList>
  );
};

export const StyledMoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
`;
