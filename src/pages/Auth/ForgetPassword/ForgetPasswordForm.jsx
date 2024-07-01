// import React from 'react'

import { useState } from 'react';
import CloseButton from '../../../components/CloseButton';

const LoginForm = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
  };


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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white w-full py-20">
    
   
       
       {!isModalOpen && (
           <div className=" w-[700px] h-[570px] pl-16 pr-16 p-10 bg-white rounded-2xl shadow-md">
           <div className="flex justify-end text-light-gray ">
         
           <CloseButton onClick={handleClose} />
           </div>
     
          
             <h2 className="mb-8 text-3xl font-semibold text-center text-black">Email</h2>
             <form onSubmit={handleSubmit} className="space-y-6">
               <div >
                 <label htmlFor="phoneOrEmail" className="block text-lg font-bold mb-4 text-gray-700 text-black">
                   Email
                 </label>
                 <input
                   type="text"
                   id="phoneOrEmail"
                   name="phoneOrEmail"
                   placeholder='Enter your email address'
                   value={formData.phoneOrEmail}
                   onChange={handleChange}
                   className="w-full px-4 py-4 border border-lightest-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                   required
                 />
               </div>
               <div>
                 <label htmlFor="password" className="block text-lg font-bold mb-4 mt-8 text-gray-700 text-black">
                   Password
                 </label>
                 <input
                   type="password"
                   id="password"
                   name="password"
                   placeholder='Enter your password'
                   value={formData.password}
                   onChange={handleChange}
                   className="w-full px-4 py-4 border border-lightest-gray  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                   required
                 />
               </div>
               <div>
                 
         
              
               </div>
               <button type="submit" className="w-full bg-darker-blue text-white text-yellow p-4 rounded-xl text-xl hover:bg-indigo-700">Log in</button>
     
               <div className="flex flex-row justify-between">
               <a href="/forgot-password" className="text-lg text-blue-500 hover:underline ">
                   Forgot Password?
                 </a>
     
                 <a href="/forgot-password" className="text-lg text-blue-500 hover:underline text-dark-yellow">
                   Register
                 </a>
               </div>
             
               </form>
           </div>
       )}
     
    </div>
  );
};

export default LoginForm;
