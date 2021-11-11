import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../../action-type';

export const loadFavorites = createAction(
    ActionType.LOAD_FAVORITES,
    (data) => ({
      payload: data
    })
);
