import styled from 'styled-components';

export const StyledMoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 40px;
`;
