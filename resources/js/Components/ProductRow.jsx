// src/components/ProductRow.jsx
import React from 'react';

const ProductRow = ({ product, onEdit, onDelete }) => {
  return (
    <tr>
      <td className="border px-4 py-2">{product.id}</td>
      <td className="border px-4 py-2">{product.name}</td>
      <td className="border px-4 py-2">{product.status}</td>
      <td className="border px-4 py-2">{product.stock}</td>
      <td className="border px-4 py-2">{product.price}</td>
      <td className="border px-4 py-2 flex space-x-2">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded"
          onClick={() => onEdit(product)}
        >
          Editar
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
          onClick={() => onDelete(product.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
