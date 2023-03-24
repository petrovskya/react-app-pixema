import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { Colors, FormText, FormTitle, FormWrapper } from 'ui';
import { SignUpForm } from 'components';
import { ROUTE } from 'router';
import { Link } from 'react-router-dom';

export const SignUpPage = () => {
  // const { register, handleSubmit } = useForm();

  // const onSubmit = ({email, password}): any => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });
  // }
  // const [isOpen, setIsOpen] = useState(true);

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
