import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../../action-type';

export const loadPromoFilm = createAction(
    ActionType.LOAD_PROMO_FILM,
    (promoFilm) => ({
      payload: promoFilm
    })
);
