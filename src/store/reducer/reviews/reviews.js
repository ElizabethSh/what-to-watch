import {ActionType} from '../../action-type';

const initialState = {
  reviews: [],
  isReviewsLoaded: false
};

export const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isReviewsLoaded: true
      };

    case ActionType.RESET_REVIEWS:
      return {
        ...state,
        isReviewsLoaded: false
      };

    default:
      return state;
  }
};
