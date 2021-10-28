import {ActionType} from '../../action-type';

export const PromoFilmAction = {
  loadPromoFilm: (promoFilm) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: promoFilm
    };
  }
};
