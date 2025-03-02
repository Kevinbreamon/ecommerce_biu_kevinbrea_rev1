// src/components/Footer.jsx
import React from 'react';
import { FaHashtag, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full">
    {/* Sección de pie de página de la empresa */}
    <div className="w-full bg-gray-200">
      <div className="w-full flex flex-col md:flex-row justify-between px-4 py-6">
        <div>
          <h1 className="font-bold my-4 text-2xl">
            Brea's Styles
          </h1>
          <span className="text-gray-600">
            Specializes in providing high-quality, stylish
            <br />
            products for your wardrobe.
          </span>
        </div>
        <div className="flex gap-12">
          <div>
            <h3 className="uppercase font-bold my-4">
              Shop
            </h3>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  Promotions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  Brand New
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>
  
          <div>
            <h3 className="uppercase font-bold my-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="flex items-center gap-2">
                <FaHashtag className="text-gray-400" />
                Carr Vieja 315, Av. Los Peralejos #23
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-gray-400" />
                <span>+1 829 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-gray-400" />
                breasstyles@store.com
              </li>
            </ul>
          </div>
  
          <div>
            <h3 className="uppercase font-bold my-4">
              Social Media
            </h3>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <div className="w-full h-1 bg-gray-300 rounded-md"></div>
  
      <div className="w-full flex items-center justify-center py-6">
        <span className="text-center text-xs text-gray-400">
          Copyright ©2025 Brea's Styles. All rights reserved
        </span>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
