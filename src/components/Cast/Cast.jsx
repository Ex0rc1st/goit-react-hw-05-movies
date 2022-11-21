import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../Api/Api';
import { CastList, CastListItem, CastName } from './Cast.styled';
import Container from 'components/Container/Container';

const baseImageUrl = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    async function getActors(id) {
      try {
        const actorItems = await getMovieCredits(id);
        setActors(actorItems.cast);
      } catch (error) {
        console.log(error);
      }
    }

    getActors(movieId);
    controller.abort();
  }, [movieId]);

  return (
    <Container>
      <CastList>
        {actors.map(({ id, name, profile_path }) => (
          <CastListItem key={id}>
            {profile_path ? (
              <>
                <img src={`${baseImageUrl}${profile_path}`} alt={name} />
                <CastName>{name}</CastName>
              </>
            ) : (
              <CastName>{name}</CastName>
            )}
          </CastListItem>
        ))}
      </CastList>
    </Container>
  );
};

export default Cast;
