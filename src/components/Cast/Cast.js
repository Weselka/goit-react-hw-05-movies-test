import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'service/movies-service';
import { Grid, GridItem, Text,Loader } from 'components';
const imgBaceUrl = 'https://image.tmdb.org/t/p/w300';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsloading] = useState(null);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsloading(true);
    const fetchCast = async () => {
      try {
        const responce = await getCastById(movieId);
        setCast(responce.cast);
        setIsloading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {error && <p>Something wrong</p>}
      {isLoading && <Loader />}
      {cast ? (
        <Grid>
          {cast.map(({ name, profile_path, id }) => (
            <GridItem key={id}>
              {profile_path ? (
                <img src={`${imgBaceUrl}${profile_path}`} alt={name} />
              ) : (
                <img
                  src="https://sd.keepcalms.com/i/keep-calm-poster-not-found.png"
                  alt="poster not found"
                />
              )}
              <Text>{name}</Text>
            </GridItem>
          ))}
        </Grid>
      ) : (
        <p>Sorry. There is no information about actors</p>
      )}
    </>
  );
};

export default Cast;
