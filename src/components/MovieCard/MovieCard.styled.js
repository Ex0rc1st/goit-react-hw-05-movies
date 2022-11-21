import styled from 'styled-components';

export const MovieTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Popularity = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Owerview = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeight.bold};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const OwerviewTetx = styled.p`
  text-align: justify;
`;

export const Genre = styled.p`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeight.bold};
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[3]}px;
`;

export const ImageWraper = styled.div`
  margin-right: ${p => p.theme.space[4]}px;
`;
