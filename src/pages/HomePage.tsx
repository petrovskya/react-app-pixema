import { MoviesList, ShowMoreButton } from 'components';
import React, { useEffect } from 'react';
import { UseAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { fetchAllMovies } from 'store';
import { StyledOutlet } from 'ui';
import { getRandomMoviesTheme } from 'utils/getRandomMoviesTheme';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

export const HomePage = () => {
  const { isLoading, movies, error } = useAppSelector((state) => state.movies);
  const dispatch = UseAppDispatch();
  const theme = getRandomMoviesTheme();
  useEffect(() => {
    if (isLoading === 'idle') {
      dispatch(fetchAllMovies({ theme }));
    }
  }, [dispatch]);

  if (isLoading === 'idle' || isLoading === 'pending')
    return <div>Loading...</div>;
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
