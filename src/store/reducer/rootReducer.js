import {combineReducers} from 'redux';
import {genre} from './genre/genre';
import {films} from './films/films';
import {filmInfo} from './film-info/film-info';
import {promoFilm} from './promo-film/promo-film';
import {reviews} from './reviews/reviews';
import {favorites} from './favorites/favorites';
import {user} from './user/user';

export const NameSpace = {
  GENRE: `GENRE`,
  FILMS: `FILMS`,
  FILM_INFO: `FILM_INFO`,
  PROMO_FILM: `PROMO_FILM`,
  REVIEWS: `REVIEWS`,
  FAVORITES: `FAVORITES`,
  USER: `USER`
};

export const rootReducer = combineReducers({
  [NameSpace.GENRE]: genre,
  [NameSpace.FILMS]: films,
  [NameSpace.FILM_INFO]: filmInfo,
  [NameSpace.PROMO_FILM]: promoFilm,
  [NameSpace.REVIEWS]: reviews,
  [NameSpace.FAVORITES]: favorites,
  [NameSpace.USER]: user,
});
