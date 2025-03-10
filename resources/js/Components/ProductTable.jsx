// src/components/ProductTable.jsx
import React from 'react';
import ProductRow from './ProductRow';



const ProductTable = ({ products, onEdit, onDelete }) => {

    if (!products || products.length === 0) {
        return <p>No hay productos disponibles.</p>;
      }
    return (
    <table className="min-w-full bg-white border">
      <thead>
        <tr>
          <th className="py-2 border">ID</th>
          <th className="py-2 border">Nombre</th>
          <th className="py-2 border">Estado</th>
          <th className="py-2 border">Stock</th>
          <th className="py-2 border">Precio</th>
          <th className="py-2 border">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductRow
            key={product.id}
            product={product}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
