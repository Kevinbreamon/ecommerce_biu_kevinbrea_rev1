import React from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import SignUpForm from '../components/SignUpForm';


const SignUp = () => {
  return (
    <div>
      {/* Sign Up Form */}
      <section className="py-24 flex items-center justify-center min-h-screen bg-white">
        <SignUpForm />
      </section>
    </div>
  );
};

export default SignUp;