import {ActionType} from '../../action-type';

export const FavoritesAction = {
  loadFavorites: (data) => {
    return {
      type: ActionType.LOAD_FAVORITES,
      payload: data
    };
  }
};
