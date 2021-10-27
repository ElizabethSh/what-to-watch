import {adaptFilmData} from '../services/adapter/film';
import {FilmsAction} from './reducer/films/action';

export const getFilms = () => (dispatch, _getState, api) => {
  return api.get(`/films`)
    .then(({data}) => data.map((it) => adaptFilmData(it)))
    .then((data) => dispatch(FilmsAction.loadFilms(data)));
};
