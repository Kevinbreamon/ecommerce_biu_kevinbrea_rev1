import React from "react";
import { FaShoppingCart, FaArrowRight } from "react-icons/fa";

const ShopProduct = ({ product }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-4 text-center">
      <img
        src={product.imageUrl || "https://st.depositphotos.com/1987177/3470/v/450/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg"}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="mb-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-xl font-bold text-gray-700">${product.price}</p>
      </div>
      <button className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
        <FaShoppingCart className="mr-2" />
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ShopProduct;