const FilmRank = {
  bad: 0,
  normal: 3,
  good: 5,
  veryGood: 8,
  awesome: 10
};

const filmRankRate = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

export const getFilmRatingLevel = (rating) => {
  let estimation;

  if (rating < FilmRank.normal) {
    estimation = filmRankRate.BAD;
  } else if (FilmRank.normal <= rating && rating < FilmRank.good) {
    estimation = filmRankRate.NORMAL;
  } else if (FilmRank.good <= rating && rating < FilmRank.veryGood) {
    estimation = filmRankRate.GOOD;
  } else if (FilmRank.veryGood <= rating && rating < FilmRank.awesome) {
    estimation = filmRankRate.VERY_GOOD;
  } else {
    estimation = filmRankRate.AWESOME;
  }

  return estimation;
};
