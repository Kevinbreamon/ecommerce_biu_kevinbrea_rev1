import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Login = () => {
  return (
      <div>
        <Navbar/>
      {/* Sign Up Form */}
      <section className="py-2 flex items-center justify-center min-h-screen bg-white">
        <LoginForm />
      </section>
         <Footer />
    </div>
  );
};

export default Login;
