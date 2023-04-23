import styled from "styled-components";
import { Media } from "ui";

export const StyledPoster = styled.div`
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
`;
export const StyledPosterImage = styled.img`
  width: 100%;
  height: 100%;
`;
