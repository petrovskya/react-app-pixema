import React, { ReactNode } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import { ROUTE } from 'router/routes';
import styled from 'styled-components';
import { Colors } from 'ui/colors';

interface CustomLinkProps {
  children: ReactNode;
  to: ROUTE;
}
export const CustomLink = ({ children, to }: CustomLinkProps) => {
  const match = useMatch(to);
  return <NavLink to={to}>{children}</NavLink>;
};

const StyledLink = {
  fontSize: '18px',
  fontWeight: 600,
  color: Colors.SECONDARY,
  ':active': {
    color: Colors.PRIMARY,
  },
  ':hover': {
    color: Colors.PRIMARY2,
  },
};
