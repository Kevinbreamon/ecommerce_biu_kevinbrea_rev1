import React, { useState } from 'react';
import axios from 'axios'; // Necesitas instalar axios para hacer peticiones HTTP
import { router } from '@inertiajs/react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (formData.username.trim() === '') newErrors.username = 'Please enter a valid username.';
    if (!formData.email.includes('@')) newErrors.email = 'Please enter a valid email.';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post('/register', {
           name: formData.username,  // Ajusta según el nombre del campo
           email: formData.email,
           password: formData.password,
           password_confirmation: formData.confirmPassword,  // Confirmación de la contraseña
       });
        // Si la respuesta es exitosa, puedes redirigir o mostrar un mensaje de éxito
        router.visit('/')

      } catch (error) {
        if (error.response && error.response.data.errors) {
          setErrors(error.response.data.errors);  // Mostrar los errores en el formulario
        } else {
          setErrors({ general: 'Something went wrong, please try again later.' });
        }
      }
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {['username', 'email', 'password', 'confirmPassword'].map((field, index) => (
            <div key={index}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-600">
                {field.charAt(0).toUpperCase() + field.slice(1).replace('Password', ' Password')}
              </label>
              <input
                type={field.includes('password') || field.includes('confirmPassword')  ? 'password' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
            </div>
          ))}
          {errors.signup && <p className="text-red-500 text-sm mt-1">{errors.signup}</p>}
          <div>
            <input type="submit" value="Sign Up" className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-900 cursor-pointer" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
