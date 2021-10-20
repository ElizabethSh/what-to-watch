import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import {filmProp} from '../../common/prop-types/film-props';

const FilmList = ({films}) => {
  const [activeCard, setActiveCard] = useState();

  const mouseCardHandler = (filmId) => {
    setActiveCard(filmId);
  };

  return (
    <div className="catalog__movies-list">
      {
        films.map((film) => {
          return (
            <Card
              key={film.id}
              film={film}
              onMouseEnter={mouseCardHandler}
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
