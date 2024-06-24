import { useState } from "react";
import { HiOutlineChevronDown } from 'react-icons/hi';

const SearchBar = ({ onSearch }) => {
  // const [query, setQuery] = useState("");

  const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSearch(query);
  // };

  return (
   <div className="pt-2 relative mx-auto text-gray-600">
    
    <input
      className=" bg-white h-10 w-full m-10 rounded-3xl text-sm pl-5 focus:outline-none placeholder:text-black placeholder:font-medium"
      type="search"
      name="search"
      placeholder="Search..."
    />
    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
      <svg
        className="text-black h-4 w-4 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 56.966 56.966"
        style={{ enableBackground: "new 0 0 56.966 56.966" }}
        xmlSpace="preserve"
        width="512px"
        height="512px"
      >
        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 
         s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 
          c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
      </svg>

      <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md mt-4  px-4 py-2 bg-white text-sm text-light-gray font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    onClick={toggleDropdown}
                >
                    All <HiOutlineChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </button>
            </div>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Daily</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Weekly</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Monthly</a>
                    </div>
                </div>
            )}
        </div>

    </button>
  </div>
  );
};

export default SearchBar;
