import { MoviesList, ShowMoreButton } from 'components';
import React, { useEffect } from 'react';
import { UseAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { fetchAllMovies } from 'store';
import { StyledOutletContent } from 'ui';
import { getRandomMoviesTheme } from 'utils/getRandomMoviesTheme';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

export const HomePage = () => {
  const { isLoading, movies, error } = useAppSelector((state) => state.movies);
  const dispatch = UseAppDispatch();
  const theme = getRandomMoviesTheme();
  useEffect(() => {
    dispatch(fetchAllMovies({ theme }));
  }, [dispatch]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <ErrorMessage error={error} />}
      {movies.length > 0 && (
        <StyledOutletContent>
          <MoviesList movies={movies} />
          <ShowMoreButton />
        </StyledOutletContent>
      )}
    </>
  );
};
