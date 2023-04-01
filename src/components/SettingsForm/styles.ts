import styled from "styled-components";
import { Color } from "ui";

const StyledSettingsForm = styled.form`
  display: grid;
  gap: 40px;
  width: 100%;
  color: ${Color.WHITE};
`;
const SettingsFormField = styled.div`
  display: grid;
  gap: 20px;
`;
const SettingsFieldWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 40px;
  border-radius: 10px;
  background-color: ${Color.BLACK};
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  gap: 40px;
`;
const FormText = styled.p`
  display: flex;
  flex-direction: column;
`;
const FormTextSecondary = styled.p`
  color: ${Color.SECONDARY};
`;

export {
  StyledSettingsForm,
  SettingsFormField,
  SettingsFieldWrapper,
  ButtonWrapper,
  FormTextSecondary,
  FormText,
};
