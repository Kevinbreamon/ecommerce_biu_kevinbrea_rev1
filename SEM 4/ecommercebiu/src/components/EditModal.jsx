// src/components/EditModal.jsx
import { useState, useEffect } from "react";

const EditModal = ({ product, isOpen, onClose, onUpdate }) => {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  useEffect(() => {
    setEditedProduct({ ...product });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://67c0c748b9d02a9f224ae7cb.mockapi.io/products/test/${product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedProduct),
        }
      );

      if (response.ok) {
        const updatedProduct = await response.json();
        onUpdate(updatedProduct);
        onClose();
      } else {
        alert("Error al actualizar el producto");
      }
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Editar Producto</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nombre:</label>
            <input
              type="text"
              name="name"
              value={editedProduct.name || ""}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Precio:</label>
            <input
              type="number"
              name="price"
              value={editedProduct.price || ""}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Stock:</label>
            <input
              type="number"
              name="stock"
              value={editedProduct.stock || ""}
              onChange={handleChange}
              required
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Estado:</label>
            <select
              name="status"
              value={editedProduct.status || ""}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            >
              <option value="">Selecciona un estado</option>
              <option value="Disponible">Disponible</option>
              <option value="No Disponible">No Disponible</option>
            </select>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-black rounded-md px-4 py-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-indigo-500 text-white rounded-md px-4 py-2"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;