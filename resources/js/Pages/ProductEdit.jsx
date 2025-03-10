import React, { useState, useEffect } from 'react';
import ProductTable from '../Components/ProductTable';
import Modal from '../Components/Modal'; // Asegúrate de importar el modal de agregar productos
import EditModal from '../Components/EditModal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useForm } from '@inertiajs/react';
import { router } from '@inertiajs/react';

const ProductEdit = (props) => {
  const [editingProduct, setEditingProduct] = useState(null); // Para almacenar el producto que se está editando
  const [showEditModal, setShowEditModal] = useState(false); // Controla la visibilidad del modal de edición

  const { data, setData, put, processing, reset } = useForm({
    id: '',
    name: '',
    status: '',
    stock: '',
    price: '',
  });

  const handleEdit = (product) => {
    setData('id', product.id);
    setData('name', product.name);
    setData('status', product.status);
    setData('stock', product.stock);
    setData('price', product.price);
    setEditingProduct(product);
    setShowEditModal(true); // Mostrar modal de edición
  };

  const handleDelete = (id) => {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      // Usa el método delete de Inertia.js
      router.delete(`/products/${id}`, {
        onSuccess: () => {
//          alert('Producto eliminado exitosamente');
        },
        onError: (error) => {
          alert('Error al eliminar el producto');
          console.error(error);
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Llamada para actualizar el producto
    put(`/products/${data.id}`, {
      onSuccess: () => {
        setShowEditModal(false); // Cierra el modal al guardar los cambios
        //alert('Producto actualizado exitosamente');
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="p-4 py-16">
        <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>

        <Modal /> {/* Modal para agregar un nuevo producto */}

        {/* Modal de Edición */}
        {showEditModal && (
          <EditModal
            product={editingProduct}
            isOpen={showEditModal}
            closeModal={() => setShowEditModal(false)}
            handleSubmit={handleSubmit}
            data={data}
            setData={setData}
            processing={processing}
          />
        )}

        <ProductTable
          products={props.products}
          onEdit={handleEdit} // Función para editar el producto
          onDelete={handleDelete} // Función para eliminar el producto
        />
      </div>
      <Footer />
    </>
  );
};

export default ProductEdit;
