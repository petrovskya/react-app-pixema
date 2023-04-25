import { SignInForm } from "components";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppSelector } from "store/hooks";
import { Color, FormText, FormTitle, FormWrapper } from "ui";
export const SignInPage = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    isAuth && navigate(-1);
  }, [isAuth, navigate]);
  return (
    <FormWrapper>
      <FormTitle>Sign In</FormTitle>
      <SignInForm />
      <FormText>
        Don't have an account?{" "}
        <Link to={ROUTE.SIGN_UP} color={Color.PRIMARY}>
          {" "}
          Sign Up
        </Link>
      </FormText>
    </FormWrapper>
  );
};
