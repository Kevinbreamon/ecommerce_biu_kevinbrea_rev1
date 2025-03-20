import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutUs from '../Components/AboutUs';

const AboutUsPage = () => {
  return (
      <div>
        <Navbar/>
      {/* Sign Up Form */}
      <section className=" flex items-center justify-center min-h-screen bg-white">
        <AboutUs />
      </section>
         <Footer />
    </div>
  );
};

export default AboutUsPage;
