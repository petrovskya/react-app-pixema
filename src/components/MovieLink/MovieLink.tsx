import React, { ReactNode } from 'react';
import { StyledMovieLink } from './styles';

interface MovieLinkProps {
  children: ReactNode;
  to: string;
  onClick: () => { payload: string; type: 'movie/setMovieId' };
}
export const MovieLink = ({ children, to, onClick }: MovieLinkProps) => {
  return (
    <StyledMovieLink onClick={onClick} to={to}>
      {children}
    </StyledMovieLink>
  );
};
