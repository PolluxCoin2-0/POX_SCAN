import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";
import { setSignup } from "../../../redux/slice/walletSlice";

const Register = () => {
  const signupStatus = useSelector((state)=>state.wallet.signup)
  const dispatch = useDispatch();
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);

  const toggleVisibility1 = () => {
    setIsPassword(!isPassword);
  };

  const toggleVisibility2 = () => {
    setIsConfirmPassword(!isConfirmPassword);
  };

  const handleClose = () => {
    dispatch(setSignup(!signupStatus))
  };

  const [formData, setFormData] = useState({
    phoneOrEmail: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
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

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!formData.termsAccepted) {
      errors.termsAccepted = "You must accept the terms and conditions";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form data:", formData);
      // Submit form data
    } else {
      setErrors(validationErrors);
    }

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, formData.phoneOrEmail, formData.password, formData.confirmPassword, formData.termsAccepted)
    .then((res) => {
      setSubmitButtonDisabled(false);
      console.log(res);
      const user = res.user;
      console.log(user);
      navigate("/");
    })
    .catch((error) =>{
      setSubmitButtonDisabled(false);
      setErrors(error.message);
      console.log("Error", error.message)
      toast.success("Error (auth/email-already-in-use)");
  });
  };

  return (
    <div className="fixed z-10 backdrop-blur-sm min-h-screen w-full inset-0">
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="w-[650px] h-auto pl-14 pr-14 p-10 rounded-3xl bg-white shadow-md relative"
          >
            <div className="flex justify-end">
              <button type="button" onClick={handleClose}>
                <RxCross2 size={32} />
              </button>
            </div>
            <div className="flex flex-col">
              <div>
                <p className="flex justify-center text-3xl font-bold mb-8">
                  Create Account
                </p>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneOrEmail"
                className="block text-md font-medium mb-4"
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
                className="mt-1 p-2 py-3 block w-full border border-lightest-gray rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.phoneOrEmail && (
                <span className="text-dark-red text-sm">
                  {errors.phoneOrEmail} !
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-md font-medium mb-4 mt-7  "
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={isPassword ? "password" : "text"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 p-2 py-3 block w-full border border-lightest-gray rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={toggleVisibility1}
                >
                  {isPassword ? (
                    <FaEye className="w-5 h-5 text-light-gray" />
                  ) : (
                    <FaEyeSlash className="w-5 h-5 text-light-gray" />
                  )}
                </div>
              </div>
              {errors.password && (
                <span className="text-dark-red text-sm">
                  {errors.password} !
                </span>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-md font-medium mb-4 mt-7"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={isConfirmPassword ? "password" : "text"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Enter your password again"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 p-2 py-3 block w-full border border-lightest-gray rounded-xl shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={toggleVisibility2}
                >
                  {isConfirmPassword ? (
                    <FaEye className="w-5 h-5 text-light-gray" />
                  ) : (
                    <FaEyeSlash className="w-5 h-5 text-light-gray" />
                  )}
                </div>
              </div>
              {errors.confirmPassword && (
                <span
                  className="text-dark-red
               text-sm"
                >
                  {errors.confirmPassword} !
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 rounded-lg text-indigo-600 mt-8"
                />
                <span className="ml-2 text-md text-gray-700 mt-8">
                  I agree to the Privacy Policy and Terms of Services
                </span>
              </label>
              {errors.termsAccepted && (
                <span className="text-dark-red text-sm block">
                  {errors.termsAccepted} !
                </span>
              )}
            </div>
            <button type="submit" 
            className={`w-full  text-white text-lg p-2 py-4 rounded-md hover:bg-indigo-700 mt-5
              submitButtonDisabled ? bg-darker-blue hover:bg-light-mid-gray : `}
            onClick={handleSubmit} disabled={submitButtonDisabled}>Create</button>

            <p className="mt-5">
              I have an account,{" "}
              <Link to="/login">
                <span className="text-dark-yellow cursor-pointer">
                  Log in now
                </span>
              </Link>
            </p>
          </form>
        </div>
    </div>
  );
};

export default Register;
