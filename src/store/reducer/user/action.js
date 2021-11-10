import {ActionType} from '../../action-type';

export const setAuthStatus = (status) => ({
  type: ActionType.SET_AUTH_STATUS,
  payload: status
});

export const saveUserData = (data) => ({
  type: ActionType.LOGIN,
  payload: data
});
