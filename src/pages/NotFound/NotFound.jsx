import Container from 'components/Container/Container';

import {
  NoticeText,
  DirectionText,
  Layout,
  ErrorPageText,
  Link,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <Container ml="auto" mr="auto" pt={5}>
      <ErrorPageText>404</ErrorPageText>
      <NoticeText>Opps, we have an error</NoticeText>
      <Layout>
        <DirectionText>go back to</DirectionText>
        <Link to="/home"> Home page</Link>
      </Layout>
    </Container>
  );
};

export default NotFound;
