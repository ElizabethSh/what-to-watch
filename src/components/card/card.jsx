import React from 'react';
import PropTypes from 'prop-types';
import {filmProp} from '../../common/prop-types/film-props';
import {Link} from 'react-router-dom';

const Card = ({film}) => {
  const {id, name, previewImage} = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src={previewImage}
          alt={name}
          width="280" height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link"
          to={`/films/:${id}`}
        >{name}</Link>
      </h3>
    </article>
  );
};

Card.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
};

export default Card;
