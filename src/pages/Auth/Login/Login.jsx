

import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    
  // for show and hide password
  const [isVisible, setIsVisible] = useState(true);

const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


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

  // connect with firebase - when onclick login
  const handleSubmit = (e) => {
    
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };


  
  return (
    <div className="fixed z-10 backdrop-blur-sm h-screen w-full inset-0">
    < div className="flex flex-col items-center justify-center min-h-screen w-full py-14">
    {!isModalOpen && (
       <div className='bg-white rounded-2xl'>
       <div className="flex w-[700px] pr-4 pt-4 justify-end text-light-gray cursor-pointer">
          
       <RxCross2 onClick={handleClose}  size={24}/>
       </div>
          <div className=" w-[700px] h-[570px] pl-16 pr-16 bg-white rounded-2xl shadow-md">

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
                  type={`${isVisible? "text" : "password"}`}
                  id="password"
                  name="password"
                  placeholder='Enter your password'
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-lightest-gray mb-20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  
                />
                
                
                  <div className="flex flex-row justify-end -mt-28 mr-5"
                  onClick={toggleVisibility}
                  >
  
                  {isVisible ? (
                      <FaEye className="w-5 h-5 text-light-gray" />
                    ) : (
                      <FaEyeSlash className="w-5 h-5  text-light-gray" />
                    )}
                  </div>
                   
              </div>
             
              <button type="submit" 
              className="w-full bg-darker-blue text-white text-yellow p-4 rounded-xl text-xl hover:bg-indigo-700 "
              onClick={handleSubmit}>Log in</button>
    
              <div className="flex flex-row justify-between">
              <Link to="/forgetpassword"> <a href="/forgot-password" className="text-lg text-blue-500 hover:underline "> Forgot Password? </a> </Link>
    
                <Link to="/register"> <a href="/forgot-password" className="text-lg text-blue-500 hover:underline text-dark-yellow"> Register</a></Link>
              </div>
            
              </form>
           
          </div>
          </div>
    )}
   
 </div>

    </div>
    
    
  );
};

export default Login;
