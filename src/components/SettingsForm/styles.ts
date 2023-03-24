import styled from 'styled-components';
import { Colors } from 'ui';

export const StyledSettingsForm = styled.form`
  display: grid;
  gap: 40px;
  width: 100%;
  color: ${Colors.WHITE};
`;
export const SettingsFormField = styled.div`
  display: grid;
  gap: 20px;
`;
export const SettingsFieldWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 40px;
  border-radius: 10px;
  background-color: ${Colors.BLACK};
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  gap: 40px;
`;
