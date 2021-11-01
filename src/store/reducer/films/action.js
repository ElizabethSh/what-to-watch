import {ActionType} from '../../action-type';

export const FilmsAction = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
      payload: films
    };
  },

  sortFilms: (genre) => {
    return {
      type: ActionType.SORT_FILMS,
      payload: genre
    };
  },

  resetSortFilms: () => {
    return {
      type: ActionType.RESET_SORT_FILMS
    };
  }
};
