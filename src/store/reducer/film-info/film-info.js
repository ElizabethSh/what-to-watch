import {ActionType} from '../../action-type';

const initialState = {
  isFilmInfoLoaded: false,
  filmInfo: null
};

export const filmInfo = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILM_INFO:
      return {
        ...state,
        isFilmInfoLoaded: true,
        filmInfo: action.payload
      };

    case ActionType.RESET_FILM_INFO:
      return {
        ...state,
        isFilmInfoLoaded: false
      };

    default:
      return state;
  }
};
