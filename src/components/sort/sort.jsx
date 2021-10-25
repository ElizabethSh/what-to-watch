import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {GenreAction} from '../../store/action';
import {DEFAULT_GENRE} from '../../common/const';

const Sort = ({
  sortItems,
  activeGenre,
  changeActiveGenre,
  resetGenre,
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
                } else {
                  changeActiveGenre(sortItem);
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
    activeGenre: state.activeGenre,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeActiveGenre: (genre) => dispatch(GenreAction.changeGenre(genre)),
    resetGenre: () => dispatch(GenreAction.resetGenre()),
  };
};

Sort.propTypes = {
  sortItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGenre: PropTypes.string.isRequired,
  changeActiveGenre: PropTypes.func.isRequired,
  resetGenre: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
