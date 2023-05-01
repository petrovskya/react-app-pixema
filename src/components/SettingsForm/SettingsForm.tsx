import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  ButtonGroup,
  CancelButton,
  ControlledSwitch,
  SettingsInput,
  SubmitButton,
  ConfirmModal,
  LittleSpinner,
} from "components";
import { useToggle } from "hooks";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { fetchChangeUserName, fetchChangePassword, handleConfirmModal } from "store/features";
import { SettingsFormValues } from "types";
import { FormTitle } from "ui";

import {
  FormText,
  FormTextSecondary,
  SettingsColumnFieldWrapper,
  SettingsFieldWrapper,
  SettingsFormField,
  StyledSettingsForm,
  StyledSwitch,
} from "./styles";

export const SettingsForm = () => {
  const { register, handleSubmit, reset } = useForm<SettingsFormValues>();
  const { name, email, errorMessage, isOpenModal, isPasswordChanged, isLoading } = useAppSelector(
    (state) => state.user,
  );
  const dispatch = UseAppDispatch();

  const [newEmail, setNewEmail] = useState<string>(email);

  useEffect(() => {
    dispatch(handleConfirmModal(isOpenModal));
  }, [dispatch, isOpenModal]);

  const [isChangePasswordMode, setChangeMode] = useToggle(false);

  const onSubmitData: SubmitHandler<SettingsFormValues> = (formValues): any => {
    if (formValues.password) {
      dispatch(
        fetchChangePassword({ password: formValues.password, newPassword: formValues.newPassword }),
      );
      reset();
    } else {
    }
    if (formValues.name !== name) {
      dispatch(fetchChangeUserName({ name: formValues.name }));
    }
    if (formValues.email !== email) {
      setNewEmail(formValues.email);
      dispatch(handleConfirmModal(true));
    }
  };

  const handleCancel = () => reset();

  return (
    <StyledSettingsForm onSubmit={handleSubmit(onSubmitData)}>
      <ConfirmModal isOpen={isOpenModal} newEmail={newEmail} />
      <SettingsFormField>
        <FormTitle>Profile</FormTitle>
        <SettingsFieldWrapper>
          <SettingsInput
            name="email"
            type="email"
            placeholder="Your email"
            defaultValue={email}
            register={register}
            required={true}
            title={"Email"}
          />
          <SettingsInput
            name="name"
            type="text"
            placeholder="Your name"
            defaultValue={name}
            register={register}
            required={true}
            title={"Name"}
          />
          {errorMessage && <>{errorMessage}</>}
        </SettingsFieldWrapper>
      </SettingsFormField>
      <SettingsFormField>
        <FormTitle>
          Change password <StyledSwitch checked={isChangePasswordMode} onChange={setChangeMode} />
        </FormTitle>
        {isChangePasswordMode && (
          <SettingsColumnFieldWrapper>
            {isPasswordChanged && <p>Password changed successfully!</p>}
            <SettingsInput
              name="password"
              type="password"
              placeholder="Your password"
              register={register}
              required={true}
              title={"Password"}
            />
            <SettingsInput
              name="newPassword"
              type="password"
              placeholder="Your password"
              register={register}
              required={true}
              title={"New password"}
            />
            <SettingsInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              register={register}
              required={true}
              title={"Confirm password"}
            />
            {errorMessage && <span>{errorMessage}</span>}
          </SettingsColumnFieldWrapper>
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
        <CancelButton type="reset" onClick={handleCancel}>
          Cancel
        </CancelButton>
        <SubmitButton type="submit">Save {isLoading && <LittleSpinner />}</SubmitButton>
      </ButtonGroup>
    </StyledSettingsForm>
  );
};
