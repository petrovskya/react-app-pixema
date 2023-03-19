import { MoviesList } from 'components/MoviesList';
import React, { useEffect } from 'react';
import { UseAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { fetchAllMovies } from 'store/moviesSlice';
import styled from 'styled-components';
import { Colors } from 'ui';

export const HomePage = () => {
  const { isLoading, movies } = useAppSelector((state) => state.movies);
  const dispatch = UseAppDispatch();
  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {movies.length > 0 && (
        <StyledOutletContent>
          <MoviesList movies={movies} />
          <StyledShowMoreButton>Show more</StyledShowMoreButton>
        </StyledOutletContent>
      )}
    </div>
  );
};

export const StyledOutletContent = styled.div`
  display: grid;
  gap: 64px;
`;
export const StyledShowMoreButton = styled.button`
  width: 161px;
  padding: 8px 24px;
  margin: 0 auto;
  background-color: ${Colors.GRAPHITE};
  border-radius: 40px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${Colors.WHITE};
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.PRIMARY_LIGHT};
  }
`;
