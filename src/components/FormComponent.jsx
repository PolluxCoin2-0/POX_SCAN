import { useState } from 'react';


const FormComponent = () => {
  // State variables to store form data and errors
  const [formData, setFormData] = useState({
    currentAddress: '',
    optimization: '',
    compiler: '',
    contractName: '',
    license: '',
    runs: ''
  });
  const [errors, setErrors] = useState({
    currentAddress: '',
    optimization: '',
    compiler: '',
    contractName: '',
    license: '',
    runs: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error message if user starts typing again
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    let valid = true;
    const newErrors = {
      currentAddress: '',
      optimization: '',
      compiler: '',
      contractName: '',
      license: '',
      runs: ''
    };

    // Simple required validation
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key} is required`;
        valid = false;
      }
    });

    // If any field is invalid, update errors state and prevent submission
    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission logic here (e.g., send data to backend)
    console.log(formData);
    // Optionally, reset form fields after successful submission
    setFormData({
      currentAddress: '',
      optimization: '',
      compiler: '',
      contractName: '',
      license: '',
      runs: ''
    });
  };

  return (
    <div className=" w-full mx-auto mt-10 p-20 pb-2 bg-white rounded-lg ">
      {/* <h2 className="text-2xl font-semibold mb-6">Form</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between">
            <div className="w-[40%]">
        <div className="mb-4 flex flex-row items-center">
          <label htmlFor="currentAddress" className="block text-lg font-medium  text-light-gray  mr-8 whitespace-nowrap">Contract Address</label>
          <input
            type="text"
            id="currentAddress"
            name="currentAddress"
            placeholder="Contract Address"
            value={formData.currentAddress}
            onChange={handleInputChange}
            className={`mt-1 block w-full px-3 py-2 border ${errors.currentAddress ? 'border-red-300' : 'border-gray-300'} border-lightest-gray rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
          />
          {errors.currentAddress && <p className="mt-1 text-red-500 text-sm">{errors.currentAddress}</p>}
        </div>
        <div className="mb-4 flex flex-row items-center">
          <label htmlFor="optimization" className="block text-lg font-medium text-light-gray  mr-16">Optimization</label>
          <input
            type="text"
            id="optimization"
            name="optimization"
            placeholder='Optimization'
            value={formData.optimization}
            onChange={handleInputChange}
            className={`mt-1 block w-full px-3 py-2 border ${errors.optimization ? 'border-red-300' : 'border-gray-300'} border-lightest-gray rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
          />
          {errors.optimization && <p className="mt-1 text-red-500 text-sm">{errors.optimization}</p>}
        </div>
        <div className="mb-4 flex flex-row  items-center">
          <label htmlFor="compiler" className="block text-lg font-medium text-light-gray   mr-24">Compiler</label>
          <input
            type="text"
            id="compiler"
            name="compiler"
            placeholder="Please select compiler"
            value={formData.compiler}
            onChange={handleInputChange}
            className={`mt-1 block w-full px-3 py-2 border ${errors.compiler ? 'border-red-300' : 'border-gray-300'} border-lightest-gray rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
        
          />
          
          {errors.compiler && <p className="mt-1 text-red-500 text-sm">{errors.compiler}</p>}
        </div>

        </div>

        <div className="w-[40%]">
        <div className="mb-4 flex flex-row items-center">
          <label htmlFor="contractName" className="block text-lg font-medium text-light-gray  mr-9 whitespace-nowrap">Contract Name</label>
          <input
            type="text"
            id="contractName"
            name="contractName"
            placeholder="Please enter the name of the main contractor"
            value={formData.contractName}
            onChange={handleInputChange}
            className={`mt-1 block w-full px-3 py-2 border ${errors.contractName ? 'border-red-300' : 'border-gray-300'} border-lightest-gray rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
          />
          {errors.contractName && <p className="mt-1 text-red-500 text-sm">{errors.contractName}</p>}
        </div>
        <div className="mb-4 flex flex-row items-center">
          <label htmlFor="license" className="block text-lg font-medium text-dark-red  mr-24">License:</label>
          <input
            type="text"
            id="license"
            name="license"
            placeholder="Please select licence"
            value={formData.license}
            onChange={handleInputChange}
            className={`mt-1 block w-full px-3 py-2 border ${errors.license ? 'border-red-300' : 'border-gray-300'} border-lightest-gray rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
          />
          {errors.license && <p className="mt-1 text-red-500 text-sm">{errors.license}</p>}
        </div>
        <div className="mb-4 flex flex-row items-center">
          <label htmlFor="runs" className="block text-lg font-medium text-light-gray  mr-28">Runs</label>
          <input
            type="text"
            id="runs"
            name="runs"
            value={formData.runs}
            onChange={handleInputChange}
            className={`mt-1 block w-full px-3 py-2 border ${errors.runs ? 'border-red-300' : 'border-gray-300'} border-lightest-gray rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
          />
          {errors.runs && <p className="mt-1 text-red-500 text-sm">{errors.runs}</p>}
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Submit
          </button>
          </div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
