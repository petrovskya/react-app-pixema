import styled from "styled-components";
import { Color, S3 } from "ui";

export const StyledMovieInfo = styled.p`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: start;
  gap: 54px;
  margin-bottom: 20px;
  ${S3};
  color: ${Color.WHITE};
`;
export const InfoTitle = styled.span`
  width: 100px;
`;
