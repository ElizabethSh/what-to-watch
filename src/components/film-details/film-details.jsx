import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {filmProp} from '../../common/prop-types/film-props';
import {formatToHoursMinutes} from '../../common/utils';

const FilmDetails = ({film}) => {
  const {
    director,
    starring,
    genre,
    released,
    runTime
  } = film;

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {
              starring.map((actor, index) => {
                return (
                  <Fragment key={actor}>
                    {actor}{
                      `${(index === starring.length - 1)
                        ? ``
                        : `,`}`
                    }  <br/>
                  </Fragment>
                );
              })
            }
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{formatToHoursMinutes(runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
};

FilmDetails.propTypes = {
  film: PropTypes.shape(filmProp),
};

export default FilmDetails;
