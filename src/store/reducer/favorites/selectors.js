import {NameSpace} from '../rootReducer';

export const getFavorites = (state) => state[NameSpace.FAVORITES].favorites;
export const getFavoritesLoadStatus = (state) => state[NameSpace.FAVORITES].isFavoritesLoaded;
