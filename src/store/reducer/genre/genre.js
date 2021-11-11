import {createReducer} from '@reduxjs/toolkit';
import {DEFAULT_GENRE} from '../../../common/const';
import {changeGenre, resetGenre} from './action';

const initialState = {
  activeGenre: DEFAULT_GENRE,
};

export const genre = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.activeGenre = action.payload;
  });

  builder.addCase(resetGenre, (state) => {
    state.activeGenre = initialState.activeGenre;
  });
});
