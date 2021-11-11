import {createReducer} from '@reduxjs/toolkit';
import {loadReviews, resetReviews} from './action';

const initialState = {
  reviews: [],
  isReviewsLoaded: false
};

export const reviews = createReducer(initialState, (builder) => {
  builder.addCase(loadReviews, (state, action) => {
    state.reviews = action.payload;
    state.isReviewsLoaded = true;
  });

  builder.addCase(resetReviews, (state) => {
    state.isReviewsLoaded = false;
  });
});
