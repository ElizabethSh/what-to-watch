import {ActionType} from '../../action-type';

export const FilmInfoAction = {
  getFilmInfo: (filmInfo) => {
    return {
      type: ActionType.LOAD_FILM_INFO,
      payload: filmInfo
    };
  }
};
