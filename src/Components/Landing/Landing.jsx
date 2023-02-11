import React, { useContext, useState } from "react";
import store from "../../Context/context";
import LandingPageAnimation from "./Animation";

const LandingPage = (props) => {
  const ctx = useContext(store);

  const loginHandler = () => {
    ctx.pathChangeHandler("login");
  };

  const signupHandler = () => {
    ctx.pathChangeHandler("signup");
  };
  return (
    <LandingPageAnimation>
      <div className="flex flex-col items-center text-white">
        <h1 className="text-6xl font-medium mb-6 animate-pulse">
          Welcome to our app!
        </h1>

        <button
          onClick={loginHandler}
          to="/login"
          className="bg-purple-600 text-white py-2 px-4 rounded-lg mb-4 hover:bg-purple-700 animate-bounce"
        >
          Login
        </button>
        <button
          onClick={signupHandler}
          to="/signup"
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 animate-bounce"
        >
          Sign Up
        </button>
      </div>
    </LandingPageAnimation>
  );
};

export default LandingPage;
