
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import ProductEdit from './Pages/ProductEdit';
import ShopPage from './Pages/ShopPage';

function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/promotions" element={<h1>Promotions</h1>} />
        <Route path="/new-arrival" element={<h1>New Arrival</h1>} />
        <Route path="/brands" element={<h1>Brands</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/admin" element={<ProductEdit />} />
      </Routes>
      <Footer />
    </Router>
  </>
  );
}

export default App;