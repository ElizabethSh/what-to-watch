import {ApiRoute} from '../common/const';
import {adaptFilmData} from '../services/adapter/film';
import {FilmInfoAction} from './reducer/film-info/action';
import {FilmsAction} from './reducer/films/action';
import {PromoFilmAction} from './reducer/promo-film/action';
import {ReviewsAction} from './reducer/reviews/action';

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

export const getPromoFilm = () => (dispatch, _getState, api) => {
  return api.get(`${ApiRoute.PROMO_FILM}`)
    .then(({data}) => adaptFilmData(data))
    .then((data) => dispatch(PromoFilmAction.loadPromoFilm(data)));
};

export const getReviews = (id) => (dispatch, _getState, api) => {
  return api.get(`${ApiRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(ReviewsAction.loadReviews(data)));
};
