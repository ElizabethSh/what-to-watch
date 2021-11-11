import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {changeGenre, resetGenre} from '../../store/reducer/genre/action';
import {DEFAULT_GENRE} from '../../common/const';
import {sortFilms, resetSortFilms} from '../../store/reducer/films/action';

const Sort = (props) => {
  const {sortItems} = props;

  const dispatch = useDispatch();
  const {activeGenre} = useSelector((state) => state.GENRE);

  return (
    <ul className="catalog__genres-list">
      {
        sortItems.map((sortItem) => {
          return (
            <li key={sortItem}
              className={`catalog__genres-item ${
                sortItem === activeGenre ? `catalog__genres-item--active` : ``
              }`}
              onClick={() => {
                if (sortItem === DEFAULT_GENRE) {
                  dispatch(resetGenre());
                  dispatch(resetSortFilms());
                } else {
                  dispatch(changeGenre(sortItem));
                  dispatch(sortFilms(sortItem));
                }
              }}
            >
              <a href="#"
                className="catalog__genres-link"
              >{sortItem}</a>
            </li>
          );
        })
      }
    </ul>
  );
};


Sort.propTypes = {
  sortItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sort;
