import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Loader from '../loader/loader';
import Review from '../review/review';
import {getReviews} from '../../store/api-actions';
import {reviewProp} from '../../common/prop-types/review-prop';
import {ReviewsAction} from '../../store/reducer/reviews/action';
import {useParams} from 'react-router';
import {toNumber} from '../../common/utils';

const COLUMS_COUNT = 2;

const ReviewsList = (props) => {
  let {id} = useParams();
  id = toNumber(id);

  const {
    filmId,
    reviews,
    isReviewsLoaded,
    loadReviews,
    resetReviews
  } = props;

  useEffect(() => {
    if (!(isReviewsLoaded && filmId !== id)) {
      loadReviews(filmId);
    }

    return () => resetReviews();
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

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews.reviews,
    isReviewsLoaded: state.reviews.isReviewsLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadReviews: (id) => dispatch(getReviews(id)),
    resetReviews: () => dispatch(ReviewsAction.resetReviews())
  };
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewProp)
  ).isRequired,
  filmId: PropTypes.number.isRequired,
  isReviewsLoaded: PropTypes.bool.isRequired,
  loadReviews: PropTypes.func.isRequired,
  resetReviews: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
