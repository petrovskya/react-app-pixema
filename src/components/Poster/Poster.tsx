import React from "react";
import { StyledPoster, StyledPosterImage } from "./styles";

interface PosterProps {
  src: string;
  alt: string;
}

export const Poster = ({ src, alt }: PosterProps) => {
  return (
    <StyledPoster>
      <StyledPosterImage src={src} alt={alt} />
    </StyledPoster>
  );
};
