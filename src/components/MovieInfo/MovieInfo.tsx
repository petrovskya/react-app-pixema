import { ReactNode } from "react";

import { Color } from "ui";

import { InfoTitle, StyledMovieInfo } from "./styles";

interface MovieInfoProps {
  children: ReactNode;
  info: string;
}

export const MovieInfo = ({ children, info }: MovieInfoProps) => (
  <StyledMovieInfo>
    <InfoTitle color={Color.LIGHT}>{info}</InfoTitle>
    {children}
  </StyledMovieInfo>
);
