import React from 'react';
import PropTypes from 'prop-types';
import {filmProp} from '../../common/prop-types/film-props';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../common/const';

const Card = ({film, onMouseEnter}) => {
  const {id, name, previewImage} = film;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(id)}
    >
      <Link className="small-movie-card__link"
        to={`${AppRoute.FILMS}/:${id}`}>
        <div className="small-movie-card__image">
          <img
            src={previewImage}
            alt={name}
            width="280" height="175"
          />
        </div>
        <h3 className="small-movie-card__title">
          {name}
        </h3>
      </Link>
    </article>
  );
};

Card.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default Card;
