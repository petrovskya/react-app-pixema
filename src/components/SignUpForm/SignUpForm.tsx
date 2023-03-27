import { Button, Input } from 'components';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebase.js';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignUpFormValues } from 'types';
import { StyledSignUpForm } from './styles';

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormValues>();
  const onSubmit: SubmitHandler<SignUpFormValues> = ({
    name,
    email,
    password,
  }): any => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        name='name'
        type='text'
        placeholder='Your name'
        register={register}
        required={true}
        title={'Name'}
      />
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
      <Input
        name='confirmPassword'
        type='password'
        placeholder='Confirm password'
        register={register}
        required={true}
        title={'Confirm password'}
      />
      <Button type='submit'>Sign up</Button>
    </StyledSignUpForm>
  );
};
