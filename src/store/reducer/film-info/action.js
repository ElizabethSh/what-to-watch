import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../../action-type';

export const getFilm = createAction(
    ActionType.LOAD_FILM_INFO,
    (filmInfo) => ({
      payload: filmInfo
    })
);

export const resetFilm = createAction(
    ActionType.RESET_FILM_INFO
);
