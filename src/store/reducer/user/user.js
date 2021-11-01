import {AuthorizationStatus} from '../../../common/const';
import {ActionType} from '../../action-type';

export const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTH_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload
      };

    case ActionType.LOGIN:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};
