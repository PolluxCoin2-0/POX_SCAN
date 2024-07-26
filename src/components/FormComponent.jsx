import { useState } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi';


const FormComponent = () => {


  // const [isOpened, setIsOpened] = useState(false);

  // const toggleDropdown1 = () => {
  //   setIsOpened(!isOpened);
  // };

  const [isDrop, setIsDrop] =useState(false);

  const toggleDrop = () => {
    setIsDrop(!isDrop);
  }

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
    <div className=" w-full mx-auto mt-10 p-20 pb-2 bg-white rounded-xl">
      {/* <h2 className="text-2xl font-semibold mb-6">Form</h2> */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between w-full space-x-20">
            <div className="w-[50%]">

              {/* For Contract Address */}
            <div className="mb-4 flex flex-row items-center">
            <label htmlFor="currentAddress" className="block text-lg font-medium  text-light-gray  mr-8 whitespace-nowrap">Contract Address</label>
            <input
            type="text"
            id="currentAddress"
            name="currentAddress"
            placeholder="Enter Contract Address"
            value={formData.currentAddress}
            onChange={handleInputChange}
            className={`mt-1 block w-[400px] px-3 py-2 border ${errors.currentAddress ? 'border-red-300' : 'border-gray-300'} text-light-gray border-lightest-gray rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
            />
            {errors.currentAddress && <p className="mt-1 text-red-500 text-sm">{errors.currentAddress}</p>}
          </div>


           {/* For Optimization */}
           <div className="mb-4 flex flex-row items-center">
           <label htmlFor="optimization" className="block text-lg font-medium text-light-gray  mr-16">Optimization</label>
           <select className={`mt-1 pl-2 block w-[400px] py-2 border ${errors.compiler ? 'border-red-300' : 'border-gray-300'} text-light-gray border-lightest-gray rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}>
           <option>Yes</option>
           <option>No</option>
           </select>
           {errors.optimization && <p className="mt-1 text-red-500 text-sm">{errors.optimization}</p>}
           </div>
        

           {/* for compiler */}
           <div className="mb-4 flex flex-row  items-center">
           <label htmlFor="compiler" className="block text-lg font-medium text-light-gray   mr-24">Compiler</label>
           <div>
          <select   className={`mt-1 pl-2 block w-[400px] py-2 border ${errors.compiler ? 'border-red-300' : 'border-gray-300'} text-light-gray border-lightest-gray rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}>
          <option >Select Compiler</option>
          <option value="pollux_v0.8.23+commit.5f1834b">pollux_v0.8.23+commit.5f1834b</option>
          <option value="pollux_v0.8.18+commit.f18bedfe">pollux_v0.8.18+commit.f18bedfe</option>
          <option value="pollux_v0.8.11+commit.b01f328">pollux_v0.8.11+commit.b01f328</option>
          <option value="pollux_v0.8.7+commit.2128cde">pollux_v0.8.7+commit.2128cde</option>
          <option value="pollux_v0.8.6+commit.0e36fba">pollux_v0.8.6+commit.0e36fba</option>
          <option value="pollux_v0.8.0+commit.7c2e641">pollux_v0.8.0+commit.7c2e641</option>
          <option value="pollux_v0.7.7+commit.0423f3a">pollux_v0.7.7+commit.0423f3a</option>
          <option value="pollux_v0.7.6+commit.d1802f2">pollux_v0.7.6+commit.d1802f2</option>
          <option value="pollux_v0.7.0+commit.d15088b">pollux_v0.7.0+commit.d15088b </option>
          <option value="pollux_v0.6.13+commit.b826719">pollux_v0.6.13+commit.b826719</option>
          <option value="pollux_v0.6.12+commit.5e80783">pollux_v0.6.12+commit.5e80783</option>
          <option value="pollux_v0.6.8+commit.f8ac115">pollux_v0.6.8+commit.f8ac115</option>
          <option value="pollux_v0.6.2+commit.e3d402b">pollux_v0.6.2+commit.e3d402b</option>
          <option value="pollux_v0.6.0+commit.5d5a877">pollux_v0.6.0+commit.5d5a877</option>
          <option value="pollux_v0.5.18+commit.6124c56">pollux_v0.5.18+commit.6124c56</option>
          <option value="pollux_v0.5.17+commit.44338cd">pollux_v0.5.17+commit.44338cd</option>
          <option value="pollux_v0.5.15+commit.ed412d1">pollux_v0.5.15+commit.ed412d1</option>
          <option value="pollux_v0.5.14+commit.5ce5daf">pollux_v0.5.14+commit.5ce5daf</option>
          <option value="pollux_v0.5.13+commit.9a0da31">pollux_v0.5.13+commit.9a0da31</option>
          <option value="pollux_v0.5.12+commit.29ca5e6">pollux_v0.5.12+commit.29ca5e6</option>
          <option value="pollux_v0.5.10+commit.a1d534e">pollux_v0.5.10+commit.a1d534e</option>
          <option value="pollux_v0.5.9+commit.ef2a04b">pollux_v0.5.9+commit.ef2a04b</option>
          <option value="pollux_v0.5.8+commit.1f148fe">pollux_v0.5.8+commit.1f148fe</option>
          <option value="pollux_v0.5.4+commit.1d7181d">pollux_v0.5.4+commit.1d7181d</option>
          <option value="pollux_v0.4.25+commit.69a1e72">pollux_v0.4.25+commit.69a1e72</option>
          </select>
        </div>
        
          {errors.compiler && <p className="mt-1 text-red-500 text-sm">{errors.compiler}</p>} 
        </div>

        </div>
         

         
        <div className="w-[50%] ">
          {/* for contract name */}
        <div className="mb-4 flex flex-row items-center">

          <label htmlFor="contractName" className="block text-lg font-medium text-light-gray  mr-9 whitespace-nowrap">Contract Name</label>
          <input
            type="text"
            id="contractName"
            name="contractName"
            placeholder="Enter Contractor name"
            value={formData.contractName}
            onChange={handleInputChange}
            className={`mt-1 block w-[400px] ml-1 px-3 py-2 border ${errors.contractName ? 'border-red-300' : 'border-gray-300'} border-lightest-gray rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            required
           />
          {errors.contractName && <p className="mt-1 text-red-500 text-sm">{errors.contractName}</p>}
          </div>

           {/* for license */}
          <div className="mb-4 flex flex-row items-center">
          <label htmlFor="license" className="block text-lg font-medium text-dark-red  mr-24">License:</label>
          <select  className={`mt-1 block w-[400px] px-3 py-2 border ${errors.license ? 'border-red-300' : 'border-gray-300'} text-light-gray border-lightest-gray rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}>
            <option>Please select License</option>
            <option value="No License(None)">No License(None)</option>
            <option value="The Unlicense(Unlicense)">The Unlicense(Unlicense)</option>
            <option value="MIT license">MIT license</option>
            <option value="GNU General Public License v2.0(GNU GPLv2)">GNU General Public License v2.0(GNU GPLv2)</option>
            <option value="GNU General Public License v3.0(GNU GPLv3)">GNU General Public License v3.0(GNU GPLv3)</option>
            <option value="GNU Lesser General Public License v2.1(GNU LGPLv2.1)">GNU Lesser General Public License v2.1(GNU LGPLv2.1)</option>
            <option value="GNU Lesser General Public License v3.0(GNU LGPLv3)">GNU Lesser General Public License v3.0(GNU LGPLv3)</option>
            <option value="BSD 2-clause “Simplified” license(BSD-2-Clause)">BSD 2-clause “Simplified” license(BSD-2-Clause)</option>
            <option value="BSD 3-clause “New” Or “Revised” license(BSD-3-Clause)">BSD 3-clause “New” Or “Revised” license(BSD-3-Clause)</option>
            <option value="Mozilla Public License 2.0(MPL-2.0)">Mozilla Public License 2.0(MPL-2.0)</option>
            <option value="Open Software License 3.0(OSL-3.0)">Open Software License 3.0(OSL-3.0)</option>
            <option value="Apache 2.0(Apache-2.0)">Apache 2.0(Apache-2.0)</option>
            <option value="GNU Affero General Public License (GNU AGPLv3)">GNU Affero General Public License (GNU AGPLv3)</option>
            <option value="Business Source License (BSL 1.1)">Business Source License (BSL 1.1)</option>
          </select>
         
          {errors.license && <p className="mt-1 text-red-500 text-sm">{errors.license}</p>}
        </div>



        {/* For runs */}
        <div className="mb-4 flex flex-row items-center">
          <label htmlFor="runs" className="block text-lg font-medium text-light-gray  mr-28">Runs </label>
          <input
            type="text"
            id="runs"
            name="runs"
            placeholder="0"
            value={formData.runs}
            onChange={handleInputChange}
            className={`mt-1 block w-[400px] ml-2 px-3 py-2 border ${errors.runs ? 'border-red-300' : 'border-gray-300'} border-lightest-gray rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
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
