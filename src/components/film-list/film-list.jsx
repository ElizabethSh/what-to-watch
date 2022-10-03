import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import {filmProp} from '../../common/prop-types/film-props';

const FilmList = ({films}) => {
  const [activeCard, setActiveCard] = useState();

  const mouseEnterCardHandler = (filmId) => {
    setActiveCard(filmId);
  };

  const mouseLeaveCardHandler = (ref) => {
    setActiveCard(null);
    ref.current.currentTime = 0;
  };

  return (
    <div className="catalog__movies-list">
      {
        films.map((film) => {
          return (
            <Card
              key={film.id}
              film={film}
              onMouseEnter={mouseEnterCardHandler}
              onMouseLeave={mouseLeaveCardHandler}
              isPlaying={activeCard === film.id}
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
