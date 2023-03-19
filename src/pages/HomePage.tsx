import { MoviesList } from 'components/MoviesList/MoviesList';
import React, { useEffect } from 'react';
import { UseAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { fetchAllMovies } from 'store';
import styled from 'styled-components';
import { ShowMoreButton } from 'components';

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
          <ShowMoreButton />
        </StyledOutletContent>
      )}
    </div>
  );
};

export const StyledOutletContent = styled.div`
  display: grid;
  gap: 64px;
`;
