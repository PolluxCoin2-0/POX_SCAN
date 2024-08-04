import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "../../../Firebase/Firebase"; // Import your Firebase auth instance
import { toast } from "react-toastify";

const ForgetPasswordForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewPassword, setIsNewPassword] = useState(true);
  const [isNewConfirmPassword, setIsNewConfirmPassword] = useState(true);
  const [formData, setFormData] = useState({
    newpassword: "",
    confirmpassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  
  const navigate = useNavigate();
  const location = useLocation();

  const toggleVisibility1 = () => {
    setIsNewPassword(!isNewPassword);
  };

  const toggleVisibility2 = () => {
    setIsNewConfirmPassword(!isNewConfirmPassword);
  };

  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newpassword !== formData.confirmpassword) {
      setError("Passwords do not match.");
      return;
    }

    // Extract the oobCode from the query parameters
    const queryParams = new URLSearchParams(location.search);
    const oobCode = queryParams.get("oobCode");
   console.log("oobcode",oobCode)
    if (!oobCode) {
      setError("Invalid or missing password reset code.");
      return;
    }

    try {
      // Confirm password reset
   await confirmPasswordReset( auth, oobCode, formData.newpassword);
      toast.success("Passowrd reset successfully!");
      
    } catch (error) {
       toast.error("error resetting password");
    }
  };

  return (
    <div className="fixed z-10 backdrop-blur-sm min-h-screen w-full inset-0">
      <div className="flex flex-col items-center justify-center min-h-screen bg-white w-full py-20">
        {!isModalOpen && (
          <div className="w-[700px] h-[550px] pl-16 pr-16 p-10 bg-white rounded-2xl shadow-md">
            <div className="flex flex-row justify-between text-light-gray ">
              <FaArrowLeftLong onClick={() => navigate("/forgetpassword")} size={24} />
              <RxCross2 onClick={handleClose} size={32} />
            </div>

            <h2 className="mb-8 mt-4 text-3xl font-semibold text-center text-black">
              New Password
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && <div className="text-red-500">{error}</div>}
              {success && <div className="text-green-500">{success}</div>}
              <div>
                <label
                  htmlFor="newpassword"
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
                  htmlFor="confirmpassword"
                  className="block text-lg font-bold mb-4 mt-8 text-gray-700 text-black"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={isNewConfirmPassword ? "password" : "text"}
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
                Reset Password
              </button>
              <div></div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
