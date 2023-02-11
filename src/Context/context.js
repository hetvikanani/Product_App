import React, { createContext } from "react";

const store = createContext({
  path: "",
  pathChangeHandler: (path) => {},
  allUser: [],
  addUserHandler: (name, password) => {},
  notification: { isNotification: false, message: "", type: "" },
  notificationChangeHandler: (isNotification, message, type) => {},
  loginChangeHandler: (user, pass) => {},
  isLogin: false,
  productList: [],
  addProductHandler: (title, year) => {},
  logoutHandler: () => {},
});

export default store;
