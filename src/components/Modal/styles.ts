import styled from "styled-components";

import { Color, Media } from "ui";

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
  gap: 20px;
  width: 30%;
  margin: 0 auto;
  padding: 48px 40px;
  background-color: ${Color.DARK};
  border: 4px solid ${Color.PRIMARY};
  border-radius: 16px;
  ${Media.LAPTOP_L} {
    width: 40%;
  }
  ${Media.LAPTOP_S} {
    width: 50%;
  }
  ${Media.TABLET} {
    width: 85%;
    padding: 28px 20px;
  }
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 2px solid ${Color.SECONDARY};
`;

export { StyledModal, FilterForm, FormHeader };
