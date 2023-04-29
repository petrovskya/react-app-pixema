import styled from "styled-components";

import { Color, S3 } from "ui";

const StyledMovieInfo = styled.p`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: start;
  gap: 54px;
  margin-bottom: 20px;
  ${S3};
  color: ${Color.WHITE};
`;

const InfoTitle = styled.span`
  width: 100px;
`;

export { StyledMovieInfo, InfoTitle };
