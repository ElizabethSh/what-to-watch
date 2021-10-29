import {combineReducers} from 'redux';
import {genre} from './genre/genre';
import {films} from './films/films';
import {filmInfo} from './film-info/film-info';
import {promoFilm} from './promo-film/promo-film';
import {reviews} from './reviews/reviews';

export const rootReducer = combineReducers({
  genre,
  films,
  filmInfo,
  promoFilm,
  reviews,
});
