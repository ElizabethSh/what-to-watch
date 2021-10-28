import {ApiRoute} from '../common/const';
import {adaptFilmData} from '../services/adapter/film';
import {FilmInfoAction} from './reducer/film-info/action';
import {FilmsAction} from './reducer/films/action';

export const getFilms = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.FILMS)
    .then(({data}) => data.map((it) => adaptFilmData(it)))
    .then((data) => dispatch(FilmsAction.loadFilms(data)));
};

export const getFilmInfo = (id) => (dispatch, _getState, api) => {
  return api.get(`${ApiRoute.FILMS}/${id}`)
    .then(({data}) => adaptFilmData(data))
    .then((data) => dispatch(FilmInfoAction.getFilmInfo(data)));
};
