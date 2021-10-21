import React from 'react';
import PropTypes from 'prop-types';
import {filmProp} from '../../common/prop-types/film-props';
import {formatNumber} from '../../common/utils';

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
        <div className="movie-rating__score">{formatNumber(rating)}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>

        <p>Gustave prides himself on providing first-className service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
      </div>
    </>
  );
};

FilmOverview.propTypes = {
  film: PropTypes.shape(filmProp),
};

export default FilmOverview;
