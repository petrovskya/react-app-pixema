import { createUserWithEmailAndPassword } from '@firebase/auth';
import { Button, Input } from 'components';
import { auth } from 'firebase';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ROUTE } from 'router';
import { SignFormValues } from 'types';
import { Colors } from 'ui';
import { StyledSignInForm } from './styles';

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignFormValues>();

  const onSubmit: SubmitHandler<SignFormValues> = ({
    email,
    password,
  }): any => {
    // createUserWithEmailAndPassword(auth, email, password)
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
  };
  return (
    <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        name='email'
        type='email'
        placeholder='Your email'
        register={register}
        required={true}
        title={'Email'}
      />
      {errors.email && 'This field is required.'}
      <Input
        name='password'
        type='password'
        placeholder='Your password'
        register={register}
        required={true}
        title={'Password'}
      />
      {errors.password && 'This field is required.'}
      <Link to={ROUTE.RESET_PASSWORD} color={Colors.SECONDARY}>
        Forgot the password?
      </Link>
      <Button type='submit'>Sign in</Button>
    </StyledSignInForm>
  );
};
