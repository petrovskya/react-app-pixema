import { ErrorMessage, MoviesList } from "components";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ROUTE } from "router";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { auth } from "./../firebase";
import { StyledOutlet } from "ui";
import { onAuthStateChanged } from "firebase/auth";
import { setUserAuth, unsetUserAuth } from "store/features";

export const FavoritesPage = () => {
  const favorites = null;
  const dispatch = UseAppDispatch();
  const { isAuth } = useAppSelector((state) => state.user);
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user: any) => {
  //     if (user) {
  //       dispatch(setUserAuth(user));
  //     } else {
  //       dispatch(unsetUserAuth());
  //       return <Navigate to={ROUTE.SIGN_IN} />;
  //     }
  //   });
  // }, [dispatch]);
  return isAuth ? (
    <StyledOutlet>
      {/* {isLoading && <Spinner />}
    {isLoading && <Spinner />}
    {error && <ErrorMessage error={error} />} */}
      {!favorites && <ErrorMessage error={"No films"} />}
      {favorites && <MoviesList movies={favorites} />}
      {/* <ShowMoreButton type="button"  onClick={handleChange}/> */}
    </StyledOutlet>
  ) : (
    <Navigate to={ROUTE.SIGN_IN} />
  );
};
