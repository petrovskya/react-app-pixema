import styled from "styled-components";

import { Color, Media } from "ui";

const StyledSettingsInput = styled.input<{ $isValid: boolean }>(({ $isValid }) => ({
  width: "100%",
  padding: "16px 20px",
  borderRadius: "10px",
  border: $isValid ? "none" : `2px solid ${Color.ERROR}`,
  fontFamily: "inherit",
  fontSize: " 16px",
  fontWeight: 500,
  backgroundColor: Color.GRAPHITE,

  color: Color.WHITE,
  outlineColor: $isValid ? "none" : Color.ERROR,

  "&:focus": {
    outlineColor: $isValid ? Color.PRIMARY : Color.ERROR,
    border: $isValid ? `2px solid ${Color.PRIMARY}` : `2px solid ${Color.ERROR}`,
  },
}));

const InputWrapper = styled.div`
  display: grid;
  gap: 8px;
  width: 48%;
  ${Media.TABLET} {
    width: 100%;
  }
`;

export { StyledSettingsInput, InputWrapper };
