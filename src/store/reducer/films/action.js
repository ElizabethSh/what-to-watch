import {ActionType} from '../../action-type';

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films
});

export const sortFilms = (genre) => ({
  type: ActionType.SORT_FILMS,
  payload: genre
});

export const resetSortFilms = () => ({
  type: ActionType.RESET_SORT_FILMS
});
