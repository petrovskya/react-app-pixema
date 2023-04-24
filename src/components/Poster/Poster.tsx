import React from "react";
import { StyledPoster, StyledPosterImage } from "./styles";
import NotFoundImage from "../../assets/images/not-found-image.jpg";

interface PosterProps {
  src: string;
  alt: string;
}

export const Poster = ({ src, alt }: PosterProps) => {
  return (
    <StyledPoster>
      {src === "N/A" ? (
        <StyledPosterImage src={NotFoundImage} alt={alt} />
      ) : (
        <StyledPosterImage src={src} alt={alt} />
      )}
    </StyledPoster>
  );
};
