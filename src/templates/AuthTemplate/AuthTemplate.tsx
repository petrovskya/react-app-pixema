import React from "react";
import { Outlet } from "react-router-dom";
import { StyledAuthTemplate } from "./styles";
import { LogoLink } from "components";

export const AuthTemplate = () => {
  return (
    <StyledAuthTemplate>
      <LogoLink />
      <Outlet />
      <p style={{ color: "#fff" }}>© All Rights Reserved</p>
    </StyledAuthTemplate>
  );
};
