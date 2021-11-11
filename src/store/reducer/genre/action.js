import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../../action-type';

export const changeGenre = createAction(
    ActionType.CHANGE_GENRE,
    (genre) => ({
      payload: genre
    })
);

export const resetGenre = createAction(
    ActionType.RESET_GENRE
);
