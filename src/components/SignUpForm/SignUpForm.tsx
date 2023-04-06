import { Button, Input, LittleSpinner } from "components";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpFormValues } from "types";
import { StyledSignUpForm } from "./styles";
import { fetchSignUpUser, setUserAuth } from "store/features";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { ROUTE } from "router";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormValues>();
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();
  const { isLoading, errorMessage } = useAppSelector((state) => state.user);
  const onSubmit: SubmitHandler<SignUpFormValues> = async (signUpFormValues) => {
    await dispatch(fetchSignUpUser(signUpFormValues))
      .unwrap()
      .then((user) => {
        dispatch(setUserAuth(user));
      });
    await reset();
    await navigate(ROUTE.HOME);
  };
  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        type="text"
        placeholder="Your name"
        register={register}
        required={true}
        title={"Name"}
      />
      {errors.name && "This field is required."}
      <Input
        name="email"
        type="text"
        placeholder="Your email"
        register={register}
        required={true}
        title={"Email"}
      />
      {errors.email && "This field is required."}
      <Input
        name="password"
        type="password"
        placeholder="Your password"
        register={register}
        required={true}
        title={"Password"}
      />
      {errors.password && "This field is required."}
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        register={register}
        required={true}
        title={"Confirm password"}
      />
      {errors.confirmPassword && "This field is required."}
      <Button type="submit"> {isLoading ? <LittleSpinner /> : <>Sign up</>}</Button>
      {errorMessage && <span>{errorMessage}</span>}
    </StyledSignUpForm>
  );
};
