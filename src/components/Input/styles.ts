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
  &:focus {
    outline-color: ${Color.PRIMARY};
    border: 2px solid ${Color.PRIMARY};
    color: ${Color.WHITE};
  }
`;

const InputWrapper = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;
`;

export { InputWrapper, StyledInput };
