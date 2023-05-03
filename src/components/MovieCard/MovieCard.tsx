import { memo } from "react";
import { generatePath, useNavigate } from "react-router-dom";

import { MovieLink, Poster } from "components";
import { ROUTE } from "router";
import { Movie } from "types";
import { UseAppDispatch, useAppSelector } from "store/hooks";
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
    const { isAuth } = useAppSelector((state) => state.user);
    const dispatch = UseAppDispatch();
    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isAuth && e.target.checked) {
        dispatch(addToFavorites(movie));
        dispatch(setFavorites(movie));
        dispatch(toggleFavorite({ imdbID, isFavorite: true }));
      }
      if (isAuth && !e.target.checked) {
        dispatch(toggleFavorite({ imdbID, isFavorite: false }));
        dispatch(deleteFromFavorites(imdbID));
        dispatch(setFavorites(movie));
      }
      !isAuth && navigate(ROUTE.SIGN_IN);
    };

    return (
      <StyledMovieCard>
        <MovieLink to={generatePath(ROUTE.MOVIE, { imdbID })}>
          <Poster src={poster} alt={title} />
          {title}
        </MovieLink>
        {isAuth ? (
          <StyledCheckbox
            icon={<BorderIcon />}
            checkedIcon={<CheckedIcon />}
            onChange={handleChange}
            checked={isFavorite}
          />
        ) : (
          <StyledCheckbox
            icon={<BorderIcon />}
            checkedIcon={<BorderIcon />}
            onChange={handleChange}
            checked={isFavorite}
          />
        )}
        <StyledMovieYear>{year}</StyledMovieYear>
      </StyledMovieCard>
    );
  },
);
