import {ApiRoute, AuthStatus} from '../common/const';
import {adaptFilmData} from '../services/adapter/film';
import {adaptUserData} from '../services/adapter/user';
import {getFilm} from './reducer/film-info/action';
import {loadFilms} from './reducer/films/action';
import {loadPromoFilm} from './reducer/promo-film/action';
import {loadReviews} from './reducer/reviews/action';
import {setAuthStatus, saveUserData} from './reducer/user/action';
import {loadFavorites} from './reducer/favorites/action';

export const fetchFilms = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.FILMS)
    .then(({data}) => data.map((it) => adaptFilmData(it)))
    .then((data) => dispatch(loadFilms(data)));
};

export const fetchFilmInfo = (id) => (dispatch, _getState, api) => {
  return api.get(`${ApiRoute.FILMS}/${id}`)
    .then(({data}) => adaptFilmData(data))
    .then((data) => dispatch(getFilm(data)));
};

export const fetchPromoFilm = () => (dispatch, _getState, api) => {
  return api.get(`${ApiRoute.PROMO_FILM}`)
    .then(({data}) => adaptFilmData(data))
    .then((data) => dispatch(loadPromoFilm(data)));
};

export const fetchReviews = (id) => (dispatch, _getState, api) => {
  return api.get(`${ApiRoute.REVIEWS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data)));
};

export const logout = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.LOGOUT)
    .then(() => dispatch(setAuthStatus(AuthStatus.NO_AUTH)));
};

export const login = (formdata) => (dispatch, _getState, api) => {
  return api.post(ApiRoute.LOGIN, formdata)
    .then(({data}) => adaptUserData(data))
    .then((data) => dispatch(saveUserData(data)))
    .then(() => dispatch(setAuthStatus(AuthStatus.AUTH)))
    .catch(() => {});
};

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.LOGIN)
    .then(({data}) => adaptUserData(data))
    .then((data) => dispatch(saveUserData(data)))
    .then(() => dispatch(setAuthStatus(AuthStatus.AUTH)))
    .catch(() => dispatch(setAuthStatus(AuthStatus.NO_AUTH)));
};

export const fetchFavorites = () => (dispatch, _getState, api) => {
  return api.get(ApiRoute.FAVORITES)
    .then(({data}) => data.map((it) => adaptFilmData(it)))
    .then((data) => dispatch(loadFavorites(data)));
};

export const changeFavoriteStatus = (filmData) => (_dispatch, _getState, api) => {
  return api.post(`${ApiRoute.FAVORITES}/${filmData.filmID}/${filmData.status}`, filmData);
};

export const sendComment = (id, comment) => (_dispatch, _getState, api) => {
  return api.post(`${ApiRoute.REVIEWS}/${id}`, comment);
};
