import {ActionType} from '../../action-type';

const initialState = {
  promoFilm: null,
  isPromoFilmLoaded: false
};

export const promoFilm = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_PROMO_FILM :
      return {
        ...state,
        promoFilm: action.payload,
        isPromoFilmLoaded: true
      };

    default:
      return state;
  }
};
