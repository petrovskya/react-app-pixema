import styled from "styled-components";

import { Color, Media } from "ui";

const StyledPoster = styled.div`
  display: flex;
  justify-content: center;
  width: 266px;
  height: 357px;

  margin-bottom: 8px;
  border-radius: 20px;
  overflow: hidden;
  ${Media.LAPTOP_M} {
    width: 208px;
    height: 279px;
  }
  &:hover {
    border: 3px solid ${Color.PRIMARY};
  }
`;

const StyledPosterImage = styled.img`
  width: 100%;
  height: 100%;
`;

export { StyledPoster, StyledPosterImage };
