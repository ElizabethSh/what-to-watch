import moment from 'moment';

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

export const capitalizeString = (string) => {
  return string
    .slice(0, 1)
    .toUpperCase() + string.slice(1);
};

export const formatRating = (num) => {
  return num
    .toFixed(1)
    .toString()
    .replace(`.`, `,`);
};

export const toSnakeCase = (str) => {
  return str.split(` `).join(`_`);
};

export const toNumber = (string) => {
  string = string.replace(`:`, ``);

  return Number(string);
};

export const shuffle = (array) => {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const formatDate = (date) => {
  return moment(date).format(`LL`);
};

export const formatDateTime = (date) => {
  return moment(date).format(`YYYY-MM-DD`);
};

export const formatDuration = (durationInMinutes) => {
  return moment
    .utc()
    .startOf(`day`)
    .add({minutes: durationInMinutes})
    .format(`H[h] mm[m]`);
};
