import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Modal = ({ isOpen, onClose, onProductAdd }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    status: "Available",
  });

  const handleSave = async () => {
    console.log("Product to save:", newProduct);  // Verifica el producto antes de enviarlo
  
    try {
      const response = await fetch("https://67c0c748b9d02a9f224ae7cb.mockapi.io/products/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
  
      if (response.ok) {
        const addedProduct = await response.json();
        console.log("Added product:", addedProduct);  // Verifica la respuesta de la API
        onProductAdd(addedProduct);  // Llama a onProductAdd para agregar el producto
        onClose();  // Cierra el modal
        setNewProduct({ name: "", price: "", stock: "", status: "Available" });  // Resetea el formulario
      } else {
        console.error("Failed to add product", response);  // Verifica si hubo algún error en la respuesta
      }
    } catch (error) {
      console.error("Error adding product:", error);  // Maneja cualquier error
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  Nuevo producto
                </Dialog.Title>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Nombre del producto"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="border w-full mb-2 p-2 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Precio"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="border w-full mb-2 p-2 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Stock"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    className="border w-full mb-2 p-2 rounded"
                  />
                  <select
                    value={newProduct.status}
                    onChange={(e) => setNewProduct({ ...newProduct, status: e.target.value })}
                    className="border w-full mb-4 p-2 rounded"
                  >
                    <option value="Disponible">Disponible</option>
                    <option value="No Disponible">No Disponible</option>
                  </select>
                </div>

                <div className="mt-4">
                  <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  >
                    Guardar producto
                  </button>
                  <button
                    onClick={onClose}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;