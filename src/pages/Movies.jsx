import Container from 'components/Container/Container';
import SearchForm from 'components/SearchForm';
import { useEffect, useState } from 'react';
import { searchMovies } from '../components/Api/Api';
import SearchMovie from 'components/SearchMovie';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchMovieItems, setSearchMovieItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('value');

  const getQuery = data => {
    setSearchParams(data !== '' ? { value: data } : {});
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function getSearchMovie() {
      try {
        const movies = await searchMovies(searchQuery);

        if (movies.length > 0) {
          setSearchMovieItems(movies);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getSearchMovie();
  }, [searchQuery]);

  return (
    <Container as="main" width={1280} ml="auto" mr="auto" mt={4}>
      <SearchForm onSubmit={getQuery} />
      <SearchMovie items={searchMovieItems} />
    </Container>
  );
}
