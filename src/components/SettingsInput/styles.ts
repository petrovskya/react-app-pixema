import styled from "styled-components";
import { Color, Media } from "ui";

export const StyledSettingsInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border-radius: 10px;
  border: none;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  background-color: ${Color.GRAPHITE};
  &:focus {
    outline-color: ${Color.PRIMARY};
    border: 2px solid ${Color.PRIMARY};
    color: ${Color.WHITE};
  }
`;
export const InputWrapper = styled.div`
  display: grid;
  gap: 8px;
  width: 48%;
  ${Media.TABLET} {
    width: 100%;
  }
`;
