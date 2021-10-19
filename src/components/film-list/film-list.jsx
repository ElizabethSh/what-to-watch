import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import {filmProp} from '../../common/prop-types/film-props';

const FilmList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {
        films.map((film) => {
          return (
            <Card
              key={film.id}
              film={film}
            />
          );
        })
      }
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmProp)
  )
};

export default FilmList;
