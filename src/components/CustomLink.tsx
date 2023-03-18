import React, { ReactNode } from 'react';
import { Link, PathMatch, useMatch } from 'react-router-dom';
import { ROUTE } from 'router';
import { Colors } from 'ui/colors';
import { SvgIcon } from '@mui/material';
import styled from 'styled-components';

interface CustomLinkProps {
  children: ReactNode;
  to: ROUTE;
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

const StyledLink = styled(Link)<{
  $match: PathMatch<string> | null;
  $colors: typeof Colors;
}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ $match, $colors }) =>
    $match ? $colors.PRIMARY : $colors.SECONDARY};
  text-decoration: none;
  &:hover {
    color: ${({ $colors }) => $colors.PRIMARY_LIGHT};
  }
`;
