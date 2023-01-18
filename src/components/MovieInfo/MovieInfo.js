import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  MovieWrapper,
  MovieBox,
  Image,
  MovieTitle,
  MovieText,
  MovieSubTittle,
  LinkWrapperSecondary,
  NavLinkSecondary,
  Loader,
} from 'components';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w300';

export const MovieInfo = ({ movie }) => {

  const {
    poster_path,
    original_title,
    overview,
    release_date,
    genres,
    vote_average,
  } = movie;

  const rating = Math.ceil(vote_average * 10);
  const release = release_date.split('-')[0];
  const genresName = genres.map(genre => genre.name);
  const genresRender = genresName.join(', ');

  return (
    <MovieBox>
      <MovieWrapper>
        <Image src={`${imgBaseUrl}${poster_path}`} alt={original_title} />
        <div>
          <MovieTitle>
            {original_title}({release})
          </MovieTitle>
          <MovieText>User score: {rating}%</MovieText>
          <MovieSubTittle>Owervies</MovieSubTittle>
          <MovieText>{overview}</MovieText>
          <MovieSubTittle>Genres</MovieSubTittle>
          <MovieText>{genresRender}</MovieText>
        </div>
      </MovieWrapper>
      <MovieSubTittle>Additional information</MovieSubTittle>
      <LinkWrapperSecondary>
        <NavLinkSecondary to="cast">Cast</NavLinkSecondary>
        <NavLinkSecondary to="reviews">Reviews</NavLinkSecondary>
      </LinkWrapperSecondary>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MovieBox>
  );
};
