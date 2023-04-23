import { LittleSpinner, MoviesList, ShowMoreButton, Spinner } from "components";
import React, { useEffect } from "react";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { fetchAllMovies } from "store/features";
import { StyledOutlet } from "ui";
import { ErrorMessage } from "components";
import { fetchNextMoviesPage } from "store/features";
import { fetchSearchMovies, fetchSearchNextPage } from "store/features/moviesSlice";

export const HomePage = () => {
  const { isLoading, isLoadingMore, movies, error, theme, page, searchTheme } = useAppSelector(
    (state) => state.movies,
  );
  const dispatch = UseAppDispatch();
  const handleChange = () => {
    if (searchTheme === "") {
      dispatch(fetchNextMoviesPage({ theme, page }));
    } else {
      dispatch(fetchSearchNextPage({ searchTheme, page }));
    }
  };
  useEffect(() => {
    if (!movies.length) {
      dispatch(fetchAllMovies({ theme }));
    }
    if (searchTheme !== "") {
      dispatch(fetchSearchMovies({ searchTheme }));
    }
  }, [dispatch, searchTheme]);
  return (
    <StyledOutlet>
      {error && <ErrorMessage error={error} />}
      <MoviesList movies={movies} />
      <ShowMoreButton type="button" onClick={handleChange}>
        {isLoadingMore && <LittleSpinner />}
      </ShowMoreButton>
    </StyledOutlet>
  );
};
