import React from "react";
import { motion } from "framer-motion";

const ProductAnimation = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: [0, 10, 0, -10, 0],
        transition: { duration: 0.5 },
      }}
      className="bg-gradient-to-b from-purple-600 to-indigo-600 rounded-lg shadow-lg p-6"
    >
      {children}
    </motion.div>
  );
};

export default ProductAnimation;
