import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {sendComment} from '../../store/api-actions';
import {createNumbersArray} from '../../common/utils';
import {AppRoute} from '../../common/const';

const RATINGS = createNumbersArray(1, 10);
const MIN_SYMBOL_COUNT = 50;
const MAX_SYMBOL_COUNT = 400;

const ReviewForm = (props) => {
  const {backgroundColor, filmId} = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const [reviewData, setReviewData] = useState({
    rating: ``,
    comment: ``
  });
  const [isDisabled, setIsDisabled] = useState(false);

  const changeHandler = (evt) => {
    const {name, value} = evt.target;

    setReviewData({
      ...reviewData,
      [name]: value
    });
  };

  const formSubmitHandler = (evt) => {
    evt.preventDefault();
    setIsDisabled(true);
    dispatch(sendComment(filmId, reviewData))
      .then(() => history.push(`${AppRoute.FILMS}/${filmId}`))
      .catch(() => setIsDisabled(false));
  };

  return (
    <div className="add-review">
      <form action="#"
        className="add-review__form"
        onSubmit={formSubmitHandler}
      >
        <div className="rating">
          <div className="rating__stars">
            {
              RATINGS.map((rating) => {
                return (
                  <Fragment key={`${rating.toString()}-${isDisabled}`}>
                    <input
                      className="rating__input"
                      id={`star-${rating}`}
                      type="radio"
                      name="rating"
                      value={rating}
                      onChange={(evt) => changeHandler(evt)}
                      disabled={isDisabled}
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
            key={isDisabled}
            name="comment"
            id="comment"
            minLength={MIN_SYMBOL_COUNT}
            maxLength={MAX_SYMBOL_COUNT}
            placeholder="Review text"
            value={reviewData.reviewText}
            onChange={(evt) => changeHandler(evt)}
            disabled={isDisabled}
          ></textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={
                !(
                  (reviewData.comment.length >= MIN_SYMBOL_COUNT)
                  && reviewData.rating
                )
              }
            >Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

ReviewForm.propTypes = {
  filmId: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired
};

export default ReviewForm;
