import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex  justify-center  bg-gray-100 pt-8">
      <form onSubmit={handleSubmit} className="flex w-full px-12">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search by token/ Accounts/ Contracts/ Pox Hash/ Block"
          className="w-full rounded-xl flex-grow px-4 py-3 outline-none"
        />
        <button
          type="submit"
          className=" px-4 py-2 font-semibold bg-blue-500 rounded-r 
          hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Search
        </button>
        <p className="px-3 bg-light-gray rounded-md py-0">/
        </p>
      </form>
    </div>
  );
};

export default SearchBar;
