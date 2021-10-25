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
  return string.slice(0, 1).toUpperCase() + string.slice(1);
};

export const formatNumber = (num) => {
  return num.toString().replace(`.`, `,`);
};

export const toSnakeCase = (str) => {
  return str.split(` `).join(`_`);
};
