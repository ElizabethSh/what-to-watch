import React from 'react';
import PropTypes from 'prop-types';
import {reviewProp} from '../../common/prop-types/review-prop';
import {formatDate, formatDateTime, formatRating} from '../../common/utils';

const Review = (props) => {
  const {review, backgroundColor} = props;
  const {comment, user, rating, date} = review;

  return (
    <div className="review"
      style={{
        borderColor: backgroundColor,
        filter: `brightness(0.9)`
      }}
    >
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={formatDateTime(date)}>{formatDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{formatRating(rating)}</div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape(reviewProp).isRequired,
  backgroundColor: PropTypes.string,
};

export default Review;
