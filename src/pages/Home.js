import { Container, Section, Heading,MovieList } from 'components';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'service/movies-service';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        console.log('error: ', error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <Section>
      <Container>
        <Heading>Trending today</Heading>
        <MovieList movies={movies} />
      </Container>
    </Section>
  );
};
