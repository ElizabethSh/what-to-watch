import {ActionType} from '../../action-type';

export const loadFavorites = (data) => ({
  type: ActionType.LOAD_FAVORITES,
  payload: data
});
