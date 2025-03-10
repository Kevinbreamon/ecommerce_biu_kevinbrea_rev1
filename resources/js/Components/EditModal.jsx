import React from 'react';

const EditModal = ({ product, isOpen, closeModal, handleSubmit, data, setData, processing }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no se renderiza nada

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className="border-2 border-black bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4">Editar Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Estado</label>
            <select
              name="status"
              value={data.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Seleccionar</option>
              <option value="active">Activo</option>
              <option value="inactive">Inactivo</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Stock</label>
            <input
              type="number"
              name="stock"
              value={data.stock}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Precio</label>
            <input
              type="number"
              name="price"
              value={data.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancelar
            </button>
            <button
              type="submit"
              disabled={processing}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {processing ? "Guardando..." : "Guardar cambios"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
