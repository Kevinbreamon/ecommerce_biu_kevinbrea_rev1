import React, { useState, useEffect } from "react";
import ShopProduct from "../components/ShopProduct";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const ShopPage = (props) => {
  // const [products, setProducts] = useState([]);

  // // URL de la API de los productos
  // const apiUrl = "https://67c0c748b9d02a9f224ae7cb.mockapi.io/products/test";

  // // Cargar productos desde la API
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch(apiUrl);
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Error al cargar los productos", error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);
  console.log(props)

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Productos Disponibles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {props.products.map((product) => (
          <ShopProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ShopPage;
