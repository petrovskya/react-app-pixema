import styled from 'styled-components';
import { Colors } from 'ui';

export const StyledPoster = styled.img`
  width: 266px;
  height: 357px;
  margin-bottom: 8px;
  border-radius: 20px;
`;
export const StyledMovieTitle = styled.h2`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${Colors.WHITE};
`;
export const StyledMovieYear = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${Colors.WHITE};
`;

export const StyledMovieCard = styled.li`
  display: grid;
`;
