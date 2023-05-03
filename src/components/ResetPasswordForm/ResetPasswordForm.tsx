import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Button, Input, LittleSpinner } from "components";
import { SignFormValues } from "types";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { fetchConfirmResetPassword } from "store/features";
import { ROUTE } from "router";
import { getUser } from "store/selectors";

import { StyledResetPasswordForm } from "./styles";

export interface LocationQuery {
  mode: string;
  oobCode: string;
  continueUrl: string;
}

interface ResetPasswordFormProps {
  query: LocationQuery;
}

export const ResetPasswordForm = ({ query }: ResetPasswordFormProps) => {
  const { isLoading, errorMessage } = useAppSelector(getUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignFormValues>();
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignFormValues> = ({ password }): any => {
    dispatch(fetchConfirmResetPassword({ oobCode: query.oobCode, password: password })).then(() => {
      navigate(ROUTE.SIGN_IN);
    });
  };

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
