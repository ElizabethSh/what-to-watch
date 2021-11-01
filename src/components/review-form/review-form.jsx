import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {createNumbersArray} from '../../common/utils';

const RATINGS = createNumbersArray(1, 10);

const ReviewForm = (props) => {
  const {backgroundColor} = props;

  const [reviewData, setReviewData] = useState({
    rating: ``,
    reviewText: ``
  });

  const changeHandler = (evt) => {
    const {name, value} = evt.target;

    setReviewData({
      [name]: value
    });
  };

  return (
    <div className="add-review">
      <form action="#"
        className="add-review__form"
      >
        <div className="rating">
          <div className="rating__stars">
            {
              RATINGS.map((rating) => {
                return (
                  <Fragment key={rating.toString()}>
                    <input
                      className="rating__input"
                      id={`star-${rating}`}
                      type="radio"
                      name="rating"
                      value={rating}
                      onChange={(evt) => changeHandler(evt)}
                    />
                    <label
                      className="rating__label"
                      htmlFor={`star-${rating}`}
                    >Rating {rating}</label>
                  </Fragment>
                );
              })
            }
          </div>
        </div>

        <div className="add-review__text"
          style={{
            backgroundColor,
            filter: `brightness(0.9)`,
          }}
        >
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            minLength="50"
            maxLength="400"
            placeholder="Review text"
            value={reviewData.reviewText}
            onChange={(evt) => changeHandler(evt)}
          ></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

ReviewForm.propTypes = {
  backgroundColor: PropTypes.string.isRequired
};

export default ReviewForm;
