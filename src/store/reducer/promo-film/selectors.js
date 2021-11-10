import {NameSpace} from '../rootReducer';

export const getPromoFilm = (state) => state[NameSpace.PROMO_FILM].promoFilm;
export const getPromoFilmLoadStatus = (state) => state[NameSpace.PROMO_FILM].isPromoFilmLoaded;
