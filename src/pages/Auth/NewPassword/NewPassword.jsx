

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeftLong, FaEye, FaEyeSlash } from "react-icons/fa6";

const ForgetPasswordForm = () => {
  //   for cross button
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);

  const toggleVisibility1 = () => {
    setIsPassword(!isPassword);
  };

  const toggleVisibility2 = () => {
    setIsConfirmPassword(!isConfirmPassword);
  };
  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [formData, setFormData] = useState({
    
    password: "",
    confirmpassword: "",
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white w-full py-20">
      {!isModalOpen && (
        <div className=" w-[700px] h-[550px] pl-16 pr-16 p-10 bg-white rounded-2xl shadow-md">
          <div className="flex flex-row justify-between text-light-gray ">
            <FaArrowLeftLong size={24} />
            <RxCross2 onClick={handleClose} size={32} />
          </div>

          <h2 className="mb-8 mt-4 text-3xl font-semibold text-center text-black">
            New Password
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="phoneOrEmail"
                className="block text-lg font-bold mb-4 text-gray-700 text-black"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your new password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-lightest-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

           
            </div>

        

            <div>
              <label
                htmlFor="password"
                className="block text-lg font-bold mb-4 mt-8 text-gray-700 text-black"
              >
               Confirm New Password
              </label>
              <input
                type="password"
                id="password"
                name="confirmpassword"
                placeholder="Enter your new password again"                                         
                value={formData.confirmpassword}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-lightest-gray  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 "
                required
              />
             
            </div>
            <button
              type="submit"
              className="w-full bg-darker-blue text-white text-yellow p-4 rounded-xl text-xl hover:bg-indigo-700"
            >
              Create
            </button>
            <div></div>
          </form>
        </div>
        
      )}
    </div>
  );
};

export default ForgetPasswordForm;
