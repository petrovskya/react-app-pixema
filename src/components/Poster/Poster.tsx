import { NotFoundImage } from "assets";

import { StyledPoster, StyledPosterImage } from "./styles";

interface PosterProps {
  src: string;
  alt: string;
}

export const Poster = ({ src, alt }: PosterProps) => (
  <StyledPoster>
    {src === "N/A" ? (
      <StyledPosterImage src={NotFoundImage} alt={alt} />
    ) : (
      <StyledPosterImage src={src} alt={alt} />
    )}
  </StyledPoster>
);
