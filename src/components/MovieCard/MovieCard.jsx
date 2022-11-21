import PropTypes from 'prop-types';
import Container from 'components/Container/Container';
import { useEffect, useState } from 'react';
import {
  MovieTitle,
  Popularity,
  Owerview,
  Genre,
  OwerviewTetx,
  ImageWraper,
} from './MovieCard.styled';

const baseImageUrl = 'https://image.tmdb.org/t/p/w400';

const MovieCard = ({ items }) => {
  const [genreMovie, setGenre] = useState();
  const {
    poster_path,
    original_title,
    release_date,
    title,
    popularity,
    overview,
    genres,
  } = items;

  useEffect(() => {
    if (!genres) {
      return;
    }
    const genresType = genres.map(genre => genre.name);

    setGenre(genresType);
  }, [genres]);

  return (
    <Container display="flex" mt={5}>
      <ImageWraper mr={5}>
        {poster_path && (
          <img src={`${baseImageUrl}${poster_path}`} alt={title} />
        )}
      </ImageWraper>
      <Container width={900}>
        {release_date && (
          <MovieTitle>
            {original_title} ({release_date.slice(0, 4)})
          </MovieTitle>
        )}
        <Popularity>Popularity: {popularity}</Popularity>
        <Owerview>Owerview</Owerview>
        <OwerviewTetx>{overview}</OwerviewTetx>
        <Genre>Genres</Genre>
        <span>{`${genreMovie}`}</span>
      </Container>
    </Container>
  );
};

MovieCard.propTypes = {
  items: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    popularity: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};

export default MovieCard;
