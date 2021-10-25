import {DEFAULT_GENRE} from './const';
import {getUniqueValues} from './utils';
import {films} from '../mocks/films';

export const filmGenres = getUniqueValues(films);

export const sortItems = filmGenres.slice(0, 9);
sortItems.unshift(DEFAULT_GENRE);

export const sortByGenre = (movies, genre) => {
  const copyMovies = movies.slice();
  return copyMovies.filter(
      (movie) => movie.genre === genre
  );
};
