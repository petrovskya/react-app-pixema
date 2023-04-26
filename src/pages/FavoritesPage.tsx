import { ConfirmMessage, ErrorMessage, MoviesList } from "components";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ROUTE } from "router";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { auth } from "./../firebase";
import { Color, StyledOutlet } from "ui";
import { onAuthStateChanged } from "firebase/auth";
import { setUserAuth } from "store/features";
import styled from "styled-components";

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
      {!verificationStatus && <ConfirmMessage />}
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
