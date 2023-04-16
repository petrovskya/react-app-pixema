import { SignInForm } from "components";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useLayoutEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { setUserAuth, unsetUserAuth } from "store/features";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { Color, FormText, FormTitle, FormWrapper } from "ui";
// import { auth } from "../../firebase";
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
