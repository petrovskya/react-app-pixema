import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { UseAppDispatch, useAppSelector } from "store/hooks";
import { fetchChangeUserEmail, fetchChangeUserName, handleConfirmModal } from "store/features";
import {
  Button,
  ButtonGroup,
  CancelButton,
  SubmitButton,
  Portal,
  PortalTarget,
  LittleSpinner,
} from "components";
import { SettingsFormValues } from "types";
import { Color, FormTitle } from "ui";
import { CancelIcon } from "assets";

import { Form, FormHeader, StyledModal } from "./styles";
import { ConfirmInput } from "./ConfirmInput";

interface ConfirmModalProps {
  isOpen: boolean;
  newEmail: string;
}

export interface ConfirmModalValues {
  password: string;
}

export const ConfirmModal = ({ isOpen, newEmail }: ConfirmModalProps) => {
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

  const { email, isLoading, errorMessage } = useAppSelector((state) => state.user);

  const onSubmit: SubmitHandler<ConfirmModalValues> = ({ password }) => {
    if (newEmail !== email) {
      dispatch(fetchChangeUserEmail({ newEmail: newEmail, password: password }));
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
            {errorMessage && <>{errorMessage}</>}
            <ButtonGroup position="center">
              <CancelButton type="reset">Clear</CancelButton>
              <SubmitButton type="submit">Confirm{isLoading && <LittleSpinner />}</SubmitButton>
            </ButtonGroup>
          </Form>
        </StyledModal>
      )}
    </Portal>
  );
};
