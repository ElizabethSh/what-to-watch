import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import FilmNav from '../film-nav/film-nav';
import FilmList from '../film-list/film-list';
import FilmDescription from '../film-description/film-description';
import Footer from '../footer/footer';
import Loader from '../loader/loader';
import {fetchFilmInfo} from '../../store/api-actions';
import {Tab} from '../../common/const';
import {resetFilm} from '../../store/reducer/film-info/action';
import {shuffle, toNumber} from '../../common/utils';
import {useSelector, useDispatch} from 'react-redux';
import FilmCardDesc from '../film-card-desc/film-card-desc';
import {NameSpace} from '../../store/reducer/rootReducer';

const SIMILAR_FILMS_COUNT = 4;

const Film = () => {
  const [activeTab, setActiveTab] = useState(Tab.OVERVIEW);
  let {id} = useParams();
  id = toNumber(id);

  const dispatch = useDispatch();
  const {films} = useSelector((state) => state.FILMS);
  const {filmInfo, isFilmInfoLoaded} = useSelector((state) => state.FILM_INFO);

  useEffect(() => {
    if (!(isFilmInfoLoaded && id === filmInfo.id)) {
      dispatch(fetchFilmInfo(id));
    }
    return () => {
      dispatch(resetFilm());
      setActiveTab(Tab.OVERVIEW);
    };
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
  } = filmInfo;

  const similarFilms = films.filter(
      (film) => film.id !== id && film.genre === genre
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
            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <FilmCardDesc
              film={filmInfo}
              type={NameSpace.FILM_INFO}
            />
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
            films={shuffle(similarFilms).slice(0, SIMILAR_FILMS_COUNT)}
          />
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Film;
