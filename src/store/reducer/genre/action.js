import {ActionType} from '../../action-type';

export const GenreAction = {
  changeGenre: (genre) => {
    return {
      type: ActionType.CHANGE_GENRE,
      payload: genre
    };
  },
  resetGenre: () => {
    return {
      type: ActionType.RESET_GENRE
    };
  },
};
