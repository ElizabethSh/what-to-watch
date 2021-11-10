import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeGenre, resetGenre} from '../../store/reducer/genre/action';
import {DEFAULT_GENRE} from '../../common/const';
import {sortFilms, resetSortFilms} from '../../store/reducer/films/action';
import {getActiveGenre} from '../../store/reducer/genre/selectors';

const Sort = ({
  sortItems,
  activeGenre,
  changeActiveGenre,
  resetSortGenre,
  sortByGenre,
  resetSort,
}) => {
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
                  resetSortGenre();
                  resetSort();
                } else {
                  changeActiveGenre(sortItem);
                  sortByGenre(sortItem);
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

const mapStateToProps = (state) => {
  return {
    activeGenre: getActiveGenre(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveGenre: (genre) => dispatch(changeGenre(genre)),
    sortByGenre: (genre) => dispatch(sortFilms(genre)),
    resetSortGenre: () => dispatch(resetGenre()),
    resetSort: () => dispatch(resetSortFilms())
  };
};

Sort.propTypes = {
  sortItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeActiveGenre: PropTypes.func.isRequired,
  resetSortGenre: PropTypes.func.isRequired,
  sortByGenre: PropTypes.func.isRequired,
  resetSort: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
