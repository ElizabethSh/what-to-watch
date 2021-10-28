import {combineReducers} from 'redux';
import {genre} from './genre/genre';
import {films} from './films/films';
import {filmInfo} from './film-info/film-info';

export const rootReducer = combineReducers({
  genre,
  films,
  filmInfo,
});
