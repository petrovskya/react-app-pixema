import { MovieCard } from 'components';
import { TransformedShortMovie } from 'types';
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
