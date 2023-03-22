import { Poster } from 'components';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import React, { useEffect } from 'react';
import { fetchFullMovie } from 'store';
import { UseAppDispatch, useAppSelector } from 'store/hooks/hooks';
import styled from 'styled-components';
import { ReactComponent as IMDBIcon } from './../assets/icons/imdb-icon.svg';
import { Colors, StyledOutlet } from 'ui';
import { FavoritesIcon, ShareIcon } from 'assets';
import { SvgIcon } from '@mui/material';
import { useParams } from 'react-router-dom';

export const MoviePage = () => {
  const { isLoading, movie, error } = useAppSelector((state) => state.movie);
  const { imdbID } = useParams();
  const dispatch = UseAppDispatch();

  useEffect(() => {
    imdbID && dispatch(fetchFullMovie({ imdbID }));
  }, [dispatch, imdbID]);
  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <StyledOutlet>
        <ErrorMessage error={error} />
      </StyledOutlet>
    );
  if (!movie) return <ErrorMessage error={'No films'} />;
  const rate = movie.ratings[0].Value.slice(0, 3);
  return (
    <StyledOutlet>
      <Poster src={movie.poster} alt={movie.title} />
      <StyledButtonsGroup>
        <StyledButton>
          <SvgIcon component={FavoritesIcon} inheritViewBox />
        </StyledButton>
        <StyledButton>
          <SvgIcon component={ShareIcon} inheritViewBox />
        </StyledButton>
      </StyledButtonsGroup>
      <StyledGenres>{movie.genre}</StyledGenres>
      <StyledMovieTitle>{movie.title}</StyledMovieTitle>
      <StyledCommonRating>{rate}</StyledCommonRating>
      <StyledIMDBRating>
        <IMDBIcon />
        {movie.imdbrating}
      </StyledIMDBRating>
      <StyledBadge> {movie.runtime}</StyledBadge>
      <StyledPlot>{movie.plot}</StyledPlot>
      <StyledMovieInfo>
        <StyledMovieInfoItem>Year</StyledMovieInfoItem>
        {movie.year}
      </StyledMovieInfo>
      <StyledMovieInfo>
        <StyledMovieInfoItem>Released</StyledMovieInfoItem>
        {movie.released}
      </StyledMovieInfo>
      <StyledMovieInfo>
        <StyledMovieInfoItem>BoxOffice</StyledMovieInfoItem>
        {movie.boxoffice}
      </StyledMovieInfo>
      <StyledMovieInfo>
        <StyledMovieInfoItem>Country</StyledMovieInfoItem>
        {movie.country}
      </StyledMovieInfo>
      <StyledMovieInfo>
        <StyledMovieInfoItem>Production</StyledMovieInfoItem>
        {movie.production}
      </StyledMovieInfo>
      <StyledMovieInfo>
        <StyledMovieInfoItem>Actors</StyledMovieInfoItem>
        {movie.actors}
      </StyledMovieInfo>
      <StyledMovieInfo>
        <StyledMovieInfoItem>Director</StyledMovieInfoItem>
        {movie.director}
      </StyledMovieInfo>
      <StyledMovieInfo>
        <StyledMovieInfoItem>Writers</StyledMovieInfoItem>
        {movie.writer}
      </StyledMovieInfo>
    </StyledOutlet>
  );
};

export const StyledMovieTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 60px;
  text-align: left;
  color: ${Colors.WHITE};
`;
export const StyledGenres = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: ${Colors.LIGHT};
`;
export const StyledCommonRating = styled.span`
  padding: 2px 8px;
  width: 37px;
  height: 28px;
  border-radius: 6px;
  background-color: ${Colors.GREEN};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: ${Colors.WHITE};
`;
export const StyledIMDBRating = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px;
  width: 79px;
  height: 28px;
  border-radius: 6px;
  background-color: ${Colors.GRAPHITE};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: ${Colors.WHITE};
`;
export const StyledBadge = styled.span`
  padding: 2px 8px;
  width: 78px;
  border-radius: 6px;
  background-color: ${Colors.GRAPHITE};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: ${Colors.WHITE};
`;
export const StyledPlot = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: ${Colors.WHITE};
`;
export const StyledMovieInfo = styled.div`
  display: flex;
  gap: 54px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: ${Colors.WHITE};
`;
export const StyledMovieInfoItem = styled.div`
  width: 90px;
  color: ${Colors.LIGHT};
`;
export const StyledButtonsGroup = styled.div`
  display: flex;
  width: 266px;
  height: 56px;
  border-radius: 10px;
  overflow: hidden;
`;
export const StyledButton = styled.button`
  padding: 16px 54px;
  background-color: ${Colors.GRAPHITE};
  border: 1px solid ${Colors.DARK};
  color: ${Colors.LIGHT};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${Colors.WHITE};
  }
`;
