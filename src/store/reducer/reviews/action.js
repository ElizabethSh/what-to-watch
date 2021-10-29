import {ActionType} from '../../action-type';

export const ReviewsAction = {
  loadReviews: (data) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: data
    };
  },
  resetReviews: () => {
    return {
      type: ActionType.RESET_REVIEWS
    };
  }
};
