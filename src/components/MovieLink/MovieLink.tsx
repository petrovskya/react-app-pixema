import { ReactNode } from "react";

import { StyledMovieLink } from "./styles";

interface MovieLinkProps {
  children: ReactNode;
  to: string;
}

export const MovieLink = ({ children, to }: MovieLinkProps) => (
  <StyledMovieLink to={to}>{children}</StyledMovieLink>
);
