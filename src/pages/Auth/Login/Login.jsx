import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setSignup } from "../../../redux/slice/walletSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase/Firebase";
import { toast } from "react-toastify";

const Login = () => {
  const loginStatus = useSelector((state)=>state.wallet.login);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(true);
 

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClose = () => {
    dispatch(setLogin(!loginStatus))
  };

  const [formData, setFormData] = useState({
    phoneOrEmail: "",
    password: "",
  });
  
  const [errors, setErrors] = useState({});
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);


  const validate = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation

    if (!formData.phoneOrEmail) {
      errors.phoneOrEmail = "Phone or Email is required";
    } else if (!emailPattern.test(formData.phoneOrEmail)) {
      errors.phoneOrEmail = "Invalid email format";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
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

  // connect with firebase - when onclick login
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

  setSubmitButtonDisabled(true);
  signInWithEmailAndPassword(auth, formData.phoneOrEmail, formData.password)
  .then((res) => {
   
    toast.success("Successfully Login!");
    dispatch(setSignup(!loginStatus))
  
  })
  .catch((error) =>{
    setSubmitButtonDisabled(false);
    setErrors(error.message);
    console.log("Error", error.message)
    toast.error ("Invalid Credentials");
});
  }

  return (
    <div className="fixed z-10 backdrop-blur-sm h-screen w-full inset-0">
      <div className="flex flex-col items-center justify-center min-h-screen w-full py-14">
          <div className="bg-white rounded-2xl">
            <div className="flex w-[700px] pr-4 pt-4 justify-end text-light-gray cursor-pointer">
            <button type="button" onClick={handleClose}>
                <RxCross2 size={32} />
              </button>
            </div>
            <div className=" w-[700px] h-[570px] pl-16 pr-16 bg-white rounded-2xl shadow-md">
              <h2 className="mb-8 text-3xl font-semibold text-center text-black">
                Login
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

                <div>
                  <label
                    htmlFor="password"
                    className="block text-lg font-bold mb-4 mt-8 text-gray-700 text-black"
                  >
                    Password
                  </label>
                  <input
                    type={`${isVisible ? "text" : "password"}`}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-lightest-gray mb-20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />


                  <div
                    className="flex flex-row justify-end -mt-28 mr-5"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <FaEye className="w-5 h-5 text-light-gray" />
                    ) : (
                      <FaEyeSlash className="w-5 h-5  text-light-gray" />
                    )}
                  </div>
                  
                {errors.password && (
                <span className="text-dark-red text-sm">
                  {errors.password} !
                </span>
              )}
                </div>



                <button
                  type="submit"
                  className={`w-full  text-white text-lg p-2 py-4 rounded-md hover:bg-indigo-700 mt-5
                    submitButtonDisabled ? bg-darker-blue hover:bg-light-mid-gray : `}
                  onClick={handleSubmit}
                  disabled={submitButtonDisabled}
                >
                  Log in
                </button>

                <div className="flex flex-row justify-between">
                  <Link to="/forgetpassword">
                    {" "}
                    <a
                      href="/forgot-password"
                      className="text-lg text-blue-500 hover:underline "
                    >
                      {" "}
                      Forgot Password?{" "}
                    </a>{" "}
                  </Link>

                  <Link to="/register">
                    {" "}
                    <a
                      href="/forgot-password"
                      className="text-lg text-blue-500 hover:underline text-dark-yellow"
                    >
                      {" "}
                      Register
                    </a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
