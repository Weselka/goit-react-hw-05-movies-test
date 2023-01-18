import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { getMovieById } from 'service/movies-service';
import { Section, Container, MovieInfo, Loader, BtnSearch } from 'components';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const location = useLocation();
  const linkToBack = location.state?.from ?? '/';
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchMovie = async () => {
      try {
        const responce = await getMovieById(movieId);
        setMovie(responce);
        return responce;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <>
      <Section>
        <Container>
          <Link to={linkToBack}>
            <BtnSearch type="button">Go back</BtnSearch>
          </Link>
          {isLoading && <Loader />}
          <MovieInfo movie={movie} />
        </Container>
      </Section>
    </>
  );
};

export default Movie;