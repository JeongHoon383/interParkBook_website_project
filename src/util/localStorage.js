import { getCookie, removeCookie } from "./cookies.js";

export const removeUser = () => {
  removeCookie("rememberUserInfo");
  localStorage.clear();
};

export const getUser = () => {
  let userInfo =
    getCookie("rememberUserInfo") && localStorage.getItem("userId")
      ? JSON.parse(localStorage.getItem("userId"))
      : null;
  return userInfo;
};
