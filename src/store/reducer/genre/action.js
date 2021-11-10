import {ActionType} from '../../action-type';

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre
});

export const resetGenre = () => ({
  type: ActionType.RESET_GENRE
});
