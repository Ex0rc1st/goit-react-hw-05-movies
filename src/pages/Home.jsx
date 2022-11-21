import Container from 'components/Container/Container';
import { getTrending } from '../components/Api/Api';
import { useEffect, useState } from 'react';
import TrendingMovies from 'components/TrendingMovies';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    try {
      async function getTrendMovies() {
        const movies = await getTrending();
        setTrendMovies(movies);
      }

      getTrendMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container as="main" ml="auto" mr="auto" width={1280} mb={4} mt={4}>
      <TrendingMovies items={trendMovies} />
    </Container>
  );
};

export default Home;
