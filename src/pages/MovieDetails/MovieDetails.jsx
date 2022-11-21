import Container from 'components/Container/Container';
import { Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'components/Api/Api';
import { useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard';
import {
  StyledLink,
  Layout,
  AditionText,
  Link,
  BackIcon,
} from './MovieDetails.styled';

const navItem = [
  {
    href: 'cast',
    text: 'Cast',
  },
  { href: 'reviews', text: 'Reviews' },
];

const MovieDetails = () => {
  const [movieDetails, setMoviDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getDetails() {
      try {
        const results = await getMovieDetails(movieId);
        setMoviDetails(results);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, [movieId]);

  const backLink = location.state?.from ?? `/movies`;

  return (
    <Container width={1280} ml="auto" mr="auto">
      <Link to={backLink}>
        <BackIcon />
        <p>go Back</p>
      </Link>

      <MovieCard items={movieDetails} />

      <Layout>
        <AditionText>Adition information</AditionText>
        {navItem.map(({ href, text }) => (
          <StyledLink key={href} to={href} state={{ from: backLink }}>
            {text}
          </StyledLink>
        ))}
      </Layout>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
