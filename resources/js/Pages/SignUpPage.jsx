import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import SignUpForm from '../components/SignUpForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const SignUp = () => {
  return (
      <div>
        <Navbar/>
      {/* Sign Up Form */}
      <section className="py-2 flex items-center justify-center min-h-screen bg-white">
        <SignUpForm />
      </section>
         <Footer />
    </div>
  );
};

export default SignUp;
