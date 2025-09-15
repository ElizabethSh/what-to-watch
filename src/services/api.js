import axios from "axios";
import { StatusCode } from "../common/const";

const BASE_URL = `https://6.react.htmlacademy.pro./wtw`;
const TIMEOUT = 5000;

export const createApi = (unAuthorised) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onError = (error) => {
    const { response } = error;

    if (response && response.status === StatusCode.UNAUTHORIZED) {
      unAuthorised();
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};
