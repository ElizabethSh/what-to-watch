import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from '../../../common/const';
import {saveUserData, setAuthStatus} from './action';

export const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
};

export const user = createReducer(initialState, (builder) => {
  builder.addCase(setAuthStatus, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(saveUserData, (state, action) => {
    state.user = action.payload;
  });
});
