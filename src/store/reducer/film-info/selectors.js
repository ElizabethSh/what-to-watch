import {NameSpace} from '../rootReducer';

export const getFilmInfo = (state) => state[NameSpace.FILM_INFO].filmInfo;
export const getFilmInfoLoadStatus = (state) => state[NameSpace.FILM_INFO].isFilmInfoLoaded;
