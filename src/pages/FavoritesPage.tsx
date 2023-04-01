import { ErrorMessage, MoviesList, ShowMoreButton, Spinner } from "components";
import React, { useEffect } from "react";
import { fetchAllMovies, fetchNextMoviesPage } from "store/features";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { StyledOutlet } from "ui";

export const FavoritesPage = () => {
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
