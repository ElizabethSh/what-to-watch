import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../../action-type';

export const loadReviews = createAction(
    ActionType.LOAD_REVIEWS,
    (reviews) => ({
      payload: reviews
    })
);

export const resetReviews = createAction(
    ActionType.RESET_REVIEWS
);
