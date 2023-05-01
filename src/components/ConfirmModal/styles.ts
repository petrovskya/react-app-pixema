import styled from "styled-components";

import { Color } from "ui";

const StyledInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border-radius: 10px;
  border: 3px solid ${Color.BLACK};
  font-size: 16px;
  font-weight: 500;
  background-color: ${Color.GRAPHITE};
  color: ${Color.WHITE};
  &:focus {
    outline-color: ${Color.PRIMARY};
    border: 2px solid ${Color.PRIMARY};
  }
`;

const InputWrapper = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${Color.BLACK_MODAL};
`;

const Form = styled.form`
  z-index: 4;
  display: grid;
  align-content: center;
  gap: 20px;
  width: 518px;
  padding: 48px 40px;
  background-color: ${Color.DARK};
  border: 5px solid ${Color.PRIMARY};
  border-radius: 16px;
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  border-bottom: 4px solid ${Color.SECONDARY};
`;

export { InputWrapper, StyledInput, StyledModal, Form, FormHeader };
