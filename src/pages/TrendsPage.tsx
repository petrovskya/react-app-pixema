import { ErrorMessage, MoviesList, Spinner } from 'components';
import React, { useEffect } from 'react';
import { UseAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { fetchNextTrendsPage, fetchTrendsMovies } from 'store/features';
import { ShowMoreButton } from 'components';
import { StyledOutlet } from 'ui';

export const TrendsPage = () => {
  const { isLoading, trends, error, theme, page } = useAppSelector(
    (state) => state.trends
  );
  const dispatch = UseAppDispatch();
  const handleChange = () => {
    dispatch(fetchNextTrendsPage({ theme, page }));
  };

  useEffect(() => {
    if (!trends.length) {
      dispatch(fetchTrendsMovies({ theme }));
    }
  }, [dispatch]);
  return (
    <StyledOutlet>
      {isLoading && <Spinner />}
      {error && <ErrorMessage error={error} />}
      {trends.length > 0 && (
        <StyledOutlet>
          <MoviesList movies={trends} />
          <ShowMoreButton type='button' onClick={handleChange} />
        </StyledOutlet>
      )}
    </StyledOutlet>
  );
};
