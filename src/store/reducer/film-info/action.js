import {ActionType} from '../../action-type';

export const getFilm = (filmInfo) => ({
  type: ActionType.LOAD_FILM_INFO,
  payload: filmInfo
});

export const resetFilm = () => ({
  type: ActionType.RESET_FILM_INFO
});
