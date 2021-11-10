import {ActionType} from '../../action-type';

export const loadReviews = (data) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: data
});

export const resetReviews = () => ({
  type: ActionType.RESET_REVIEWS
});
