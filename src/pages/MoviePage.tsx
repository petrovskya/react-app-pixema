import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AddFavoriteButton, MovieInfo, Poster, Spinner, ErrorMessage } from "components";
import { addToFavorites, deleteFromFavorites, fetchFullMovie } from "store/features";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { getFavorites, getMovie } from "store/selectors";
import { useToggle, useWindowSize } from "hooks";
import { IMDBIcon, FavoritesIcon, ArrowLeftIcon } from "assets";
import {
  Badge,
  CommonRating,
  FullMovieCard,
  Genres,
  IMDBRating,
  MovieDescription,
  MoviePlot,
  MoviePresentation,
  MovieTitle,
  Runtime,
  StyledOutlet,
} from "ui";
import { findInFavorites } from "mappers";

export const MoviePage = () => {
  const { width } = useWindowSize();
  const { isLoading, movie, error } = useAppSelector(getMovie);
  const { favorites } = useAppSelector(getFavorites);
  const { imdbID } = useParams();
  const [isFavorite, setFavorite] = useToggle(findInFavorites(imdbID as string, favorites));

  const dispatch = UseAppDispatch();
  const navigate = useNavigate();
  const {
    poster,
    title,
    genre,
    imdbrating,
    runtime,
    year,
    released,
    plot,
    boxoffice,
    country,
    production,
    actors,
    director,
    writer,
    type,
  } = movie;

  const handleClick = () => {
    const addedMovie = {
      poster: poster,
      title: title,
      type: type,
      year: year,
      imdbID: imdbID,
      isFavorite: true,
    };
    isFavorite ? dispatch(deleteFromFavorites(imdbID)) : dispatch(addToFavorites(addedMovie));
    setFavorite();
  };

  useEffect(() => {
    imdbID && dispatch(fetchFullMovie({ imdbID }));
  }, [dispatch, imdbID]);

  return (
    <StyledOutlet>
      <ArrowLeftIcon onClick={() => navigate(-1)} />
      {isLoading && <Spinner />}
      {error && <ErrorMessage error={error} />}
      {!isLoading && (
        <FullMovieCard>
          {width && width >= 768 && (
            <MoviePresentation>
              <Poster src={poster} alt={title} />
              <AddFavoriteButton
                $isFavorite={isFavorite}
                component={FavoritesIcon}
                onClick={handleClick}
              />
            </MoviePresentation>
          )}
          <MovieDescription>
            <Genres>{genre}</Genres>
            <MovieTitle>{title}</MovieTitle>
            {width && width < 768 && (
              <MoviePresentation>
                <Poster src={poster} alt={title} />
                <AddFavoriteButton
                  $isFavorite={isFavorite}
                  component={FavoritesIcon}
                  onClick={handleClick}
                />
              </MoviePresentation>
            )}
            <Badge>
              <CommonRating>{imdbrating}</CommonRating>
              <IMDBRating>
                <IMDBIcon />
                {imdbrating}
              </IMDBRating>
              <Runtime> {runtime}</Runtime>
            </Badge>
            <MoviePlot>{plot}</MoviePlot>
            <MovieInfo info="Year">{year}</MovieInfo>
            <MovieInfo info="Relesead">{released}</MovieInfo>
            <MovieInfo info="BoxOffice">{boxoffice}</MovieInfo>
            <MovieInfo info="Country">{country}</MovieInfo>
            <MovieInfo info="Production">{production}</MovieInfo>
            <MovieInfo info="Actors">{actors}</MovieInfo>
            <MovieInfo info="Director">{director}</MovieInfo>
            <MovieInfo info="Writers">{writer}</MovieInfo>
          </MovieDescription>
        </FullMovieCard>
      )}
    </StyledOutlet>
  );
};
