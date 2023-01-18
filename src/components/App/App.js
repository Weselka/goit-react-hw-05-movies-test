import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Header } from 'components';
import { Home } from 'pages';

const MovieSearch = lazy(() => import('../../pages/MovieSearch'));
const Movie = lazy(() => import('../../pages/Movie'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} end>
        <Route index element={<Home />} />
        <Route path="movies" element={<MovieSearch />} />
        <Route path="movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
