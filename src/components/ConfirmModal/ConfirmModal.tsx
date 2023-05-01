import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { UseAppDispatch, useAppSelector } from "store/hooks";
import { fetchChangeUserEmail, fetchChangeUserName, handleConfirmModal } from "store/features";
import { Button, ButtonGroup, CancelButton, SubmitButton, Portal, PortalTarget } from "components";
import { SettingsFormValues } from "types";
import { Color, FormTitle } from "ui";
import { CancelIcon } from "assets";

import { Form, FormHeader, StyledModal } from "./styles";
import { ConfirmInput } from "./ConfirmInput";

interface ConfirmModalProps {
  isOpen: boolean;
  userInfo: SettingsFormValues | undefined;
}

export interface ConfirmModalValues {
  password: string;
}

export const ConfirmModal = ({ isOpen, userInfo }: ConfirmModalProps) => {
  const dispatch = UseAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConfirmModalValues>();

  const closeModal = () => {
    dispatch(handleConfirmModal(false));
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      dispatch(handleConfirmModal(false));
    }
  };

  const { name, email } = useAppSelector((state) => state.user);

  const onSubmit: SubmitHandler<ConfirmModalValues> = ({ password }) => {
    if (password === "") {
      dispatch(handleConfirmModal(true));
    }
    if (userInfo && userInfo.name !== name) {
      dispatch(fetchChangeUserName({ name: userInfo.name }));
      dispatch(handleConfirmModal(false));
    }
    if (userInfo && userInfo.email !== email) {
      dispatch(fetchChangeUserEmail({ newEmail: userInfo.email, password: password }));
      dispatch(handleConfirmModal(false));
    }
    if (userInfo && userInfo.newPassword) {
      dispatch(handleConfirmModal(false));
    }
    reset();
  };

  const handleReset = () => {
    reset();
  };

  return (
    <Portal target={PortalTarget.MODAL}>
      {isOpen && (
        <StyledModal onClick={handleClose}>
          <Form onSubmit={handleSubmit(onSubmit)} onReset={handleReset}>
            <FormHeader>
              <FormTitle>One more step</FormTitle>
              <Button onClick={closeModal} $background="transparent" type="button">
                <CancelIcon fill={Color.WHITE} />
              </Button>
            </FormHeader>
            <ConfirmInput
              title="Enter your password to confirm"
              placeholder="Password"
              type="password"
              name="password"
              register={register}
              required={true}
            />
            {errors.password && "This field is required."}
            <ButtonGroup position="center">
              <CancelButton type="reset">Clear</CancelButton>
              <SubmitButton type="submit">Confirm</SubmitButton>
            </ButtonGroup>
          </Form>
        </StyledModal>
      )}
    </Portal>
  );
};
