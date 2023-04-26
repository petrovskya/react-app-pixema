import { ErrorMessage, LittleSpinner, MoviesList, Spinner } from "components";
import React, { useEffect, useLayoutEffect } from "react";
import { UseAppDispatch, useAppSelector } from "store/hooks/hooks";
import {
  fetchNextTrendsPage,
  fetchSearchNextTrendsPage,
  fetchSearchTrends,
  fetchTrendsMovies,
} from "store/features";
import { ShowMoreButton } from "components";
import { StyledOutlet } from "ui";

export const TrendsPage = () => {
  const { isLoading, isLoadingMore, trends, error, theme, page, searchTitle, searchYear } =
    useAppSelector((state) => state.trends);

  const dispatch = UseAppDispatch();

  const handleChange = () => {
    if (searchTitle === "") {
      dispatch(fetchNextTrendsPage({ theme, page }));
    } else {
      dispatch(fetchSearchNextTrendsPage({ theme, searchYear, page }));
    }
  };

  useLayoutEffect(() => {
    if (!trends.length && !searchTitle && !searchYear) {
      dispatch(fetchTrendsMovies({ theme }));
    }
    if (searchYear !== "") {
      dispatch(fetchSearchTrends({ theme, searchYear }));
    }
  }, [dispatch, searchYear]);

  return isLoading ? (
    <Spinner />
  ) : (
    <StyledOutlet>
      {error && <ErrorMessage error={error} />}
      <MoviesList movies={trends} />
      <ShowMoreButton type="button" onClick={handleChange}>
        {isLoadingMore && <LittleSpinner />}
      </ShowMoreButton>
    </StyledOutlet>
  );
};
