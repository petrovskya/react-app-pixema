import { memo, useEffect } from "react";
import { generatePath } from "react-router-dom";

import { MovieLink, Poster } from "components";
import { ROUTE } from "router";
import { Movie } from "types";
import { UseAppDispatch } from "store/hooks";
import { addToFavorites, deleteFromFavorites, setFavorites, toggleFavorite } from "store/features";

import {
  BorderIcon,
  CheckedIcon,
  StyledCheckbox,
  StyledMovieCard,
  StyledMovieYear,
} from "./styles";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = memo(
  ({ movie: { poster, title, type, year, imdbID, isFavorite }, movie }: MovieCardProps) => {
    const dispatch = UseAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        dispatch(addToFavorites(movie));
        dispatch(setFavorites(movie));
        dispatch(toggleFavorite({ imdbID, isFavorite: true }));
      }
      if (!e.target.checked) {
        dispatch(toggleFavorite({ imdbID, isFavorite: false }));
        dispatch(deleteFromFavorites(imdbID));
        dispatch(setFavorites(movie));
      }
    };

    return (
      <StyledMovieCard>
        <MovieLink to={generatePath(ROUTE.MOVIE, { imdbID })}>
          <Poster src={poster} alt={title} />
          {title}
        </MovieLink>
        <StyledCheckbox
          icon={<BorderIcon />}
          checkedIcon={<CheckedIcon />}
          onChange={handleChange}
          checked={isFavorite}
        />
        <StyledMovieYear>{year}</StyledMovieYear>
      </StyledMovieCard>
    );
  },
);
