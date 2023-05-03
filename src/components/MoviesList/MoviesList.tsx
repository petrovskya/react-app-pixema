import { memo } from "react";

import { MovieCard } from "components";
import { Movie } from "types";

import { StyledMoviesList } from "./styles";

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList = ({ movies }: MoviesListProps) => (
  <StyledMoviesList>
    {movies.map((movie): any => (
      <MovieCard movie={movie} key={movie.imdbID} />
    ))}
  </StyledMoviesList>
);
