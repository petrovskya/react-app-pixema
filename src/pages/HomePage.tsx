import React, { useEffect, useLayoutEffect } from "react";

import { UseAppDispatch, useAppSelector } from "store/hooks";
import {
  fetchAllMovies,
  fetchSearchMovies,
  fetchSearchNextPage,
  fetchNextMoviesPage,
} from "store/features";

import { LittleSpinner, MoviesList, ShowMoreButton, Spinner, ErrorMessage } from "components";
import { StyledOutlet } from "ui";

export const HomePage = () => {
  const { isLoading, isLoadingMore, movies, error, theme, page, searchTitle, searchYear } =
    useAppSelector((state) => state.movies);

  const dispatch = UseAppDispatch();

  const handleChange = () => {
    if (searchTitle === "") {
      dispatch(fetchNextMoviesPage({ theme, page }));
    } else {
      dispatch(fetchSearchNextPage({ searchTitle, searchYear, page }));
    }
  };

  useEffect(() => {
    if (!movies.length && !searchTitle && !searchYear) {
      dispatch(fetchAllMovies({ theme }));
    }
    if (searchTitle !== "") {
      dispatch(fetchSearchMovies({ searchTitle, searchYear }));
    }
    if (searchTitle === "") {
      dispatch(fetchAllMovies({ theme }));
    }
  }, [dispatch, movies.length, searchTitle, searchYear, theme]);

  return isLoading ? (
    <Spinner />
  ) : (
    <StyledOutlet>
      {error && <ErrorMessage error={error} />}
      <MoviesList movies={movies} />
      <ShowMoreButton type="button" onClick={handleChange}>
        {isLoadingMore && <LittleSpinner />}
      </ShowMoreButton>
    </StyledOutlet>
  );
};
