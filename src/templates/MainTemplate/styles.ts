import styled from "styled-components";
import { Color, Media } from "ui";

const StyledMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  max-width: 100vw;
  min-height: 100vh;
  padding: 40px 62px 64px;
  background: ${Color.DARK};
  ${Media.LAPTOP_S} {
    padding: 40px 48px 56px;
  }
  ${Media.TABLET} {
    padding: 40px 20px 56px;
  }
`;

const StyledAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledMenu = styled.div`
  position: fixed;
  top: 104px;
`;
const StyledText = styled.span`
  position: fixed;
  bottom: 64px;
  color: ${Color.LIGHT};
`;
const FixedWrapContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 62px;
  width: 100%;
  background: ${Color.DARK};
  ${Media.TABLET} {
    padding: 0 20px 20px;
  }
`;
const StyledWrap = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  max-width: 100%;
  padding: 56px 0;
  margin: 0 40px 0 146px;
  ${Media.LAPTOP_M} {
    margin-left: 78px;
    padding: 32px 0;
  }
  ${Media.TABLET} {
    margin-left: 0;
  }
`;

const StyledSearchInput = styled.input`
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
const StyledUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin: 0 15px;
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-left: 307px;
  margin-top: 64px;
  ${Media.LAPTOP_M} {
    margin-top: 90px;
    margin-left: 0;
    gap: 56px;
  }
`;

export {
  StyledMainTemplate,
  StyledAside,
  StyledMenu,
  FixedWrapContainer,
  StyledWrap,
  StyledSearchInput,
  StyledUserInfo,
  StyledMain,
  StyledText,
};
