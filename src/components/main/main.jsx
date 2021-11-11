import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FilmList from '../film-list/film-list';
import Sort from '../sort/sort';
import Loader from '../loader/loader';
import ShowMoreButton from '../show-more-button/show-more-button';
import UserBlock from '../user-block/user-block';
import {getUniqueValues} from '../../common/utils';
import {DEFAULT_GENRE} from '../../common/const';
import {fetchPromoFilm} from '../../store/api-actions';

const CARD_GAP = 8;
const MAX_SORT_ITEM = 9;

const Main = () => {
  const [maxCardCount, setMaxCardCount] = useState(8);
  const dispatch = useDispatch();
  const {films, sortedFilms} = useSelector((state) => state.FILMS);
  const {promoFilm, isPromoFilmLoaded} = useSelector((state) => state.PROMO_FILM);

  useEffect(() => {
    if (!isPromoFilmLoaded) {
      dispatch(fetchPromoFilm());
    }
  }, [isPromoFilmLoaded]);

  if (!isPromoFilmLoaded) {
    return <Loader />;
  }

  const {
    name,
    posterImage,
    genre,
    released,
    backgroundImage,
    backgroundColor
  } = promoFilm;

  const filmGenres = getUniqueValues(films);
  const sortItems = filmGenres.slice(0, MAX_SORT_ITEM);
  sortItems.unshift(DEFAULT_GENRE);

  const shownFilms = sortedFilms.slice(0, maxCardCount);

  const showMoreHandler = () => {
    setMaxCardCount(maxCardCount + CARD_GAP);
  };

  return (
    <>
      <section className="movie-card" style={{background: backgroundColor}}>
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
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

          <UserBlock />
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
            sortedFilms.length > maxCardCount
              && <ShowMoreButton
                onShowMoreClick={showMoreHandler}
              />
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

export default Main;
