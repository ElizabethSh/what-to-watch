import {createReducer} from '@reduxjs/toolkit';
import {sortByGenre} from '../../../common/sort';
import {loadFilms, resetSortFilms, sortFilms} from './action';

const initialState = {
  films: [],
  isFilmsLoaded: false,
  sortedFilms: []
};

export const films = createReducer(initialState, (builder) => {
  builder.addCase(loadFilms, (state, action) => {
    state.films = action.payload;
    state.sortedFilms = action.payload;
    state.isFilmsLoaded = true;
  });

  builder.addCase(sortFilms, (state, action) => {
    state.sortedFilms = sortByGenre(state.films, action.payload);
  });

  builder.addCase(resetSortFilms, (state) => {
    state.sortedFilms = state.films;
  });
});
