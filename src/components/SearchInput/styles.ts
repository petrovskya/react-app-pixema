import styled from "styled-components";
import { Color } from "ui";

export const StyledSearchInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  background: ${Color.GRAPHITE};
  border-radius: 10px;
  border: 3px solid ${Color.BLACK};
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: ${Color.SECONDARY};
  &:focus {
    outline-color: ${Color.PRIMARY};
    border: 2px solid ${Color.PRIMARY};
    color: ${Color.WHITE};
  }
`;