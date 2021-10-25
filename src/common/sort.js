import {DEFAULT_GENRE, filmGenres} from './const';

export const sortItems = filmGenres.slice(0, 9);
sortItems.unshift(DEFAULT_GENRE);

export const sortByGenre = (movies, genre) => {
  const copyMovies = movies.slice();
  return copyMovies.filter(
      (movie) => movie.genre === genre
  );
};
