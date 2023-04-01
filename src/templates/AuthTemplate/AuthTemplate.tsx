import { LogoIconLight } from "assets";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { CopyrightText } from "ui";
import { Logo, StyledAuthTemplate } from "./styles";

export const AuthTemplate = () => {
  return (
    <StyledAuthTemplate>
      <Link to={ROUTE.HOME}>
        <LogoIconLight style={Logo} />
      </Link>
      <Outlet />
      <CopyrightText>© All Rights Reserved</CopyrightText>
    </StyledAuthTemplate>
  );
};
