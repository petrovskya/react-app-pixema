import { ErrorMessage, MoviesList } from "components";
import React, { useEffect } from "react";

import { StyledOutlet } from "ui";

export const FavoritesPage = () => {
  const favorites = null;

  return (
    <StyledOutlet>
      {/* {isLoading && <Spinner />}
      {isLoading && <Spinner />}
      {error && <ErrorMessage error={error} />} */}
      {!favorites && <ErrorMessage error={"No films"} />}
      {favorites && <MoviesList movies={favorites} />}
      {/* <ShowMoreButton type="button"  onClick={handleChange}/> */}
    </StyledOutlet>
  );
};
