import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button, Input, LittleSpinner } from "components";
import { SignUpFormValues } from "types";
import { fetchSignUpUser, setUserAuth } from "store/features";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { getUser } from "store/selectors";
import { validateEmail, validateName, validateNewPassword } from "services";
import { ROUTE } from "router";
import { FormError } from "ui";

import { StyledSignUpForm } from "./styles";

export const SignUpForm = () => {
  const { isLoading, errorMessage } = useAppSelector(getUser);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormValues>();
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignUpFormValues> = async (signUpFormValues) => {
    await dispatch(fetchSignUpUser(signUpFormValues))
      .unwrap()
      .then((user) => {
        dispatch(setUserAuth(user));
      });
    reset();
    navigate(ROUTE.HOME);
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
        error={errors.name?.message}
        validateFunction={validateName}
      />
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
        validateFunction={validateNewPassword}
      />
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        register={register}
        required={true}
        title={"Confirm password"}
        error={errors.confirmPassword?.message}
        validateFunction={validateNewPassword}
      />
      <Button type="submit"> {isLoading ? <LittleSpinner /> : <>Sign up</>}</Button>
      {errorMessage && <FormError>{errorMessage}</FormError>}
    </StyledSignUpForm>
  );
};
