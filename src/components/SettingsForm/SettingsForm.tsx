import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  ButtonGroup,
  CancelButton,
  ControlledSwitch,
  SettingsInput,
  SubmitButton,
  ConfirmModal,
} from "components";
import { useToggle } from "hooks";
import { UseAppDispatch, useAppSelector } from "store/hooks";
import { handleConfirmModal } from "store/features";
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

import {} from "components/ConfirmModal/ConfirmModal";

export const SettingsForm = () => {
  const { register, handleSubmit, reset } = useForm<SettingsFormValues>();
  const { name, email, errorMessage, isOpenModal } = useAppSelector((state) => state.user);
  const dispatch = UseAppDispatch();

  const [newUserInfo, setNewUserInfo] = useState<SettingsFormValues>({} as SettingsFormValues);

  useEffect(() => {
    dispatch(handleConfirmModal(isOpenModal));
  }, [dispatch, isOpenModal]);

  const [isChangePasswordMode, setChangeMode] = useToggle(false);

  const onSubmitData: SubmitHandler<SettingsFormValues> = (data): any => {
    setNewUserInfo(data);
    dispatch(handleConfirmModal(true));
  };

  const handleCancel = () => reset();

  return (
    <StyledSettingsForm onSubmit={handleSubmit(onSubmitData)}>
      <ConfirmModal isOpen={isOpenModal} userInfo={newUserInfo} />
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
        <SubmitButton type="submit">Save</SubmitButton>
      </ButtonGroup>
    </StyledSettingsForm>
  );
};
