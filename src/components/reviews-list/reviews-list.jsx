import React from 'react';
import PropTypes from 'prop-types';
import {reviewProp} from '../../common/prop-types/review-prop';
import Review from '../review/review';

const ReviewsList = ({filmReviews}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {
          filmReviews.slice(0, filmReviews.length / 2).map((review) => {
            return (
              <Review key={review.id}
                review={review}
              />
            );
          })
        }
      </div>
      <div className="movie-card__reviews-col">
        {
          filmReviews.slice(filmReviews.length / 2 + 1).map((review) => {
            return (
              <Review key={review.id}
                review={review}
              />
            );
          })
        }
      </div>
    </div>
  );
};

ReviewsList.propTypes = {
  filmReviews: PropTypes.arrayOf(
      PropTypes.shape(reviewProp)
  ).isRequired,
};

export default ReviewsList;
