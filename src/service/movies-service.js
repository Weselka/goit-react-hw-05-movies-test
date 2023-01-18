import axios from 'axios';

const API_KEY = 'affb3204970e384a56c71adca3146515';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  
  return data;
};

export const getSearchMovies = async name => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`,
  );

  return data;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
  
  return data;
};

export const getCastById = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`,
  );
  return data;
};

export const getReviewsById = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`,
  );
  return data;
};