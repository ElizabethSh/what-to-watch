import {ActionType} from '../../action-type';

export const loadPromoFilm = (promoFilm) => ({
  type: ActionType.LOAD_PROMO_FILM,
  payload: promoFilm
});
