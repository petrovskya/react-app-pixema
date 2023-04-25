import { LittleSpinner, MoviesList, ShowMoreButton } from "components";
import React, { useLayoutEffect } from "react";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { fetchAllMovies } from "store/features";
import { StyledOutlet } from "ui";
import { ErrorMessage } from "components";
import { fetchNextMoviesPage } from "store/features";
import { fetchSearchMovies, fetchSearchNextPage } from "store/features/moviesSlice";

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

  useLayoutEffect(() => {
    if (!movies.length && !searchTitle && !searchYear) {
      dispatch(fetchAllMovies({ theme }));
    }
    if (searchTitle !== "") {
      dispatch(fetchSearchMovies({ searchTitle, searchYear }));
    }
    if (searchTitle === "") {
      dispatch(fetchAllMovies({ theme }));
    }
  }, [dispatch, searchTitle, searchYear]);

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
