import React, { ReactNode } from 'react';
import { Colors } from 'ui';
import { InfoTitle, StyledMovieInfo } from './styles';

interface MovieInfoProps {
  children: ReactNode;
  info: string;
}

export const MovieInfo = ({ children, info }: MovieInfoProps) => {
  return (
    <StyledMovieInfo>
      <InfoTitle color={Colors.LIGHT}>{info}</InfoTitle>
      {children}
    </StyledMovieInfo>
  );
};
