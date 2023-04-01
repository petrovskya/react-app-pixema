import React, { ReactNode } from "react";
import { StyledMovieLink } from "./styles";

interface MovieLinkProps {
  children: ReactNode;
  to: string;
}
export const MovieLink = ({ children, to }: MovieLinkProps) => {
  return <StyledMovieLink to={to}>{children}</StyledMovieLink>;
};
