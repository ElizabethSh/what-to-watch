import React from 'react';
import PropTypes from 'prop-types';
import {reviewProp} from '../../common/prop-types/review-prop';
import {formatRating} from '../../common/utils';

const Review = (props) => {
  const {review, backgroundColor} = props;
  const {comment, user, rating} = review;

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
          <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
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
