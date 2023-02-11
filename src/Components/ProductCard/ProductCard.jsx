import React from "react";
import ProductAnimation from "./Animation";

const ProductCard = ({ title, year, username }) => {
  return (
    <ProductAnimation>
      <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
      <p className="text-white mb-4">Year: {year}</p>
      <p className="text-white">Username: {username}</p>
    </ProductAnimation>
  );
};

export default ProductCard;
