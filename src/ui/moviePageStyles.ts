import styled from "styled-components";
import { Color, H1, S1 } from "ui";

const FullMovieCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 42px;
  max-width: 75%;
`;
const MoviePresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;
const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const MovieTitle = styled.h1`
  margin-bottom: 24px;
  ${H1};
  color: ${Color.WHITE};
`;
const Genres = styled.span`
  ${S1};
  color: ${Color.LIGHT};
`;
const Badge = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
const CommonRating = styled.span`
  padding: 2px 8px;
  width: 37px;
  height: 28px;
  border-radius: 6px;
  background-color: ${Color.GREEN};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: ${Color.WHITE};
`;
const IMDBRating = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px;
  width: 79px;
  height: 28px;
  border-radius: 6px;
  background-color: ${Color.GRAPHITE};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: ${Color.WHITE};
`;
const Runtime = styled.span`
  padding: 2px 8px;
  width: 78px;
  border-radius: 6px;
  background-color: ${Color.GRAPHITE};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: ${Color.WHITE};
`;
const MoviePlot = styled.p`
  margin: 40px 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: ${Color.WHITE};
`;

export {
  FullMovieCard,
  MoviePlot,
  Badge,
  IMDBRating,
  CommonRating,
  Runtime,
  Genres,
  MovieTitle,
  MoviePresentation,
  MovieDescription,
};
