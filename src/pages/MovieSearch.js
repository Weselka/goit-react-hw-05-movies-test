import { useState, useEffect } from 'react';
import { getSearchMovies } from '../service/movies-service';
import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  MovieList,
} from 'components';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const handleSubmit = query => {
    setQuery(query);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    setIsLoading(true);
    const fetchSearchMovies = async () => {
      try {
        const { results } = await getSearchMovies(query);
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchMovies();
  }, [query]);

  
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {error && <Heading>Something wrong</Heading>}
        {movies && <MovieList movies={movies} />}
      </Container>
    </Section>
  );
};

export default MovieSearch;
