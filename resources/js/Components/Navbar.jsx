import React, { useState, useEffect, useRef } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from '@inertiajs/react';
import { usePage, useForm } from '@inertiajs/react';

const Navbar = () => {
  const { user } = usePage().props;
  const { post } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const userIconRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const updateModalPosition = () => {
      if (isModalOpen && userIconRef.current && modalRef.current) {
        const rect = userIconRef.current.getBoundingClientRect();
        const modalWidth = modalRef.current.offsetWidth;

        let left = rect.right - modalWidth;
        let top = rect.bottom + 10;

        modalRef.current.style.top = `${top}px`;
        modalRef.current.style.left = `${left}px`;
      }
    };

    updateModalPosition();
    window.addEventListener('resize', updateModalPosition);
    return () => window.removeEventListener('resize', updateModalPosition);
  }, [isModalOpen]);

  const handleLogout = () => {
    post('/logout', {
      onSuccess: () => {
        setIsModalOpen(false); // Cerrar el modal al hacer logout
      },
    });
  };

  return (
    <header className="w-full bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto py-4 px-4 md:px-8 flex items-center justify-between text-black">
        <Link href="/">
          <h1 className="font-bold text-2xl text-black">Brea's Styles</h1>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex font-semibold items-center gap-6">
            <Link href="/products">
              <li className="text-black hover:text-gray-600 transition-colors duration-300">Shop</li>
            </Link>
            <Link href="/aboutUs">
              <li className="text-black hover:text-gray-600 transition-colors duration-300">About Us</li>
            </Link>
            <Link href="/brands">
              <li className="text-black hover:text-gray-600 transition-colors duration-300">Brands</li>
            </Link>
          </ul>
        </nav>

        <div className="flex items-center gap-4 relative">
          <input
            className="bg-gray-100 border border-gray-300 rounded-md shadow-md p-1 text-gray-600 hidden md:inline"
            type="search"
            placeholder="Search..."
          />
          <Link href="#">
            <FaShoppingCart className="text-black text-xl hover:text-gray-600 transition-transform transform hover:scale-105" />
          </Link>
          <button ref={userIconRef} onClick={() => setIsModalOpen(!isModalOpen)}>
            <FaUser className="text-black text-xl hover:text-gray-600 transition-transform transform hover:scale-105" />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          ref={modalRef}
          className="absolute bg-white p-2 px-4 rounded-lg shadow-lg border border-gray-300 z-50"
          style={{ minWidth: '150px' }}
        >
          {user ? (
            <div>Hola, {user.name}</div>
          ) : (
            <div>Invitado</div>
          )}
          <div className="flex flex-col gap-2">
            {!user && (
              <>
                <Link href="/signup" className="text-sm text-gray-500 hover:text-black transition-colors duration-300 text-center">
                  Sign Up
                </Link>
                <Link href="/login" className="text-sm text-gray-500 hover:text-black transition-colors duration-300 text-center">
                  Login
                </Link>
              </>
            )}
            {user && (
              <button
                onClick={handleLogout}
                className="text-sm text-gray-500 hover:text-black transition-colors duration-300 text-center"
              >
                Log out
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
