import { MovieLink, Poster } from 'components';
import React, { useEffect } from 'react';
import { generatePath } from 'react-router-dom';
import { ROUTE } from 'router';
import { fetchFullMovie } from 'store';
import { UseAppDispatch, useAppSelector } from 'store/hooks/hooks';
import movieSlice, { setMovieId } from 'store/movieSlice';
import { Movie } from 'types';
import { StyledMovieCard, StyledMovieYear } from './styles';

interface MovieCardProps {
  movie: Movie;
}
export const MovieCard = ({
  movie: { poster, title, type, year, imdbID },
}: MovieCardProps) => {
  // const { setMovieId }= movieSlice.actions;
  const dispatch = UseAppDispatch();
  return (
    <StyledMovieCard>
      <Poster src={poster} alt={title} />
      <MovieLink
        onClick={() => dispatch(setMovieId(imdbID))}
        to={generatePath(ROUTE.MOVIE, { title })}
      >
        {title}
      </MovieLink>
      <StyledMovieYear>{year}</StyledMovieYear>
    </StyledMovieCard>
  );
};
