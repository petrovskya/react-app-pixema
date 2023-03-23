import React, { ReactNode } from 'react';
import { useMatch } from 'react-router-dom';
import { ROUTE } from 'router';
import { Colors } from 'ui/colors';
import { SvgIcon } from '@mui/material';
import { StyledLink } from './styles';
import { ROUTE2 } from 'router/routes';

interface CustomLinkProps {
  children: ReactNode;
  to: ROUTE | ROUTE2;
  component: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
}
export const CustomLink = ({ children, to, component }: CustomLinkProps) => {
  const match = useMatch(to);

  return (
    <StyledLink to={to} $colors={Colors} $match={match}>
      <SvgIcon component={component} inheritViewBox />
      {children}
    </StyledLink>
  );
};
