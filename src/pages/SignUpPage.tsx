import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Colors, FormText, FormTitle, FormWrapper } from 'ui';
import { SignUpForm } from 'components';
import { ROUTE } from 'router';
import { Link } from 'react-router-dom';

export const SignUpPage = () => {
  return (
    <FormWrapper>
      <FormTitle>Sign Up</FormTitle>
      <SignUpForm />
      <FormText>
        Already have an account?{' '}
        <Link to={ROUTE.SIGN_IN} color={Colors.PRIMARY}>
          {' '}
          Sign In
        </Link>
      </FormText>
    </FormWrapper>
  );
};
