import { MoviesList, Spinner } from 'components';
import React, { useEffect } from 'react';
import { UseAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { fetchTrendsMovies } from 'store/features';
import { ShowMoreButton } from 'components';
import { StyledOutlet } from 'ui';

export const TrendsPage = () => {
  const { isLoading, trends } = useAppSelector((state) => state.trends);
  const dispatch = UseAppDispatch();
  useEffect(() => {
    if (isLoading === 'idle') {
      dispatch(fetchTrendsMovies());
    }
  }, [dispatch]);

  return (
    <div>
      {(isLoading === 'idle' || isLoading === 'pending') && <Spinner />}
      {trends.length > 0 && (
        <StyledOutlet>
          <MoviesList movies={trends} />
          <ShowMoreButton />
        </StyledOutlet>
      )}
    </div>
  );
};
