import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../../action-type';

export const loadFilms = createAction(
    ActionType.LOAD_FILMS,
    (films) => ({
      payload: films
    })
);

export const sortFilms = createAction(
    ActionType.SORT_FILMS,
    (genre) => ({
      payload: genre
    })
);

export const resetSortFilms = createAction(
    ActionType.RESET_SORT_FILMS
);
