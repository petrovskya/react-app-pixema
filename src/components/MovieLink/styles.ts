import { Link } from "react-router-dom";
import styled from "styled-components";

import { Color } from "ui";

export const StyledMovieLink = styled(Link)`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: ${Color.WHITE};
  text-decoration: none;
  transition: all 0.2s;
  &:hover {
    color: ${Color.PRIMARY};
  }
`;
