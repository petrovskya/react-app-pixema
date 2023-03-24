import { ErrorMessage, MoviesList, ShowMoreButton, Spinner } from 'components';
import React, { useEffect, useState } from 'react';
import { fetchAllMovies } from 'store/features';
import { UseAppDispatch, useAppSelector } from 'store/hooks';
import { StyledOutlet } from 'ui';
import { getRandomMoviesTheme } from 'utils';

export const FavoritesPage = () => {
  const { isLoading, movies, error } = useAppSelector((state) => state.movies);
  const dispatch = UseAppDispatch();
  const theme = getRandomMoviesTheme();

  const [page, setPage] = useState(1);
  const handleChange = () => {
    setPage(page + 1);
    console.log(page);
  };
  useEffect(() => {
    if (isLoading === 'idle') {
      dispatch(fetchAllMovies({ theme, page }));
    }
  }, [dispatch, page]);
  return (
    <StyledOutlet>
      {(isLoading === 'idle' || isLoading === 'pending') && <Spinner />}
      {error && <ErrorMessage error={error} />}
      {!movies.length && <ErrorMessage error={'No films'} />}
      <MoviesList movies={movies} />
      <ShowMoreButton type='button' onClick={handleChange} />
    </StyledOutlet>
  );
};
