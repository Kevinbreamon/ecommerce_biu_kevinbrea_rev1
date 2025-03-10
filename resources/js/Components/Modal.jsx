import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { useForm } from "@inertiajs/react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/products", {
      onSuccess: () => closeModal(), // Cierra modal si el request es exitoso
    });
  };

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const { data, setData, post, processing, reset } = useForm({
    name: "",
    status: "",
    stock: "",
    price: "",
  });

  return (
    <>
      {/* Botón para abrir el modal */}
      <div className="flex items-center justify-end">
        <button onClick={openModal} className="bg-black hover:cursor-pointer hover:bg-gray-700 transition-colors ease-in my-2 text-white px-4 py-2 rounded-md">
          Crear producto
        </button>
      </div>

      {/* Modal */}
      <Transition appear show={isOpen} as="div">
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          {/* Fondo Oscuro */}
          <TransitionChild
            as="div"
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </TransitionChild>

          {/* Contenido del Modal */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as="div"
                enter="duration-300 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white dark:text-gray-300 dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300 py-2">
                    Add New Product
                  </DialogTitle>

                  {/* Formulario */}
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4 grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={data.name}
                          onChange={handleChange}
                          className="w-full border rounded p-2"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 dark:text-gray-300">Status</label>
                        <select
                          name="status"
                          value={data.status}
                          onChange={handleChange}
                          className="w-full border rounded p-2"
                          required
                        >
                          <option value="">Select</option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-700 dark:text-gray-300">Stock</label>
                        <input
                          type="number"
                          name="stock"
                          value={data.stock}
                          onChange={handleChange}
                          className="w-full border rounded p-2"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-gray-700 dark:text-gray-300">Price</label>
                        <input
                          type="number"
                          name="price"
                          value={data.price}
                          onChange={handleChange}
                          className="w-full border rounded p-2"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <button type="button" onClick={closeModal} className="bg-gray-400 px-4 py-2 rounded-md">
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={processing}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                      >
                        {processing ? "Saving..." : "Create"}
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
