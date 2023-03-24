import { SignInForm } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router';
import { Colors, FormText, FormTitle, FormWrapper } from 'ui';

export const SignInPage = () => {
  return (
    <FormWrapper>
      <FormTitle>Sign In</FormTitle>
      <SignInForm />
      <FormText>
        Don't have an account?{' '}
        <Link to={ROUTE.SIGN_UP} color={Colors.PRIMARY}>
          {' '}
          Sign Up
        </Link>
      </FormText>
    </FormWrapper>
  );
};
