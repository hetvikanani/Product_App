import { useState } from "react";
import store from "./context";

const Logic = (props) => {
  const [path, setPath] = useState("landing");
  const [allUser, setAllUser] = useState([
    { name: "hetvi@gm.co", pwd: "123456" },
  ]);
  const [notification, setNotification] = useState({
    isNotification: false,
    message: "",
    type: "",
  });
  const [isLogin, setIsLogIn] = useState(false);
  const [productList, setProductList] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  const pathChangeHandler = (path) => {
    setPath(path);
  };

  const addUserHandler = (name, password) => {
    const check = allUser.filter((ele) => {
      return ele.name === name;
    });
    if (check.length === 0) {
      setAllUser([...allUser, { name: name, pwd: password }]);
      pathChangeHandler("login");
    } else {
      notificationChangeHandler(true, "Already have user", "success");
    }
  };

  const addProductHandler = (title, year) => {
    setProductList([
      ...productList,
      { title: title, year: year, user: currentUser },
    ]);
  };

  const notificationChangeHandler = (isNotification, message, type) => {
    setNotification({
      isNotification: isNotification,
      message: message,
      type: type,
    });
  };

  const loginChangeHandler = (user, pass) => {
    const check = allUser.filter((ele) => {
      return ele.name === user && ele.pwd === pass;
    });
    if (check.length !== 0) {
      console.log("login successfully");
      pathChangeHandler("dashboard");
      setIsLogIn(true);
      setCurrentUser(user);
    } else {
      notificationChangeHandler(true, "Plz enter valid data", "error");
    }
  };

  const logoutHandler = () => {
    setIsLogIn(false);
    setPath("landing");
    setCurrentUser("");
  };
  return (
    <store.Provider
      value={{
        path,
        pathChangeHandler,
        allUser,
        addUserHandler,
        notification,
        notificationChangeHandler,
        loginChangeHandler,
        isLogin,
        productList,
        addProductHandler,
        logoutHandler,
      }}
    >
      {props.children}
    </store.Provider>
  );
};

export default Logic;
