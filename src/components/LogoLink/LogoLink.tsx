import { LogoIcon } from "assets";
import { ROUTE } from "router";
import { Color } from "ui";
import { StyledLogoLink } from "./styles";

export const LogoLink = () => {
  return (
    <StyledLogoLink to={ROUTE.HOME}>
      <LogoIcon fill={Color.WHITE} />
    </StyledLogoLink>
  );
};
