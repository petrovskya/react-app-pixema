import { MovieLink, Poster } from "components";
import { generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { Movie } from "types";
import { StyledMovieCard, StyledMovieYear } from "./styles";
import { memo } from "react";

interface MovieCardProps {
  movie: Movie;
}
export const MovieCard = memo(
  ({ movie: { poster, title, type, year, imdbID } }: MovieCardProps) => {
    return (
      <StyledMovieCard>
        <Poster src={poster} alt={title} />
        <MovieLink to={generatePath(ROUTE.MOVIE, { imdbID })}>{title}</MovieLink>
        <StyledMovieYear>{year}</StyledMovieYear>
      </StyledMovieCard>
    );
  },
);
