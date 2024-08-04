// import React from 'react'

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeftLong } from "react-icons/fa6";

const ForgetPassword= () => {
  //   for cross button
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [formData, setFormData] = useState({
    phoneOrEmail: "",
    password: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="fixed z-10 backdrop-blur-sm  h-screen w-full inset-0">
         <div className="flex flex-col items-center justify-center min-h-screen bg-white w-full py-20">
      {!isModalOpen && (
        <div className=" w-[700px] h-[550px] pl-16 pr-16 p-10 bg-white rounded-2xl shadow-md">
          <div className="flex flex-row justify-between text-light-gray ">
            <FaArrowLeftLong size={24} />
            <RxCross2 onClick={handleClose} size={32} />
          </div>

          <h2 className="mb-8 mt-4 text-3xl font-semibold text-center text-black">
            Forget Password
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="phoneOrEmail"
                className="block text-lg font-bold mb-4 text-gray-700 text-black"
              >
                Email
              </label>
              <input
                type="text"
                id="phoneOrEmail"
                name="phoneOrEmail"
                placeholder="Enter your email address"
                value={formData.phoneOrEmail}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-lightest-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-darker-blue text-white text-yellow p-4 rounded-xl text-xl hover:bg-indigo-700"
            >
              Send
            </button>

            <div>
              <label
                htmlFor="password"
                className="block text-lg font-bold mb-4 mt-8 text-gray-700 text-black"
              >
                Verification Code
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="......                                         "
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-lightest-gray  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-4xl placeholder:tracking-[20px]"
                required
              />
            </div>
            <div></div>
          </form>
        </div>
      )}
    </div>

    </div>
   
  );
};

export default ForgetPassword;
