import React, { ReactNode } from 'react';
import { Link, PathMatch, useMatch } from 'react-router-dom';
import { ROUTE } from 'router/routes';
import { Colors } from 'ui/colors';
import { SvgIcon } from '@mui/material';

interface CustomLinkProps {
  children: ReactNode;
  to: ROUTE;
  component: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  fill: string;
  inheritViewBox: boolean;
}
export const CustomLink = ({
  children,
  to,
  component,
  fill,
  inheritViewBox,
}: CustomLinkProps) => {
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
      <SvgIcon
        component={component}
        fill={fill}
        inheritViewBox={inheritViewBox}
      />
      {children}
    </Link>
  );
};
