import { memo } from "react";
import { generatePath } from "react-router-dom";

import { MovieLink, Poster } from "components";
import { ROUTE } from "router";
import { Movie } from "types";

import { StyledMovieCard, StyledMovieYear } from "./styles";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = memo(
  ({ movie: { poster, title, type, year, imdbID } }: MovieCardProps) => (
    <StyledMovieCard>
      <MovieLink to={generatePath(ROUTE.MOVIE, { imdbID })}>
        <Poster src={poster} alt={title} />
        {title}
      </MovieLink>
      <StyledMovieYear>{year}</StyledMovieYear>
    </StyledMovieCard>
  ),
);
