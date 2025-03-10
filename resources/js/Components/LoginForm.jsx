import React from 'react';
import { useForm } from '@inertiajs/react';

const LoginForm = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login', {
      onSuccess: () => console.log('Login successful'),
      onError: (error) => console.log(error),
    });
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {['email', 'password'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-600">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === 'password' ? 'password' : 'text'}
                id={field}
                name={field}
                value={data[field]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
            </div>
          ))}
          {errors.login && <p className="text-red-500 text-sm mt-1">{errors.login}</p>}
          <div>
            <input
              type="submit"
              value={processing ? 'Logging in...' : 'Login'}
              disabled={processing}
              className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-900 cursor-pointer disabled:opacity-50"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
