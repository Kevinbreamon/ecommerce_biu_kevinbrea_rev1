import React, { useState, useEffect } from 'react';
import ProductTable from '../components/ProductTable';
import EditModal from '../components/EditModal';
import Modal from '../components/Modal'; // Asegúrate de importar el modal de agregar productos

const ProductEdit = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false); // Estado para controlar el modal de agregar producto

  // Cargar productos al cargar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  // Función para cargar productos desde la API
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://67c0c748b9d02a9f224ae7cb.mockapi.io/products/test');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
      alert('No se pudieron cargar los productos');
    }
  };

  // Abrir modal con producto a editar
  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsOpen(true);
  };

  // Cerrar modal
  const closeModal = () => {
    setEditingProduct(null);
    setIsOpen(false);
  };

  // Actualizar producto en la lista
  const handleUpdate = (updatedProduct) => {
    setProducts(products.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
  };

  // Eliminar producto
  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      try {
        const response = await fetch(`https://67c0c748b9d02a9f224ae7cb.mockapi.io/products/test/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
          alert('Producto eliminado exitosamente');
        } else {
          alert('Hubo un problema al eliminar el producto');
        }
      } catch (error) {
        console.error('Error al eliminar el producto:', error);
        alert('Error de conexión');
      }
    }
  };

  // Función que se pasa al modal de agregar para actualizar los productos
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]); // Agregar el nuevo producto a la lista
  };

  return (
    <div className="p-4 py-16">
      <h1 className="text-2xl font-bold mb-4">Gestión de Productos</h1>
      
      <button
        onClick={() => setIsAddOpen(true)} // Abre el modal para agregar producto
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
      >
        Agregar Producto
      </button>

      <ProductTable 
        products={products} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
      
      <EditModal 
        product={editingProduct} 
        isOpen={isOpen} 
        onClose={closeModal} 
        onUpdate={handleUpdate} 
      />
      
      {/* Modal para agregar producto */}
      <Modal 
        isOpen={isAddOpen} 
        onClose={() => setIsAddOpen(false)} 
        onProductAdd={handleAddProduct} 
      />
    </div>
  );
};

export default ProductEdit;