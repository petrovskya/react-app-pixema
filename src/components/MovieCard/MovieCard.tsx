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
        <MovieLink to={generatePath(ROUTE.MOVIE, { imdbID })}>
          <Poster src={poster} alt={title} />
          {title}
        </MovieLink>
        <StyledMovieYear>{year}</StyledMovieYear>
      </StyledMovieCard>
    );
  },
);
