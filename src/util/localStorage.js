import { removeCookie } from './cookies.js';

export const removeUser = () => {
  removeCookie('rememberUserInfo');
  localStorage.clear();
};
