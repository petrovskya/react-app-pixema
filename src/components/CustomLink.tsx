import React, { ReactNode } from 'react';
import { Link, PathMatch, useMatch } from 'react-router-dom';
import { ROUTE } from 'router/routes';
import { Colors } from 'ui/colors';

interface CustomLinkProps {
  children: ReactNode;
  to: ROUTE;
}
export const CustomLink = ({ children, to }: CustomLinkProps) => {
  const match = useMatch(to);
  const StyledLink = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '20px',
    fontSize: '18px',
    fontWeight: 600,
    color: match ? Colors.PRIMARY : Colors.SECONDARY,
    textDecoration: 'none',
    '&:hover': {
      color: Colors.PRIMARY2,
    },
  };
  return (
    <Link to={to} style={StyledLink}>
      {children}
    </Link>
  );
};
