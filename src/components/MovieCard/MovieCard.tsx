import React from 'react';
import { Movie } from 'types';
import {
  StyledMovieCard,
  StyledMovieTitle,
  StyledMovieYear,
  StyledPoster,
} from './styles';

interface MovieCardProps {
  movie: Movie;
}
export const MovieCard = ({
  movie: { poster, title, type, year, imdbID },
}: MovieCardProps) => {
  return (
    <StyledMovieCard>
      <StyledPoster src={poster} alt={title} />
      <StyledMovieTitle>{title}</StyledMovieTitle>
      <StyledMovieYear>{year}</StyledMovieYear>
    </StyledMovieCard>
  );
};
