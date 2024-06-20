// import React from 'react'

import { useState } from 'react';
import AuthLogo from "../../../assets/Authlogo.png";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    phoneOrEmail: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-[60%] py-15">
      <div className="w-full max-w-md p-8 bg-gray-gradient shadow-md">
      <img src={AuthLogo}
      alt="authorization logo"
      className=" flex justify-center"
      /> 
        <h2 className="mb-6 text-2xl font-semibold text-center text-white">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="phoneOrEmail" className="block mb-1 text-gray-700 text-white">
              Phone/Email
            </label>
            <input
              type="text"
              id="phoneOrEmail"
              name="phoneOrEmail"
              value={formData.phoneOrEmail}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-gray-700 text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            
    
            <a href="/forgot-password" className="text-sm text-blue-500 hover:underline text-dark-yellow">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="w-full bg-dark-yellow text-yellow p-2 rounded-md hover:bg-indigo-700">Register</button>
          </form>
      </div>
    </div>
  );
};

export default LoginForm;
