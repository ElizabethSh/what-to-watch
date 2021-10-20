import React from 'react';
import PropTypes from 'prop-types';

const Sort = ({filmGenres}) => {
  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>
      {
        filmGenres.map((filmGenre) => {
          return (
            <li className="catalog__genres-item" key={filmGenre}>
              <a href="#"
                className="catalog__genres-link"
              >{filmGenre}</a>
            </li>
          );
        })
      }
    </ul>
  );
};

Sort.propTypes = {
  filmGenres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Sort;
