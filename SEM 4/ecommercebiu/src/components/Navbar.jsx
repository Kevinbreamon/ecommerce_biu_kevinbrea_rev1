import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm">
    <div className="max-w-7xl mx-auto py-4 px-4 md:px-8 flex items-center justify-between text-black">
      {/* Logo */}
      <Link to="/">
        <h1 className="font-bold text-2xl text-black">Brea's Styles</h1>
      </Link>

      {/* Menu de Navegacion */}
      <nav className="hidden md:block">
        <ul className="flex font-semibold items-center gap-6">
          <Link to="/shop">
            <li className="text-black hover:text-gray-600 transition-colors duration-300">
              Shop
            </li>
          </Link>
          <Link to="/promotions">
            <li className="text-black hover:text-gray-600 transition-colors duration-300">
              Promotions
            </li>
          </Link>
          <Link to="/new-arrival">
            <li className="text-black hover:text-gray-600 transition-colors duration-300">
              New Arrival
            </li>
          </Link>
          <Link to="/brands">
            <li className="text-black hover:text-gray-600 transition-colors duration-300">
              Brands
            </li>
          </Link>
        </ul>
      </nav>

      {/* Buscador y Iconos */}
      <div className="flex items-center gap-4">
        <input
          className="bg-gray-100 border border-gray-300 rounded-md shadow-md p-1 text-gray-600 hidden md:inline"
          type="search"
          placeholder="Search..."
        />
        <Link to="/cart">
          <FaShoppingCart className="text-black text-xl hover:text-gray-600 transition-transform transform hover:scale-105" />
        </Link>
        <Link to="/login">
          <FaUser className="text-black text-xl hover:text-gray-600 transition-transform transform hover:scale-105" />
        </Link>
      </div>
    </div>
  </header>
  );
};

export default Navbar;