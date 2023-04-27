import React from "react";
import { StyledUserInfo, UserInitials, UserName } from "./styles";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { SignOutButton } from "components/SignOutButton/SignOutButton";
import { CustomLink } from "components/CustomLink/CustomLink";
import { SignInIcon, SignUpIcon } from "assets";
import { getUserInitials } from "utils";

interface UserInfoProps {
  isAuth: boolean;
  name: string | null;
  onClick: () => void;
}

export const UserInfo = ({ isAuth, name, onClick }: UserInfoProps) => {
  return (
    <StyledUserInfo>
      {isAuth ? (
        <>
          <Link to={ROUTE.SETTINGS}>
            <UserInitials>{name && getUserInitials(name)}</UserInitials>
          </Link>
          <UserName>{name}</UserName>
          <SignOutButton onClick={onClick} />
        </>
      ) : (
        <>
          <CustomLink to={ROUTE.SIGN_IN} component={SignInIcon}>
            Sign In
          </CustomLink>
          <CustomLink to={ROUTE.SIGN_UP} component={SignUpIcon}>
            Sign Up
          </CustomLink>
        </>
      )}
    </StyledUserInfo>
  );
};
