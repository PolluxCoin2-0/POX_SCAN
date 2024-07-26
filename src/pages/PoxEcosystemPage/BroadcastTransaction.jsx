import SearchBarExpand  from "../../components/SearchBarExpand";
import { useState } from "react";



const BroadcastTransaction = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Message submitted:', message);
    // Optionally, clear the textarea after submission
    setMessage('');
  };
  return (
    <div className=" px-12 pb-20">

      <div>
        <SearchBarExpand/>
      </div>

      <div>
        <p className="text-xl font-bold pb-10 ">Broadcast Transaction</p>
        <div className="bg-white rounded-xl p-10 ">
          <p className="text-lg font-bold">Broadcast Raw Transaction</p>
          <p className="pt-8 text-md text-light-gray tracking-wider">This Page Allows You To Paste A Signed Raw Transaction In Hex Format (I.E. Characters 0-9, A-F) And Broadcast It Over The POLLUX Network.</p>
        </div>
      </div>

      <div className=" mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700"></label>
          <textarea
            id="message"
            name="message"
            rows="10"
            value={message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 rounded-md  focus:outline-none resize-none "
            placeholder="Enter signed transaction hex |"
            required
          />
        </div>
        <div className="mt-6 flex items-center justify-center">
        <button className="bg-dark-yellow py-2 px-16 font-bold rounded-lg text-black cursor-pointer" >
              Upload Transaction
          </button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default BroadcastTransaction