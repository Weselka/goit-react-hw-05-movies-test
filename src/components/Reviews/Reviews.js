import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'service/movies-service';
import { Loader, MovieText, MovieSubTittle } from 'components';


const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchReviews = async () => {
      try {
        const responce = await getReviewsById(movieId);
        setReviews(responce.results);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {error && <p>Something wrong</p>}
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <MovieSubTittle>{author}</MovieSubTittle>
              <MovieText>{content}</MovieText>
            </li>
          ))}
        </ul>
      ) : (
        <MovieText>We don't have any reviews for this movie</MovieText>
      )}
    </>
  );
};

export default Reviews;
