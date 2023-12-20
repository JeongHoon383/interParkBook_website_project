import { getCookie, removeCookie } from "./cookies.js";

export const removeUser = () => {
  removeCookie("rememberUserInfo");
  localStorage.clear();
};

export const getUser = () => {
  let userInfo =
    getCookie("rememberUserInfo") && sessionStorage.getItem("userId")
      ? JSON.parse(sessionStorage.getItem("userId"))
      : null;
  return userInfo;
};
