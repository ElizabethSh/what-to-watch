export const getUniqueValues = (array) => {
  const values = [];
  array.forEach((film) => {
    values.push(film.genre);
  });

  return Array.from(new Set(values)).sort();
};

export const createNumbersArray = (min, max) => {
  const array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
};
