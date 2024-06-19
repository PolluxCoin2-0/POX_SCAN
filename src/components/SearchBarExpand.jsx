import { useState } from "react";

const SearchBarExpand = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100  pt-56">
      <form onSubmit={handleSubmit} className="flex w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search by token/ Accounts/ Contracts/ Pox Hash/ Block"
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBarExpand;
