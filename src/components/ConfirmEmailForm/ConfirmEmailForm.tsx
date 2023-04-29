import { SubmitHandler, useForm } from "react-hook-form";

import { Button, Input } from "components";
import { SignFormValues } from "types";

import { StyledConfirmEmailForm } from "./styles";

export const ConfirmEmailForm = () => {
  const {
    register,
    handleSubmit,
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
    <StyledConfirmEmailForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        type="email"
        placeholder="Your email"
        register={register}
        required={true}
        title={"Email"}
      />
      {errors.email && "This field is required."}
      <Button type="submit">Reset</Button>
    </StyledConfirmEmailForm>
  );
};
