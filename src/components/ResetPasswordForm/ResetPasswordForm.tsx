import { createUserWithEmailAndPassword } from "@firebase/auth";
import { Button, Input } from "components";
import { auth } from "firebase";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignFormValues } from "types";
import { StyledResetPasswordForm } from "./styles";

export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignFormValues>();

  const onSubmit: SubmitHandler<SignFormValues> = ({ email, password }): any => {
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  };
  return (
    <StyledResetPasswordForm onSubmit={handleSubmit(onSubmit)}>
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
      <Button type="submit">Set password</Button>
    </StyledResetPasswordForm>
  );
};
