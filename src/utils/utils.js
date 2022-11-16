export const API_PREFIX = process.env.REACT_APP_DEV_API;

export const getStorage = (key) => {
  return localStorage.getItem(key);
};

export const setStorage = (key, value) => {
  return localStorage.setItem(key, value);
};
