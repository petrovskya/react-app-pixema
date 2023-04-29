import { SubmitHandler, useForm } from "react-hook-form";

import {
  ButtonGroup,
  CancelButton,
  ControlledSwitch,
  SettingsInput,
  SubmitButton,
} from "components";
import { useWindowSize } from "hooks";
import { UseAppDispatch } from "store/hooks";
import { SignFormValues } from "types";
import { FormTitle } from "ui";

import {
  FormText,
  FormTextSecondary,
  SettingsFieldWrapper,
  SettingsFormField,
  StyledSettingsForm,
} from "./styles";

export const SettingsForm = () => {
  const { width } = useWindowSize();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignFormValues>();

  const dispatch = UseAppDispatch();

  const onSubmit: SubmitHandler<SignFormValues> = (data): any => {
    // dispatch(fetchSignUpUser(data));
  };

  return (
    <StyledSettingsForm onSubmit={handleSubmit(onSubmit)}>
      <SettingsFormField>
        <FormTitle>Profile</FormTitle>
        <SettingsFieldWrapper>
          <SettingsInput
            name="email"
            type="email"
            placeholder="Your email"
            register={register}
            required={true}
            title={"Email"}
          />
          <SettingsInput
            name="name"
            type="text"
            placeholder="Your name"
            register={register}
            required={true}
            title={"Name"}
          />
        </SettingsFieldWrapper>
      </SettingsFormField>
      <SettingsFormField>
        <FormTitle>Password</FormTitle>
        {width && width < 768 ? (
          <SettingsFieldWrapper>
            <SettingsInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              register={register}
              required={true}
              title={"Confirm password"}
            />
            <SettingsInput
              name="password"
              type="password"
              placeholder="Your password"
              register={register}
              required={true}
              title={"New password"}
            />
            <SettingsInput
              name="password"
              type="password"
              placeholder="Your password"
              register={register}
              required={true}
              title={"Password"}
            />
          </SettingsFieldWrapper>
        ) : (
          <SettingsFieldWrapper>
            {" "}
            <SettingsInput
              name="password"
              type="password"
              placeholder="Your password"
              register={register}
              required={true}
              title={"New password"}
            />
            <SettingsInput
              name="password"
              type="password"
              placeholder="Your password"
              register={register}
              required={true}
              title={"Password"}
            />
            <SettingsInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              register={register}
              required={true}
              title={"Confirm password"}
            />
          </SettingsFieldWrapper>
        )}
      </SettingsFormField>
      <SettingsFormField>
        <FormTitle>Color</FormTitle>
        <SettingsFieldWrapper>
          <ControlledSwitch />
          <FormText>
            Dark <FormTextSecondary>use dark theme</FormTextSecondary>
          </FormText>
        </SettingsFieldWrapper>
      </SettingsFormField>
      <ButtonGroup position="right">
        <CancelButton type="reset">Cancel</CancelButton>
        <SubmitButton type="submit">Save</SubmitButton>
      </ButtonGroup>
    </StyledSettingsForm>
  );
};
