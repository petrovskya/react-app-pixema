import {
  ControlledSwitch,
  SettingsFormButton,
  SettingsInput,
} from 'components';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignFormValues } from 'types';
import { FormTitle } from 'ui';
import {
  ButtonWrapper,
  FormText,
  FormTextSecondary,
  SettingsFieldWrapper,
  SettingsFormField,
  StyledSettingsForm,
} from './styles';

export const SettingsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignFormValues>();

  const onSubmit: SubmitHandler<SignFormValues> = ({
    email,
    password,
  }): any => {
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
    <StyledSettingsForm onSubmit={handleSubmit(onSubmit)}>
      <SettingsFormField>
        <FormTitle>Profile</FormTitle>
        <SettingsFieldWrapper>
          <SettingsInput
            name='email'
            type='email'
            placeholder='Your email'
            register={register}
            required={true}
            title={'Email'}
          />
          <SettingsInput
            name='name'
            type='text'
            placeholder='Your name'
            register={register}
            required={true}
            title={'Name'}
          />
        </SettingsFieldWrapper>
      </SettingsFormField>
      <SettingsFormField>
        <FormTitle>Password</FormTitle>
        <SettingsFieldWrapper>
          <SettingsInput
            name='password'
            type='password'
            placeholder='Your password'
            register={register}
            required={true}
            title={'New password'}
          />
          <SettingsInput
            name='password'
            type='password'
            placeholder='Your password'
            register={register}
            required={true}
            title={'Password'}
          />
          <SettingsInput
            name='confirmPassword'
            type='password'
            placeholder='Confirm your password'
            register={register}
            required={true}
            title={'Confirm password'}
          />
        </SettingsFieldWrapper>
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
      <ButtonWrapper>
        <SettingsFormButton type='reset'>Cancel</SettingsFormButton>
        <SettingsFormButton type='submit'>Save</SettingsFormButton>
      </ButtonWrapper>
    </StyledSettingsForm>
  );
};
