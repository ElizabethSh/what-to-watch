import {createReducer} from '@reduxjs/toolkit';
import {getFilm, resetFilm} from './action';

const initialState = {
  isFilmInfoLoaded: false,
  filmInfo: null
};

export const filmInfo = createReducer(initialState, (builder) => {
  builder.addCase(getFilm, (state, action) => {
    state.filmInfo = action.payload;
    state.isFilmInfoLoaded = true;
  });

  builder.addCase(resetFilm, (state) => {
    state.isFilmInfoLoaded = false;
  });
});
