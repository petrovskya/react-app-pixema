import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ConfirmEmailForm } from "components";
import { ROUTE } from "router";
import { useAppSelector } from "store/hooks";
import { getUser } from "store/selectors";
import { FormText, FormTitle, FormWrapper } from "ui";

export const ResetPasswordPage = () => {
  const { isAuth, isResetEmailSent } = useAppSelector(getUser);
  const [isShowMessage, setShowMessage] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isResetEmailSent) {
      setShowMessage(true);
      setTimeout(() => {
        navigate(ROUTE.SIGN_IN);
      }, 5000);
    }
  }, [isResetEmailSent, navigate]);

  useEffect(() => {
    isAuth && navigate(ROUTE.HOME);
  }, [isAuth, navigate]);

  // const location = useLocation();

  // const useQuery = (location: Location): LocationQuery => {
  //   const parameters = new URLSearchParams(location.search);
  //   const mode = parameters.get("mode");
  //   const oobCode = parameters.get("oobCode");
  //   const continueUrl = parameters.get("continueUrl");
  //   return {
  //     mode: mode as string,
  //     oobCode: oobCode as string,
  //     continueUrl: continueUrl as string,
  //   };
  // };

  // const query = useQuery(location);
  // const isRequested = query.mode;

  return (
    <FormWrapper>
      {isShowMessage && (
        <FormText>You will receive an email with a link to reset your password! </FormText>
      )}
      <FormTitle>Reset password</FormTitle>
      <ConfirmEmailForm />

      {/* {isRequested || isResetEmailSent ? (
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
      )} */}
    </FormWrapper>
  );
};
