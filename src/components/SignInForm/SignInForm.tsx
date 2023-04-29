import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { ROUTE } from "router";
import { Button, Input, LittleSpinner } from "components";
import { fetchSignInUser, setUserAuth } from "store/features";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { SignFormValues, SignInFormValues } from "types";
import { Color } from "ui";

import { StyledSignInForm } from "./styles";

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignFormValues>();

  const dispatch = UseAppDispatch();
  const navigate = useNavigate();
  const { isLoading, errorMessage } = useAppSelector((state) => state.user);

  const onSubmit: SubmitHandler<SignInFormValues> = async (signUpFormValues) => {
    await dispatch(fetchSignInUser(signUpFormValues))
      .unwrap()
      .then((user) => {
        dispatch(setUserAuth(user));
      });
    await reset();
    await navigate(ROUTE.HOME);
  };

  return (
    <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
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
      <Link to={ROUTE.RESET_PASSWORD} color={Color.SECONDARY}>
        Forgot the password?
      </Link>
      <Button type="submit">{isLoading ? <LittleSpinner /> : <>Sign in</>}</Button>
      {errorMessage && <span>{errorMessage}</span>}
    </StyledSignInForm>
  );
};
