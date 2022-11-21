import { useLocation } from 'react-router-dom';
import { List, Link, ListItem } from './SearchMovie.styled';
import PropTypes from 'prop-types';

const SearchMovie = ({ items }) => {
  const location = useLocation();

  if (items.length === 0) {
    return;
  }

  return (
    <>
      <List>
        {items.map(({ id, original_title }) => (
          <ListItem key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

SearchMovie.propTypes = {
  items: PropTypes.array.isRequired,
};

export default SearchMovie;
