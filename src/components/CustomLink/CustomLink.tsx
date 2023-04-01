import React, { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { ROUTE } from "router";

import { SvgIcon } from "@mui/material";
import { StyledLink } from "./styles";
import { Color } from "ui";

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
    <StyledLink to={to} $Color={Color} $match={match}>
      <SvgIcon component={component} inheritViewBox />
      {children}
    </StyledLink>
  );
};
