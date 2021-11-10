import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Loader from '../loader/loader';
import Review from '../review/review';
import {fetchReviews} from '../../store/api-actions';
import {reviewProp} from '../../common/prop-types/review-prop';
import {resetReviews} from '../../store/reducer/reviews/action';
import {useParams} from 'react-router';
import {toNumber} from '../../common/utils';
import {getReviews, getReviewsLoadStatus} from '../../store/reducer/reviews/selectors';

const COLUMS_COUNT = 2;

const ReviewsList = (props) => {
  let {id} = useParams();
  id = toNumber(id);

  const {
    filmId,
    backgroundColor,
    reviews,
    isReviewsLoaded,
    loadReviews,
    resetFilmReviews
  } = props;

  useEffect(() => {
    if (!(isReviewsLoaded && filmId !== id)) {
      loadReviews(filmId);
    }

    return () => resetFilmReviews();
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

const mapStateToProps = (state) => {
  return {
    reviews: getReviews(state),
    isReviewsLoaded: getReviewsLoadStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadReviews: (id) => dispatch(fetchReviews(id)),
    resetFilmReviews: () => dispatch(resetReviews())
  };
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewProp)
  ).isRequired,
  backgroundColor: PropTypes.string.isRequired,
  filmId: PropTypes.number.isRequired,
  isReviewsLoaded: PropTypes.bool.isRequired,
  loadReviews: PropTypes.func.isRequired,
  resetFilmReviews: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
