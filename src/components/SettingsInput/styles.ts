import styled from "styled-components";

import { Color, Media } from "ui";

const StyledSettingsInput = styled.input`
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

const InputWrapper = styled.div`
  display: grid;
  gap: 8px;
  width: 48%;
  ${Media.TABLET} {
    width: 100%;
  }
`;

export { StyledSettingsInput, InputWrapper };
