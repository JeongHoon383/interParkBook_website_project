import { getCookie, removeCookie } from "./cookies.js";

export const removeUser = () => {
  removeCookie('accessToken');
  removeCookie('rememberMe');
  localStorage.clear();
};

export const getUser = () => {
  let userInfo =
    getCookie('accessToken') && localStorage.getItem('accessToken')
      ? JSON.parse(localStorage.getItem('accessToken'))
      : null;
  return userInfo;
};
