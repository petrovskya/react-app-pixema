import { AddFavoriteButton, MovieInfo, Poster, Modal, Spinner } from "components";
import { ErrorMessage } from "components";
import React, { useEffect } from "react";
import { fetchFullMovie } from "store/features";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { IMDBIcon } from "assets";
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
import { FavoritesIcon } from "assets";
import { useParams } from "react-router-dom";

export const MoviePage = () => {
  const { isLoading, movie, error } = useAppSelector((state) => state.movie);
  const { imdbID } = useParams();
  const dispatch = UseAppDispatch();
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
  } = movie;
  useEffect(() => {
    imdbID && dispatch(fetchFullMovie({ imdbID }));
  }, [dispatch, imdbID]);
  return (
    <StyledOutlet>
      {isLoading && <Spinner />}
      {error && <ErrorMessage error={error} />}
      {!isLoading && (
        <FullMovieCard>
          <MoviePresentation>
            <Poster src={poster} alt={title} />
            <AddFavoriteButton component={FavoritesIcon} />
          </MoviePresentation>
          <MovieDescription>
            <Genres>{genre}</Genres>
            <MovieTitle>{title}</MovieTitle>
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
