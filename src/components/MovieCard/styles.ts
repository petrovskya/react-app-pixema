import styled from "styled-components";

import { Color } from "ui";

const StyledMovieYear = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${Color.WHITE};
`;

const StyledMovieCard = styled.li`
  display: grid;
`;

export { StyledMovieCard, StyledMovieYear };
