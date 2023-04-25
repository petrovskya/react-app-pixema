import styled from "styled-components";
import { Color } from "ui";

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
const FilterForm = styled.form`
  z-index: 4;
  display: grid;
  align-content: center;
  gap: 20px;
  padding: 48px 40px;
  width: 518px;
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

export { StyledModal, FilterForm, FormHeader };
