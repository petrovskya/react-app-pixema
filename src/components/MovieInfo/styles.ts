import styled from 'styled-components';
import { Colors, S3 } from 'ui';

export const StyledMovieInfo = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 54px;
  margin-bottom: 20px;
  ${S3};
  color: ${Colors.WHITE};
`;
export const InfoTitle = styled.span`
  width: 100px;
`;
