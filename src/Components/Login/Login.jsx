import React, { useState, useContext } from "react";
import store from "../../Context/context";
import LoginPageAnimation from "./Animation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ctx = useContext(store);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    ctx.loginChangeHandler(email, password);
    // Add your logic for handling the form submission here
  };

  return (
    <LoginPageAnimation>
      <h2 className="text-lg font-medium mb-4 text-gray-900">Login</h2>
      <div className="mb-4">
        <label className="block font-medium mb-2 text-gray-900" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full p-2 border border-gray-600 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label
          className="block font-medium mb-2 text-gray-900"
          htmlFor="password"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full p-2 border border-gray-600 rounded-lg"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
      >
        Login
      </button>
      <button
        onClick={() => ctx.pathChangeHandler("signup")}
        className="bg-gray-800 ml-5 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
      >
        Don't have an account
      </button>
    </LoginPageAnimation>
  );
};

export default LoginPage;
