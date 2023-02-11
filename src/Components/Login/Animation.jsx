import React from "react";
import { motion } from "framer-motion";
const LoginPageAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ width: "100%", height: "100vh" }}
      className="bg-gray-800 flex items-center justify-center h-screen"
    >
      <motion.form
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-xl"
      >
        {children}
      </motion.form>
    </motion.div>
  );
};

export default LoginPageAnimation;
