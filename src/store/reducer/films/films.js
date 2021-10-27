import {sortByGenre} from '../../../common/sort';
import {ActionType} from '../../action-type';

const initialState = {
  films: [],
  isFilmsLoaded: false,
  sortedFilms: []
};

export const films = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        sortedFilms: action.payload,
        isFilmsLoaded: true
      };

    case ActionType.SORT_FILMS:
      return {
        ...state,
        sortedFilms: sortByGenre(state.films, action.payload)
      };
  }

  return state;
};
