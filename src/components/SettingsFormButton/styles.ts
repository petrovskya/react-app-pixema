import styled from "styled-components";
import { Color } from "ui";

export const StyledSettingsFormButton = styled.button`
  width: 25%;
  border-radius: 10px;
  background: ${Color.PRIMARY};
  padding: 16px 0;
  margin-top: 20px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: ${Color.WHITE};
  transition-duration: 0.3s;
  cursor: pointer;
  &:hover {
    background: ${Color.PRIMARY_LIGHT};
  }
`;
