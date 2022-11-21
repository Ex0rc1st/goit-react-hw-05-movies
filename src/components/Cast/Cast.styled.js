import styled from 'styled-components';

export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: ${p => p.theme.space[4]}px;
  margin: 12px auto 16px;
  padding: 0px;
  list-style: none;
`;

export const CastListItem = styled.li`
  box-shadow: ${p => p.theme.shadows.shadow};
`;

export const CastName = styled.p`
  margin-top: ${p => p.theme.space[3]}px;
  text-align: center;
`;
