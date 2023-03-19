import { MoviesList } from 'components';
import React, { useEffect } from 'react';
import { UseAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { fetchAllMovies } from 'store';
import { ShowMoreButton } from 'components';
import { StyledOutletContent } from 'ui';
import { getRandomMoviesTheme } from 'utils/getRandomMoviesTheme';

export const HomePage = () => {
  const { isLoading, movies } = useAppSelector((state) => state.movies);
  const dispatch = UseAppDispatch();
  const theme = getRandomMoviesTheme();
  useEffect(() => {
    dispatch(fetchAllMovies({ theme }));
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {movies.length > 0 && (
        <StyledOutletContent>
          <MoviesList movies={movies} />
          <ShowMoreButton />
        </StyledOutletContent>
      )}
    </div>
  );
};
