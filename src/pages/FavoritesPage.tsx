import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { ConfirmEmailMessage, ErrorMessage, MoviesList } from "components";
import { ROUTE } from "router";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { StyledOutlet } from "ui";
import { setUserAuth } from "store/features";

import { auth } from "./../firebase";

export const FavoritesPage = () => {
  const favorites = null;
  const dispatch = UseAppDispatch();
  const { isAuth, verificationStatus } = useAppSelector((state) => state.user);

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
      {/* {isLoading && <Spinner />}
    {isLoading && <Spinner />}
    {error && <ErrorMessage error={error} />} */}
      {verificationStatus && !favorites && <ErrorMessage error={"No films"} />}
      {verificationStatus && favorites && <MoviesList movies={favorites} />}
      {/* {(verificationStatus &&  && <ShowMoreButton type="button" onClick={handleChange} />} */}
    </StyledOutlet>
  ) : (
    <Navigate to={ROUTE.SIGN_IN} />
  );
};
