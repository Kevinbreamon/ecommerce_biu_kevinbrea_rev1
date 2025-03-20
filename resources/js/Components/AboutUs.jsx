import React from "react";
import { Link } from '@inertiajs/react';

const AboutUs = () => {
  return (
    <div className="relative w-full h-screen bg-gray-100 flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Fashion Banner"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-3xl bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900">Brea's Styles</h1>
        <p className="mt-4 text-gray-700">
        Brea's Styles is a designer clothing store in the Dominican Republic,
        offering the latest trends and exclusive styles to our customers.
        </p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900">Mission</h2>
          <p className="text-gray-700 mt-2">
            Provide our customers with a unique shopping experience by offering
            high-quality products and modern styles.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-900">Vision</h2>
          <p className="text-gray-700 mt-2">
            To be the leading clothing store in the Dominican Republic,
            standing out for our variety and exclusivity in each collection.
          </p>
        </div>

        <Link href="/products">
            <li className="mt-6 inline-block bg-black text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition">
                View our shop!
            </li>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
