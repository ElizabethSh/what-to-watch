import {createReducer} from '@reduxjs/toolkit';
import {loadPromoFilm} from './action';

const initialState = {
  promoFilm: null,
  isPromoFilmLoaded: false
};

export const promoFilm = createReducer(initialState, (builder) => {
  builder.addCase(loadPromoFilm, (state, action) => {
    state.promoFilm = action.payload;
    state.isPromoFilmLoaded = true;
  });
});
