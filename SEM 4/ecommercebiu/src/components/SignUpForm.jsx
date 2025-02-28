import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (/\d/.test(formData.fname)) newErrors.fname = 'First name cannot contain numbers.';
    if (/\d/.test(formData.lname)) newErrors.lname = 'Last name cannot contain numbers.';
    if (formData.username.trim() === '') newErrors.username = 'Please enter a valid username.';
    if (!formData.email.includes('@')) newErrors.email = 'Please enter a valid email.';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters long.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Form submitted successfully!');
      setFormData({ fname: '', lname: '', username: '', email: '', password: '', confirmPassword: '' });
      setErrors({});
    }
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {['First name', 'Last name', 'username', 'email', 'password', 'confirmPassword'].map((field, index) => (
            <div key={index}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-600">
                {field.charAt(0).toUpperCase() + field.slice(1).replace('Password', ' Password')}
              </label>
              <input
                type={field.includes('password') ? 'password' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
            </div>
          ))}
          <div>
            <input type="submit" value="Submit" className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-900 cursor-pointer" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;