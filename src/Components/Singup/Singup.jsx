import React, { useContext, useState } from "react";
import store from "../../Context/context";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const ctx = useContext(store);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(email, password, confirmPassword);
    ctx.addUserHandler(email, password);
    // Add your logic for handling the form submission here
  };

  return (
    <div className="bg-gray-800 flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-xl"
      >
        <h2 className="text-lg font-medium mb-4 text-gray-900">Sign Up</h2>
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-900"
            htmlFor="email"
          >
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
        <div className="mb-4">
          <label
            className="block font-medium mb-2 text-gray-900"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="w-full p-2 border border-gray-600 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700"
        >
          Sign Up
        </button>
        <button
          onClick={() => ctx.pathChangeHandler("login")}
          className="bg-gray-800 ml-5 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
        >
          Already have an account
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
