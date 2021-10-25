import React from 'react';
import PropTypes from 'prop-types';
import FilmList from '../film-list/film-list';
import Sort from '../sort/sort';
import {filmProp} from '../../common/prop-types/film-props';
import {sortItems} from '../../common/sort';
import {connect} from 'react-redux';
import {GenreAction} from '../../store/action';

const MAX_CARD_COUNT = 8;

const Main = ({promoFilm, sortedFilms}) => {
  const {name, posterImage, genre, released} = promoFilm;
  const shownFilms = sortedFilms.slice(0, 8);

  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Sort
            sortItems = {sortItems}
          />
          <FilmList
            films={shownFilms}
          />
          {
            sortedFilms.length > MAX_CARD_COUNT && (
              <div className="catalog__more">
                <button className="catalog__button" type="button">Show more</button>
              </div>
            )
          }
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    sortedFilms: state.sortedFilms,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortFilms: () => dispatch(GenreAction.sortFilms())
  };
};

Main.propTypes = {
  promoFilm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }),
  sortedFilms: PropTypes.arrayOf(
      PropTypes.shape(filmProp)
  ).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
