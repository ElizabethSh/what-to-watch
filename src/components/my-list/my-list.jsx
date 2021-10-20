import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import FilmList from '../film-list/film-list';
import {filmProp} from '../../common/prop-types/film-props';

const MyList = ({films}) => {
  const favorites = films.filter((film) => film.isFavorite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList
          films={favorites}
        />

      </section>

      <Footer />
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmProp)
  )
};

export default MyList;
