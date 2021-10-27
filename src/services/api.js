import axios from 'axios';

const baseURL = `https://6.react.pages.academy/wtw`;
const timeout = 5000;

export const createApi = () => {
  const api = axios.create({
    baseURL,
    timeout,
    withCredentials: true
  });

  return api;
};
