import { SignInForm } from "components";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTE } from "router";
import { Color, FormText, FormTitle, FormWrapper } from "ui";

export const SignInPage = () => {
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
