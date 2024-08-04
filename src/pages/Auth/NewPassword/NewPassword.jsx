import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgetPasswordForm = () => {
  //   for cross button
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewPassword, setIsNewPassword] = useState(true);
  const [isNewConfirmPassword, setIsNewConfirmPassword] = useState(true);

  const toggleVisibility1 = () => {
    setIsNewPassword(!isNewPassword);
  };

  const toggleVisibility2 = () => {
    setIsNewConfirmPassword(!isNewConfirmPassword);
  };
  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [formData, setFormData] = useState({
    
    newpassword: "",
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
              <div className="relative">
              <input
                type={isNewPassword ? "password" : "text"}
                id="newpassword"
                name="newpassword"
                placeholder="Enter your new password"
                value={formData.newpassword}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-lightest-gray rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={toggleVisibility1}
            >
              {isNewPassword ? (
                <FaEye className="w-5 h-5 text-light-gray" />
              ) : (
                <FaEyeSlash className="w-5 h-5 text-light-gray" />
              )}
            </div>
            </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-lg font-bold mb-4 mt-8 text-gray-700 text-black"
              >
                Confirm New Password
              </label>
              <div className="relative">
              <input
                type={isNewConfirmPassword? "password" : "text"}
                id="confirmpassword"
                name="confirmpassword"
                placeholder="Enter your new password again"                                         
                value={formData.confirmpassword}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-lightest-gray  rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 "
                required
              />
              <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={toggleVisibility2}
                >
                  {isNewConfirmPassword ? (
                    <FaEye className="w-5 h-5 text-light-gray" />
                  ) : (
                    <FaEyeSlash className="w-5 h-5 text-light-gray" />
                  )}
                </div>
                </div>
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
