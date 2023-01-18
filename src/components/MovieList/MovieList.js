import { Grid, GridItem, Text } from 'components';
import { Link, useLocation } from 'react-router-dom';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Grid>
      {movies?.map(({ id, title, poster_path }) => (
        <GridItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img src={`${imgBaseUrl}${poster_path}`} alt={title} />
            <Text>{title}</Text>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
