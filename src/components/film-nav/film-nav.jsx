import React from 'react';
import PropTypes from 'prop-types';
import {Tab} from '../../common/const';
import {capitalizeString} from '../../common/utils';

const Tabs = Object.values(Tab);

const FilmNav = (props) => {
  const {activeTab, onTabClick} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {
          Tabs.map((tab) => {
            return (
              <li key={tab}
                className={`movie-nav__item
                  ${tab === activeTab ? `movie-nav__item--active` : ``}
                `}
              >
                <a href="#"
                  className="movie-nav__link"
                  data-tab={tab}
                  onClick={(evt) => onTabClick(evt)}
                >{capitalizeString(tab)}</a>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
};

FilmNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default FilmNav;
