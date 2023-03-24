import { createUserWithEmailAndPassword } from '@firebase/auth';
import { Button, Input } from 'components';
import { auth } from 'firebase';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { StyledSignUpForm } from './styles';

export interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<SignUpFormValues> = ({
    email,
    password,
  }): any => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
    <Input
      name='name'
      type='text'
      placeholder='Your name'
      register={register}
      required={true}
    />
    <Input
      name='email'
      type='email'
      placeholder='Your email'
      register={register}
      required={true}
    />
    {errors.email && 'This field is required.'}
    <Input
      name='password'
      type='password'
      placeholder='Your password'
      register={register}
      required={true}
    />
    {errors.password && 'This field is required.'}
    <Input
      name='confirmPassword'
      type='password'
      placeholder='Confirm password'
      register={register}
      required={true}
    />
    <Button type='submit'>Sign up</Button>
  </StyledSignUpForm>;
};
