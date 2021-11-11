import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../loader/loader';
import Review from '../review/review';
import {fetchReviews} from '../../store/api-actions';
import {resetReviews} from '../../store/reducer/reviews/action';
import {useParams} from 'react-router';
import {toNumber} from '../../common/utils';

const COLUMS_COUNT = 2;

const ReviewsList = (props) => {
  let {id} = useParams();
  id = toNumber(id);

  const {
    filmId,
    backgroundColor,
  } = props;

  const dispatch = useDispatch();
  const {reviews, isReviewsLoaded} = useSelector(
      (state) => state.REVIEWS
  );

  useEffect(() => {
    if (!(isReviewsLoaded && filmId !== id)) {
      dispatch(fetchReviews(filmId));
    }
    return () => dispatch(resetReviews());
  }, [id]);

  if (!isReviewsLoaded) {
    return <Loader />;
  }

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          reviews.slice(0, Math.round(reviews.length / COLUMS_COUNT)).map((review) => {
            return (
              <Review key={review.id}
                backgroundColor={backgroundColor}
                review={review}
              />
            );
          })
        }
      </div>
      {
        (reviews.length > 1) &&
            <div className="movie-card__reviews-col">
              {
                reviews.slice(reviews.length / COLUMS_COUNT + 1).map((review) => {
                  return (
                    <Review key={review.id}
                      backgroundColor={backgroundColor}
                      review={review}
                    />
                  );
                })
              }
            </div>
      }
    </div>
  );
};

ReviewsList.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  filmId: PropTypes.number.isRequired,
};

export default ReviewsList;
