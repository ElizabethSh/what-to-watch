import {NameSpace} from '../rootReducer';

export const getAuthStatus = (state) => state[NameSpace.USER].authorizationStatus;
export const getUserData = (state) => state[NameSpace.USER].user;
