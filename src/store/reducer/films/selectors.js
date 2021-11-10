import {NameSpace} from '../rootReducer';

export const getFilms = (state) => state[NameSpace.FILMS].films;
export const getFilmsLoadStatus = (state) => state[NameSpace.FILMS].isFilmsLoaded;
export const getSortedFilms = (state) => state[NameSpace.FILMS].sortedFilms;
