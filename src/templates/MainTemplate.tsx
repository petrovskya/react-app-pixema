import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from '../components/Nav';
import { LogoIconLight, LogoIconDark } from 'assets';
import { Colors } from 'ui/colors';
import { ROUTE } from 'router/routes';
import { CustomLink } from 'components/CustomLink';

export const MainTemplate = () => {
  return (
    <StyledTemplate>
      <StyledAside>
        <LogoIconLight />
        <Nav />
      </StyledAside>
      <StyledMain>
        <StyledHeader>
          <StyledSearchInput placeholder='Search' />
          <Link to={ROUTE.SIGN_IN}>Sign In</Link>
        </StyledHeader>
        <StyledOutlet />
      </StyledMain>
      <StyledText>© All Rights Reserved</StyledText>
    </StyledTemplate>
  );
};
export const StyledTemplate = styled.div`
  display: grid;
  grid-template-columns: 160px 77%;
  gap: 146px;
  height: 100vh;
  padding: 40px 62px 64px;
  background: ${Colors.DARK};
`;
export const StyledAside = styled.div`
  display: grid;
  place-content: start;
  gap: 64px;
  margin-top: 8px;
`;
export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  width: 100%;
`;
export const StyledHeader = styled.header`
  display: flex;
  gap: 40px;
`;
export const StyledSearchInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  background: ${Colors.GRAPHITE};
  border-radius: 10px;
  border: none;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.SECONDARY};
  &:focus {
    outline-color: ${Colors.PRIMARY};
    border: 2px solid ${Colors.PRIMARY};
    color: ${Colors.WHITE};
  }
`;
export const StyledOutlet = styled(Outlet)`
  border: 1px solid white;
`;
export const StyledText = styled.span`
  position: fixed;
  bottom: 64px;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.LIGHT};
`;
