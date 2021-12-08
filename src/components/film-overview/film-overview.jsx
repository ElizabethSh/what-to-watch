import React from 'react';
import PropTypes from 'prop-types';
import {filmProp} from '../../common/prop-types/film-props';
import {formatRating} from '../../common/utils';
import {getFilmRatingLevel} from '../../common/film-rate';

const FilmOverview = ({film}) => {
  const {
    rating,
    scoresCount,
    description,
    director,
    starring
  } = film;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{formatRating(rating)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{getFilmRatingLevel(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)}</strong></p>
      </div>
    </>
  );
};

FilmOverview.propTypes = {
  film: PropTypes.shape(filmProp),
};

export default FilmOverview;
