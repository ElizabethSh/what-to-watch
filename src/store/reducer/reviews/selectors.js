import {NameSpace} from '../rootReducer';

export const getReviews = (state) => state[NameSpace.REVIEWS].reviews;
export const getReviewsLoadStatus = (state) => state[NameSpace.REVIEWS].isReviewsLoaded;
