import React from 'react';
import styled from 'styled-components';
import { TransformedShortMovie } from 'types';
import { Colors } from 'ui';

interface MoviesItemProps {
  movie: TransformedShortMovie;
}
export const MoviesItem = ({
  movie: { poster, title, type, year, imdbID },
}: MoviesItemProps) => {
  return (
    <StyledMoviesItem>
      <StyledPoster src={poster} alt={title} />
      <StyledMovieTitle>{title}</StyledMovieTitle>
      <StyledMovieYear>{year}</StyledMovieYear>
    </StyledMoviesItem>
  );
};

export const StyledPoster = styled.img`
  width: 266px;
  height: 357px;
  margin-bottom: 8px;
  border-radius: 20px;
`;
export const StyledMovieTitle = styled.h2`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${Colors.WHITE};
`;
export const StyledMovieYear = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${Colors.WHITE};
`;

export const StyledMoviesItem = styled.li`
  display: grid;
  /* place-items: start; */
`;
