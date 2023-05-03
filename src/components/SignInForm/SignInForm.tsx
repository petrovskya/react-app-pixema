import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ROUTE } from "router";
import { Button, Input, LittleSpinner } from "components";
import { fetchSignInUser, setUserAuth } from "store/features";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { SignFormValues, SignInFormValues } from "types";
import { getUser } from "store/selectors";
import { validateEmail, validatePassword } from "services";
import { FormError, StyledLink } from "ui";

import { StyledSignInForm } from "./styles";

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
        error={errors.email?.message}
        validateFunction={validateEmail}
      />
      <Input
        name="password"
        type="password"
        placeholder="Your password"
        register={register}
        required={true}
        title={"Password"}
        error={errors.password?.message}
        validateFunction={validatePassword}
      />
      <StyledLink to={ROUTE.RESET_PASSWORD}>Forgot the password?</StyledLink>
      <Button type="submit">{isLoading ? <LittleSpinner /> : <>Sign in</>}</Button>
      {errorMessage && <FormError>{errorMessage}</FormError>}
    </StyledSignInForm>
  );
};
