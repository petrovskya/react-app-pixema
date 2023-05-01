import { SubmitHandler, useForm } from "react-hook-form";
import { confirmPasswordReset } from "firebase/auth";

import { Button, ErrorMessage, Input, LittleSpinner } from "components";
import { SignFormValues } from "types";

import { StyledResetPasswordForm } from "./styles";
import { auth } from "../../firebase";
import { Url } from "url";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { LocationQuery } from "pages/ResetPasswordPage";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { fetchConfirmResetPassword } from "store/features";

interface ResetPasswordFormProps {
  query: LocationQuery;
}

export const ResetPasswordForm = ({ query }: ResetPasswordFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignFormValues>();
  const dispatch = UseAppDispatch();

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<SignFormValues> = ({ password }): any => {
    dispatch(fetchConfirmResetPassword({ oobCode: query.oobCode, password: password })).then(() => {
      navigate(ROUTE.SIGN_IN);
    });
  };

  const { isLoading, errorMessage } = useAppSelector((state) => state.user);

  return (
    <StyledResetPasswordForm onSubmit={handleSubmit(onSubmit)}>
      {errorMessage && <>{errorMessage}</>}
      <Input
        name="password"
        type="password"
        placeholder="Your password"
        register={register}
        required={true}
        title={"Password"}
      />
      {errors.email && "This field is required."}
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        register={register}
        required={true}
        title={"Confirm password"}
      />
      {errors.password && "This field is required."}
      <Button type="submit">Set password {isLoading && <LittleSpinner />}</Button>
    </StyledResetPasswordForm>
  );
};
