import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router';
import FilmOverview from '../film-overview/film-overview';
import FilmDetails from '../film-details/film-details';
import ReviewsList from '../reviews-list/reviews-list';
import {Tab} from '../../common/const';
import {filmProp} from '../../common/prop-types/film-props';

const FilmDescription = (props) => {
  const {activeTab, film} = props;
  const {id, backgroundColor} = film;

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
          filmId={id}
          backgroundColor={backgroundColor}
        />
      );
  }

  return <Redirect to="/" />;
};

FilmDescription.propTypes = {
  activeTab: PropTypes.string.isRequired,
  film: PropTypes.shape(filmProp),
};

export default FilmDescription;
