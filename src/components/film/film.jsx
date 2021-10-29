import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import Logo from '../logo/logo';
import FilmNav from '../film-nav/film-nav';
import FilmList from '../film-list/film-list';
import Footer from '../footer/footer';
import Loader from '../loader/loader';
import FilmDescription from '../film-description/film-description';
import {getFilmInfo} from '../../store/api-actions';
import {AppRoute, Tab} from '../../common/const';
import {filmProp} from '../../common/prop-types/film-props';
import {reviewProp} from '../../common/prop-types/review-prop';
import {FilmInfoAction} from '../../store/reducer/film-info/action';

const Film = (
    {
      films,
      filmInfo,
      reviews,
      isFilmInfoLoaded,
      loadFilmInfo,
      resetFilmInfo
    }
) => {
  const [activeTab, setActiveTab] = useState(Tab.OVERVIEW);
  let {id} = useParams();
  id = id.replace(`:`, ``);

  useEffect(() => {
    if (!(isFilmInfoLoaded && Number(id) === filmInfo.id)) {
      loadFilmInfo(id);
    }

    return () => resetFilmInfo();
  }, [id]);

  if (!(isFilmInfoLoaded && filmInfo)) {
    return <Loader />;
  }

  const {
    backgroundImage,
    backgroundColor,
    name,
    genre,
    posterImage,
    released
  } = filmInfo;

  const similarFilms = films.filter(
      (film) => film.id !== Number(id) && film.genre === genre
  );

  const tabClickHandler = (evt) => {
    evt.preventDefault();

    setActiveTab(evt.target.dataset.tab);
  };

  return (
    <>
      <section
        className="movie-card movie-card--full"
        style={{backgroundColor}}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo />

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
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
                <Link
                  to={`${AppRoute.FILMS}/:${id}${AppRoute.REVIEW}`}
                  className="btn movie-card__button"
                >Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">

              <FilmNav
                activeTab={activeTab}
                onTabClick={tabClickHandler}
              />

              <FilmDescription
                film={filmInfo}
                reviews={reviews}
                activeTab={activeTab}
              />

            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList
            films={similarFilms.slice(0, 4)}
          />
        </section>

        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    films: state.films.films,
    filmInfo: state.filmInfo.filmInfo,
    isFilmInfoLoaded: state.filmInfo.isFilmInfoLoaded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadFilmInfo: (filmId) => dispatch(getFilmInfo(filmId)),
    resetFilmInfo: () => dispatch(FilmInfoAction.resetFilmInfo())
  };
};

Film.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmProp)
  ).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewProp)
  ).isRequired,
  filmInfo: PropTypes.shape(filmProp),
  isFilmInfoLoaded: PropTypes.bool.isRequired,
  loadFilmInfo: PropTypes.func.isRequired,
  resetFilmInfo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Film);
