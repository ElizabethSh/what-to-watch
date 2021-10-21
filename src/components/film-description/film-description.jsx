import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import ReviewsList from '../reviews-list/reviews-list';
import {Tab} from '../../common/const';
import {filmProp} from '../../common/prop-types/film-props';
import {reviewProp} from '../../common/prop-types/review-prop';

const FilmDescription = ({activeTab, film, reviews}) => {
  const filmReviews = reviews.filter(
      (review) => review.filmId === film.id
  );

  switch (activeTab) {
    case Tab.OVERVIEW:
      return (
        <FilmOverview
          film={film}
        />
      );
    case Tab.DETAILS:
      return (
        <FilmDetails
          film={film}
        />
      );
    case Tab.REVIEWS:
      return (
        <ReviewsList
          filmReviews={filmReviews}
        />
      );
  }

  return <Redirect to="/" />;
};

FilmDescription.propTypes = {
  activeTab: PropTypes.string.isRequired,
  film: PropTypes.shape(filmProp),
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewProp)
  ).isRequired,
};

export default FilmDescription;
