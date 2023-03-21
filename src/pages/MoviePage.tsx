import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import React, { useEffect } from 'react';
import { fetchFullMovie } from 'store';
import { UseAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { StyledOutlet } from 'ui';

export const MoviePage = () => {
  const { isLoading, movie, error } = useAppSelector((state) => state.movie);
  const dispatch = UseAppDispatch();
  const id = 'tt1285016';
  useEffect(() => {
    dispatch(fetchFullMovie({ id }));
  }, [dispatch]);
  console.log(movie);
  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <StyledOutlet>
        <ErrorMessage error={error} />
      </StyledOutlet>
    );
  if (!movie) return <ErrorMessage error={'No films'} />;

  return (
    <StyledOutlet>
      <div>{movie.title}</div>
    </StyledOutlet>
  );
};
