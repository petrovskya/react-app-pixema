import React from "react";
import { Color, FormText, FormTitle, FormWrapper } from "ui";
import { SignUpForm } from "components";
import { ROUTE } from "router";
import { Link } from "react-router-dom";

export const SignUpPage = () => (
  <FormWrapper>
    <FormTitle>Sign Up</FormTitle>
    <SignUpForm />
    <FormText>
      Already have an account?{" "}
      <Link to={ROUTE.SIGN_IN} color={Color.PRIMARY}>
        {" "}
        Sign In
      </Link>
    </FormText>
  </FormWrapper>
);
