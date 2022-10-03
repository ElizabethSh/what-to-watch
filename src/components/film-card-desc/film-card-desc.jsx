import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../common/const';
import {changeFavoriteStatus, fetchFilmInfo, fetchPromoFilm} from '../../store/api-actions';
import {NameSpace} from '../../store/reducer/rootReducer';
import {filmProp} from '../../common/prop-types/film-props';

const FilmCardDesc = ({film, type}) => {
  const {genre, released, name, id, isFavorite} = film;

  const [isFilmFavorite, setIsFavorite] = useState(!isFavorite);
  const [isDisabled, setIsDisabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const {authorizationStatus} = useSelector((state) => state.USER);

  const updateFilm = () => {
    if (type === NameSpace.FILM_INFO) {
      dispatch(fetchFilmInfo(id));
    } else if (type === NameSpace.PROMO_FILM) {
      dispatch(fetchPromoFilm());
    }
  };

  const myListClickHandler = () => {
    setIsDisabled(true);
    if (authorizationStatus === AuthStatus.NO_AUTH) {
      history.push(AppRoute.LOGIN);
    }

    setIsFavorite((prevState) => !prevState);

    const filmData = {
      filmID: id,
      status: +isFilmFavorite
    };
    dispatch(changeFavoriteStatus(filmData))
      .then(() => updateFilm())
      .then(() => setIsDisabled(false));
  };

  const playButtonHandler = () => {
    history.push(`${AppRoute.PLAYER}/:${film.id}`);
  };

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>

      <div className="movie-card__buttons">
        <button
          className="btn btn--play movie-card__button"
          type="button"
          onClick={playButtonHandler}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </button>
        <button
          className="btn btn--list movie-card__button"
          type="button"
          disabled={isDisabled}
          onClick={myListClickHandler}
        >
          {
            isFavorite
              ? (<svg width="19" height="3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="#EEE5B5" strokeWidth="2" d="M14.5 1.5h-13"/>
              </svg>)
              : (<svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>)

          }
          <span>My list</span>
        </button>
        {
          type === NameSpace.FILM_INFO &&
          authorizationStatus === AuthStatus.AUTH &&
          <Link
            to={`${AppRoute.FILMS}/:${id}${AppRoute.REVIEW}`}
            className="btn movie-card__button"
          >Add review</Link>
        }
      </div>
    </div>
  );
};

FilmCardDesc.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
  type: PropTypes.string,
};

export default FilmCardDesc;
