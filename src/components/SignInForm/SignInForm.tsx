import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ROUTE } from "router";
import { Button, Input, LittleSpinner } from "components";
import { fetchSignInUser, setUserAuth } from "store/features";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { SignFormValues, SignInFormValues } from "types";
import { getUser } from "store/selectors";

import { StyledSignInForm } from "./styles";
import { StyledLink } from "ui";

export const SignInForm = () => {
  const { isLoading, errorMessage } = useAppSelector(getUser);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignFormValues>();

  const dispatch = UseAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInFormValues> = async (signUpFormValues) => {
    await dispatch(fetchSignInUser(signUpFormValues))
      .unwrap()
      .then((user) => {
        dispatch(setUserAuth(user));
      });
    reset();
    navigate(ROUTE.HOME);
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
      <StyledLink to={ROUTE.RESET_PASSWORD}>Forgot the password?</StyledLink>
      <Button type="submit">{isLoading ? <LittleSpinner /> : <>Sign in</>}</Button>
      {errorMessage && <span>{errorMessage}</span>}
    </StyledSignInForm>
  );
};
