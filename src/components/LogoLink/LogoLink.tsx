import { LogoIcon } from "assets";
import { ROUTE } from "router";
import { Color } from "ui";

import { StyledLogoLink } from "./styles";

interface LogoLinkProps {
  fill: Color | string;
}

export const LogoLink = ({ fill }: LogoLinkProps) => (
  <StyledLogoLink to={ROUTE.HOME} fill={fill}>
    <LogoIcon fill={fill} />
  </StyledLogoLink>
);
