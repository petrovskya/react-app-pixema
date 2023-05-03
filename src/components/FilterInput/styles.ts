import styled from "styled-components";
import { Color } from "ui";

const StyledInput = styled.input<{ $isValid: boolean }>(({ $isValid }) => ({
  width: "100%",
  padding: "16px 20px",
  borderRadius: "10px",
  border: $isValid ? `3px solid ${Color.BLACK}` : `2px solid ${Color.ERROR}`,
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
  width: 100%;
`;

const InputTitle = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  color: ${Color.WHITE};
`;

export { StyledInput, InputTitle, InputWrapper };
