import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {GenreAction} from '../../store/reducer/genre/action';
import {DEFAULT_GENRE} from '../../common/const';
import {FilmsAction} from '../../store/reducer/films/action';

const Sort = ({
  sortItems,
  activeGenre,
  changeActiveGenre,
  resetGenre,
  sortFilms,
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
                  resetGenre();
                  resetSort();
                } else {
                  changeActiveGenre(sortItem);
                  sortFilms(sortItem);
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
    activeGenre: state.genre.activeGenre,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveGenre: (genre) => dispatch(GenreAction.changeGenre(genre)),
    sortFilms: (genre) => dispatch(FilmsAction.sortFilms(genre)),
    resetGenre: () => dispatch(GenreAction.resetGenre()),
    resetSort: () => dispatch(FilmsAction.resetSortFilms())
  };
};

Sort.propTypes = {
  sortItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeActiveGenre: PropTypes.func.isRequired,
  resetGenre: PropTypes.func.isRequired,
  sortFilms: PropTypes.func.isRequired,
  resetSort: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
