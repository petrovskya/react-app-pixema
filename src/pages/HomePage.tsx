import { MoviesList, ShowMoreButton, Spinner } from 'components';
import React, { useEffect } from 'react';
import { UseAppDispatch, useAppSelector } from 'store/hooks';
import { fetchAllMovies } from 'store/features';
import { StyledOutlet } from 'ui';
import { getRandomMoviesTheme } from 'utils';
import { ErrorMessage } from 'components';

export const HomePage = () => {
  const { isLoading, movies, error } = useAppSelector((state) => state.movies);
  const dispatch = UseAppDispatch();
  const theme = getRandomMoviesTheme();
  useEffect(() => {
    if (isLoading === 'idle') {
      dispatch(fetchAllMovies({ theme }));
    }
  }, [dispatch]);

  if (isLoading === 'idle' || isLoading === 'pending') return <Spinner />;
  if (error)
    return (
      <StyledOutlet>
        <ErrorMessage error={error} />
      </StyledOutlet>
    );
  if (!movies.length) return <ErrorMessage error={'No films'} />;

  return (
    <StyledOutlet>
      <MoviesList movies={movies} />
      <ShowMoreButton />
    </StyledOutlet>
  );
};
