import {DEFAULT_GENRE} from '../../../common/const';
import {ActionType} from '../../action-type';

const initialState = {
  activeGenre: DEFAULT_GENRE,
};

export const genre = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
      };

    case ActionType.RESET_GENRE:
      return {
        ...state,
        activeGenre: initialState.activeGenre,
      };

    default:
      return state;
  }
};
