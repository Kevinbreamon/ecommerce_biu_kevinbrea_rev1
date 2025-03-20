import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Brands from '../Components/Brands';
import { Link } from '@inertiajs/react';


const BrandsPage = () => {
  return (
      <div>
        <Navbar />
        <div className="container mx-auto p-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">Take a look to our brands!</h2>
{/*             {props.products.map((product) => (
            <ShopProduct key={product.id} product={product} />
            ))} */}
            <Brands />
        </div>
        <div className='pb-24 flex justify-center container mx-auto'>
        <Link href="/products">
            <li className=" mx-auto mt-6 inline-block bg-black text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition">
                View our shop!
            </li>
        </Link>
        </div>
        <Footer />
    </div>
  );
};

export default BrandsPage;
