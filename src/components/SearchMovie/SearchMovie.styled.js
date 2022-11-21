import styled from 'styled-components';
import { Link as MovieLink } from 'react-router-dom';

export const List = styled.ul`
  padding-left: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
`;

export const Link = styled(MovieLink)`
  font-size: ${p => p.theme.fontSizes.l};
  :hover {
    color: ${p => p.theme.colors.hover};
  }
`;

export const ListItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
