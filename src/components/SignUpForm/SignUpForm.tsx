import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { StyledSignUpForm } from './styles';

export interface SignUpFormValues {
  email: string;
  password: string;
  repeatPassword: string;
}
export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // const onSubmit: SubmitHandler<FormValues> = (expense: FormValues) => {
  //   const newExpense = { ...expense, id: v4() };
  //   addNewExpense(newExpense);
  //   reset();
  // };
  const onSubmit: SubmitHandler<SignUpFormValues> = (
    data: SignUpFormValues
  ) => {
    reset();
  };
  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        name='email'
        type='email'
        placeholder='Email'
        register={register}
        required={true}
      />
      {errors.email && 'This field is required.'}
      <Input
        name='password'
        type='password'
        placeholder='Password'
        register={register}
        required={true}
      />
      {errors.password && 'This field is required.'}
      <Input
        name='repeatPassword'
        type='password'
        placeholder='Password'
        register={register}
        required={true}
      />
      <Button type='submit' />
    </StyledSignUpForm>
  );
};
