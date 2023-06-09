import { SubmitHandler, useForm } from "react-hook-form";

import { Button, LittleSpinner } from "components";
import { SignFormValues } from "types";
import { getUser } from "store/selectors";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { fetchSentResetPasswordEmail } from "store/features";
import { validateEmail } from "services";
import { FormError } from "ui";

import { StyledConfirmEmailForm } from "./styles";
import { ConfirmEmailInput } from "./ConfirmEmailInput";

export const ConfirmEmailForm = () => {
  const { isLoading, errorMessage } = useAppSelector(getUser);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Pick<SignFormValues, "email">>();

  const dispatch = UseAppDispatch();

  const onSubmit: SubmitHandler<{ email: string }> = (email): any => {
    dispatch(fetchSentResetPasswordEmail(email));
    reset();
  };

  return (
    <StyledConfirmEmailForm onSubmit={handleSubmit(onSubmit)}>
      <ConfirmEmailInput
        name="email"
        type="email"
        placeholder="Your email"
        register={register}
        required={true}
        title={"Email"}
        error={errors.email?.message}
        validateFunction={validateEmail}
      />
      {errorMessage && <FormError>{errorMessage}</FormError>}
      <Button type="submit">Reset {isLoading && <LittleSpinner />}</Button>
    </StyledConfirmEmailForm>
  );
};
