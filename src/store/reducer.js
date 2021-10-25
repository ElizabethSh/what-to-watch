import {DEFAULT_GENRE} from '../common/const';
import {sortByGenre} from '../common/sort';
import {films} from '../mocks/films';
import {ActionType} from './action-type';

const initialState = {
  activeGenre: DEFAULT_GENRE,
  films,
  sortedFilms: films
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        activeGenre: action.payload,
        sortedFilms: sortByGenre(state.films, action.payload)
      };

    case ActionType.RESET_GENRE:
      return {
        ...state,
        activeGenre: initialState.activeGenre,
        sortedFilms: initialState.sortedFilms,
      };

  }

  return state;
};
