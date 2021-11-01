import {ApiRoute, AuthorizationStatus} from '../common/const';
import {adaptFilmData} from '../services/adapter/film';
import {adaptUserData} from '../services/adapter/user';
import {FilmInfoAction} from './reducer/film-info/action';
import {FilmsAction} from './reducer/films/action';
import {PromoFilmAction} from './reducer/promo-film/action';
import {ReviewsAction} from './reducer/reviews/action';
import {UserAction} from './reducer/user/action';

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

export const logout = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.LOGOUT)
    .then(() => dispatch(UserAction.setAuthStatus(AuthorizationStatus.NO_AUTH)));
};

export const login = (formdata) => (dispatch, _getState, api) => {
  api.post(ApiRoute.LOGIN, formdata)
    .then(({data}) => adaptUserData(data))
    .then((data) => dispatch(UserAction.saveUserData(data)))
    .then(() => dispatch(UserAction.setAuthStatus(AuthorizationStatus.AUTH)));
};

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.LOGIN)
    .then(({data}) => adaptUserData(data))
    .then((data) => dispatch(UserAction.saveUserData(data)))
    .then(() => dispatch(UserAction.setAuthStatus(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(UserAction.setAuthStatus(AuthorizationStatus.NO_AUTH)));
};
