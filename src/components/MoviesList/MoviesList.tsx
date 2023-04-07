import { MovieCard } from "components";
import { Movie } from "types";
import { StyledMoviesList } from "./styles";
import { memo } from "react";

interface MoviesListProps {
  movies: Movie[];
}
export const MoviesList = memo(({ movies }: MoviesListProps) => {
  return (
    <StyledMoviesList>
      {movies.map((movie): any => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </StyledMoviesList>
  );
});
