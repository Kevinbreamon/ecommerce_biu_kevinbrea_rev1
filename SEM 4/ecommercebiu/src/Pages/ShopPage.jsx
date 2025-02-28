import React, { useState, useEffect } from "react";
import ShopProduct from "../components/ShopProduct";


const ShopPage = () => {
  const [products, setProducts] = useState([]);

  // URL de la API de los productos
  const apiUrl = "https://67c0c748b9d02a9f224ae7cb.mockapi.io/products/test";

  // Cargar productos desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error al cargar los productos", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-8">Productos Disponibles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ShopProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;