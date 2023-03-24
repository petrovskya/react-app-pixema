import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { LogoIconLight } from 'assets';
import styled from 'styled-components';
import { Colors } from 'ui';
import { SignUpForm } from 'components';

export const SignUpPage = () => {
  // const { register, handleSubmit } = useForm();

  // const onSubmit = ({email, password}): any => {
  //   createUserWithEmailAndPassword(auth, email, password)
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
  // }
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <FormWrapper>
        <form>
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button type='submit'>Sign Up</button>
        </form>
      </FormWrapper>

      <p>© All Rights Reserved</p>
    </>
  );
};
export const FormWrapper = styled.div`
  display: grid;
  width: 574px;
  padding: 40px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: ${Colors.DARK};
`;
