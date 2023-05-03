import { useLayoutEffect } from "react";

import { UseAppDispatch, useAppSelector } from "store/hooks";
import { getFavorites, getTrends } from "store/selectors";
import {
  fetchNextTrendsPage,
  fetchSearchNextTrendsPage,
  fetchSearchTrends,
  fetchTrendsMovies,
} from "store/features";
import { ErrorMessage, LittleSpinner, MoviesList, Spinner, ShowMoreButton } from "components";
import { StyledOutlet } from "ui";

export const TrendsPage = () => {
  const { isLoading, isLoadingMore, trends, error, theme, page, searchTitle, searchYear } =
    useAppSelector(getTrends);
  const { favorites } = useAppSelector(getFavorites);

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
  }, [dispatch, searchYear, favorites, trends.length, searchTitle, theme]);

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
