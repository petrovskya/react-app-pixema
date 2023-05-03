import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { setUserAuth } from "store/features";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { getUser } from "store/selectors";
import { ConfirmEmailMessage, SettingsForm } from "components";
import { ROUTE } from "router";
import { StyledOutlet } from "ui";

import { auth } from "./../firebase";

export const SettingsPage = () => {
  const dispatch = UseAppDispatch();
  const { isAuth, verificationStatus } = useAppSelector(getUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user?.emailVerified) {
        dispatch(setUserAuth(user));
      }
    });
  }, [dispatch]);

  return isAuth ? (
    <StyledOutlet>
      {!verificationStatus && <ConfirmEmailMessage />}
      {verificationStatus && <SettingsForm />}
    </StyledOutlet>
  ) : (
    <Navigate to={ROUTE.SIGN_IN} />
  );
};
