import {ActionType} from '../../action-type';

export const UserAction = {
  setAuthStatus: (status) => {
    return {
      type: ActionType.SET_AUTH_STATUS,
      payload: status
    };
  },

  saveUserData: (data) => {
    return {
      type: ActionType.LOGIN,
      payload: data
    };
  }
};
