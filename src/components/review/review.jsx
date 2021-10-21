import React from 'react';
import PropTypes from 'prop-types';
import {reviewProp} from '../../common/prop-types/review-prop';
import {formatNumber} from '../../common/utils';

const Review = ({review}) => {
  const {comment, user, rating} = review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
        </footer>
      </blockquote>

      <div className="review__rating">{formatNumber(rating)}</div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape(reviewProp).isRequired
};

export default Review;
