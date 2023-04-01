import { MoviesList, ShowMoreButton, Spinner } from "components";
import React, { useEffect } from "react";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { fetchAllMovies } from "store/features";
import { StyledOutlet } from "ui";
import { ErrorMessage } from "components";
import { fetchNextMoviesPage } from "store/features";

export const HomePage = () => {
  const { isLoading, movies, error, theme, page } = useAppSelector((state) => state.movies);
  const dispatch = UseAppDispatch();
  const handleChange = () => {
    dispatch(fetchNextMoviesPage({ theme, page }));
  };

  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchAllMovies({ theme }));
    }
  }, [dispatch]);

  return (
    <StyledOutlet>
      {isLoading && <Spinner />}
      {error && <ErrorMessage error={error} />}
      {!movies.length && <ErrorMessage error={"No films"} />}
      <MoviesList movies={movies} />
      <ShowMoreButton type="button" onClick={handleChange} />
    </StyledOutlet>
  );
};
