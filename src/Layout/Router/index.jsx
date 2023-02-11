import React, { useContext, useState } from "react";
import DashboardPage from "../../Components/Dashboard/dashboard";
import LandingPage from "../../Components/Landing/Landing";
import LoginPage from "../../Components/Login/Login";
import SignUpPage from "../../Components/Singup/Singup";
import store from "../../Context/context";

// import DarkMode from "./Layout/DarkMode";

const Router = () => {
  const ctx = useContext(store);
  return (
    <>
      {ctx.isLogin && ctx.path === "dashboard" && <DashboardPage />}
      {ctx.path === "login" && <LoginPage />}
      {ctx.path === "signup" && <SignUpPage />}
      {ctx.path === "landing" && <LandingPage />}
    </>
  );
};

export default Router;
