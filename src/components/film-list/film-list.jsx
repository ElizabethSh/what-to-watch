import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import {filmProp} from '../../common/prop-types/film-props';

import './film-list.css';

const FilmList = ({films}) => {
  const [activeCard, setActiveCard] = useState();

  const mouseEnterCardHandler = (filmId) => {
    setActiveCard(filmId);
  };

  const mouseLeaveCardHandler = (ref) => {
    setActiveCard(null);
    ref.current.currentTime = 0;
  };

  let content;
  if (films.length) {
    content = (
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
      }
      ));
  } else {
    content = <div className='catalog__empty-list'>The film list is empty</div>;
  }

  return (
    <div className="catalog__movies-list">
      {content}
    </div>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmProp)
  )
};

export default FilmList;
