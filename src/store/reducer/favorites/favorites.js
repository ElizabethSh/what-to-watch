import {createReducer} from '@reduxjs/toolkit';
import {loadFavorites} from './action';

const initialState = {
  favorites: [],
  isFavoritesLoaded: false,
};

export const favorites = createReducer(initialState, (builder) => {
  builder.addCase(loadFavorites, (state, action) => {
    state.favorites = action.payload;
    state.isFavoritesLoaded = true;
  });
});

