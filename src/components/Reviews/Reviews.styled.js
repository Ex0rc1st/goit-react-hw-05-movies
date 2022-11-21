import styled from 'styled-components';

export const List = styled.ul`
  /* list-style: none; */
`;

export const AuthorName = styled.p`
  font-weight: ${p => p.theme.fontWeight.bold};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ContentTetx = styled.p`
  text-align: justify;
  margin-bottom: ${p => p.theme.space[3]}px;
`;
