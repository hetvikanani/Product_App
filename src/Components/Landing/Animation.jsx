import React from "react";
import { motion } from "framer-motion";

const LandingPageAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 1 } }}
      className="bg-gradient-to-b from-purple-600 to-indigo-600 flex items-center justify-center h-screen"
    >
      {children}
    </motion.div>
  );
};

export default LandingPageAnimation;
