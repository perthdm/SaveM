export const API_PREFIX = process.env.REACT_APP_DEV_API;

export const getStorage = (key) => {
  return localStorage.getItem(key);
};

export const setStorage = (key, value) => {
  return localStorage.setItem(key, value);
};

export const getDefaultValue = (value) => {
  let val = parseFloat(value).toFixed(2);
  let temp = val.split(".");
  let itg = parseInt(temp[0]).toLocaleString();
  let digit = temp[1];

  return value ? `${itg}.${digit}` : "0.00";
};
