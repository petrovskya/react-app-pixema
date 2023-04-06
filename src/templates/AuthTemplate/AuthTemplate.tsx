import { LogoIcon } from "assets";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { Color, CopyrightText } from "ui";
import { Logo, StyledAuthTemplate } from "./styles";

export const AuthTemplate = () => {
  return (
    <StyledAuthTemplate>
      <Link to={ROUTE.HOME}>
        <LogoIcon fill={Color.BLACK} style={Logo} />
      </Link>
      <Outlet />
      <CopyrightText>© All Rights Reserved</CopyrightText>
    </StyledAuthTemplate>
  );
};
