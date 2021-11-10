import {NameSpace} from '../rootReducer';

export const getActiveGenre = (state) => state[NameSpace.GENRE].activeGenre;
