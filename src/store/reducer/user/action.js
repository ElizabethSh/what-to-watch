import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../../action-type';

export const setAuthStatus = createAction(
    ActionType.SET_AUTH_STATUS,
    (status) => ({
      payload: status
    })
);

export const saveUserData = createAction(
    ActionType.LOGIN,
    (data) => ({
      payload: data
    })
);
