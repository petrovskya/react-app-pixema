import styled from "styled-components";

import { Media } from "ui";

export const StyledMoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 246px);
  align-items: start;
  width: 100%;
  gap: 40px;

  ${Media.LAPTOP_M} {
    grid-template-columns: repeat(4, 208px);
    justify-content: center;
    gap: 32px;
  }

  ${Media.LAPTOP_S} {
    grid-template-columns: repeat(3, 208px);
  }

  ${Media.TABLET} {
    grid-template-columns: repeat(auto-fill, 208px);
  }
`;
