import Container from 'components/Container/Container';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../Api/Api';
import { List, AuthorName, ContentTetx } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews(id) {
      const reviews = await getMovieReviews(id);

      setMovieReviews(reviews);
    }

    getReviews(movieId);
  }, [movieId]);

  return (
    <Container>
      {movieReviews.length > 0 ? (
        <List>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <AuthorName>Author: {author}</AuthorName>
              <ContentTetx>{content}</ContentTetx>
            </li>
          ))}
        </List>
      ) : (
        <p>we don't have any reviews fot this movie</p>
      )}
    </Container>
  );
};

export default Reviews;
