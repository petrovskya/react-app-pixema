import { MoviesList } from 'components';
import React, { useEffect } from 'react';
import { UseAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { fetchTrendsMovies } from 'store';
import { ShowMoreButton } from 'components';
import { StyledOutletContent } from 'ui';

export const TrendsPage = () => {
  const { isLoading, trends } = useAppSelector((state) => state.trends);
  const dispatch = UseAppDispatch();
  useEffect(() => {
    dispatch(fetchTrendsMovies());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {trends.length > 0 && (
        <StyledOutletContent>
          <MoviesList movies={trends} />
          <ShowMoreButton />
        </StyledOutletContent>
      )}
    </div>
  );
};
