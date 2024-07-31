// import React from 'react'

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ForgetPassword= () => {
  const passwordStatus = useSelector((state)=>state.wallet.password);
  const dispatch = useDispatch();
  //   for cross button
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [formData, setFormData] = useState({
    phoneOrEmail: "",
    
  });


  const validate = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

    if (!formData.phoneOrEmail) {
      errors.phoneOrEmail = "Phone or Email is required";
    } else if (!emailPattern.test(formData.phoneOrEmail)) {
      errors.phoneOrEmail = "Invalid email format";
    }

    
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const [errors, setErrors] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    // Handle form submission logic here
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      }
      else {
        setErrors(validationErrors);
  }

  
  sendPasswordResetEmail(auth, formData.phoneOrEmail).then(res => {
    toast.success("Email sent successfully!");
    })
    .catch(error => {
      console.log("Error", error);
      toast.error("Invalid Email!");
    })
  
}


  return (
    <div className="fixed z-10 backdrop-blur-sm   w-full inset-0">
         <div className="flex flex-col items-center justify-center min-h-screen bg-white w-full ">
      {!isModalOpen && (
        <div className=" w-[700px] h-[430px] pl-16 pr-16 p-10 bg-white rounded-2xl shadow-md">
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
                {errors.phoneOrEmail && (
                <span className="text-dark-red text-sm">
                  {errors.phoneOrEmail} !
                </span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-darker-blue text-white text-yellow p-4 rounded-xl text-xl hover:bg-indigo-700"
              onClick={handleSubmit}
              disabled={submitButtonDisabled}
            >
              Send
            </button>

          
            <div></div>
          </form>
        </div>
      )}
    </div>

    </div>
   
  );
};

export default ForgetPassword;
