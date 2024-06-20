// src/RegisterForm.js
import  { useState } from 'react';
import AuthLogo from "../../../assets/Authlogo.png";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    phoneOrEmail: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

    if (!formData.phoneOrEmail) {
        errors.phoneOrEmail = 'Phone or Email is required';
    } else if (!emailPattern.test(formData.phoneOrEmail)) {
        errors.phoneOrEmail = 'Invalid email format';
    }

    if (!formData.password) {
        errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required';
    } else if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.termsAccepted) {
        errors.termsAccepted = 'You must accept the terms and conditions';
    }

    return errors;
};


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  console.log(formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data:', formData);
      // Submit form data
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-[60%] px-12 mx-auto mt-10 p-6 border-white py-20
     rounded-lg shadow-md bg-gray-gradient">
      <div className="flex flex-col ">
       <div>
       <img src={AuthLogo}
       alt=""
       className=" "
       />
       </div>

       <div> 
        <p className=" flex justify-center text-white">Register!</p>
       
       </div>
       
    
      
      </div>
    
    <div className="mb-4">
        <label htmlFor="phoneOrEmail" className="block text-sm font-medium text-gray-700 text-white">Phone/Email</label>
        <input
          type="text"
          id="phoneOrEmail"
          name="phoneOrEmail"
          value={formData.phoneOrEmail}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300
           rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.phoneOrEmail && <span className="text-red-500 text-sm">{errors.phoneOrEmail}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-white">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 text-white">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="form-checkbox h-5 w-5 text-indigo-600"
          />
          <span className="ml-2 text-sm text-gray-700 text-white">I agree privacy policy terms of services</span>
        </label>
        {errors.termsAccepted && <span className="text-red-500 text-sm block">{errors.termsAccepted}</span>}
      </div>
      <button type="submit" className="w-full bg-dark-yellow text-yellow p-2 rounded-md hover:bg-indigo-700">Register</button>
    </form>
  );
};

export default RegisterForm;
