import { Link, useLocation } from 'react-router-dom';
import { List, Title, Item, MovieTitle } from './TrendingMovies.styled';
import PropTypes from 'prop-types';

const baseImageUrl = 'https://image.tmdb.org/t/p/w300';

const TrendingMovies = ({ items }) => {
  const location = useLocation();

  return (
    <>
      <Title>Trending today</Title>
      <List>
        {items.map(({ id, poster_path, title, original_title }) => (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={`${baseImageUrl}${poster_path}`} alt={title} />
            </Link>
            <MovieTitle>{original_title}</MovieTitle>
          </Item>
        ))}
      </List>
    </>
  );
};

TrendingMovies.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TrendingMovies;
