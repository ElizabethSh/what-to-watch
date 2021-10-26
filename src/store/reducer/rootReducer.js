import {combineReducers} from 'redux';
import {genre} from './genre/genre';
import {films} from './films/films';

export const rootReducer = combineReducers({
  genre,
  films
});
