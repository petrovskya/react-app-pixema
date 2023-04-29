import { ConfirmEmailForm, ResetPasswordForm } from "components";
import { FormText, FormTitle, FormWrapper } from "ui";

export const ResetPasswordPage = () => {
  const isAuth = false;
  return (
    <FormWrapper>
      {isAuth ? (
        <>
          <FormTitle>Reset password</FormTitle>
          <FormText>You will receive an email with a link to reset your password! </FormText>
          <ResetPasswordForm />
        </>
      ) : (
        <>
          <FormTitle>Reset password</FormTitle>
          <ConfirmEmailForm />
        </>
      )}
    </FormWrapper>
  );
};
