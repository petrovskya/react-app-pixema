import { ConfirmEmailForm, ResetPasswordForm } from "components";
import { useEffect } from "react";

import { Location, useLocation, useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useAppSelector } from "store/hooks";
import { FormText, FormTitle, FormWrapper } from "ui";

export interface LocationQuery {
  mode: string;
  oobCode: string;
  continueUrl: string;
}
export const ResetPasswordPage = () => {
  const { isAuth, isResetEmailSent } = useAppSelector((state) => state.user);
  const location = useLocation();

  const useQuery = (location: Location): LocationQuery => {
    const parameters = new URLSearchParams(location.search);
    const mode = parameters.get("mode");
    const oobCode = parameters.get("oobCode");
    const continueUrl = parameters.get("continueUrl");
    return {
      mode: mode as string,
      oobCode: oobCode as string,
      continueUrl: continueUrl as string,
    };
  };

  const query = useQuery(location);
  const isRequested = query.mode;
  const navigate = useNavigate();
  useEffect(() => {
    isAuth && navigate(ROUTE.HOME);
  }, [isAuth, navigate]);

  return (
    <FormWrapper>
      {isRequested || isResetEmailSent ? (
        <>
          <FormTitle>New password</FormTitle>
          <FormText>You will receive an email with a link to reset your password! </FormText>
          <ResetPasswordForm query={query} />
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
