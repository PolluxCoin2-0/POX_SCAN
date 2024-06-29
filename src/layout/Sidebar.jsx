import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavbarOptions } from "../data/NavbarOptions";
import { FaArrowLeftLong } from "react-icons/fa6";

const Sidebar = ({ children }) => {
  const [path, setPath] = useState("");
  const [submenu, setSubmenu] = useState({});
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [routePath, setRoutePath] = useState("");
  const location = useLocation();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const pathNameFromURL = location.pathname.split("/")[1];
    setRoutePath(pathNameFromURL);
    const capitalizedPath = capitalizeFirstLetter(pathNameFromURL);
    let submenuList;
    console.log("path>>>",capitalizedPath)

    if (capitalizedPath === "PoxEcosystem" || capitalizedPath==="Poxecosystem") {
      setPath("Pox Ecosystem");
      submenuList = getSubmenuList(path);
      setSubmenu(submenuList);
    } else {
      setPath(capitalizedPath);
      submenuList = getSubmenuList(capitalizedPath);
      setSubmenu(submenuList);
    }

  }, [location,path]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (key) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getSubmenuList = (path) => {
    const submenu = NavbarOptions[path];
    if (submenu) {
      return submenu;
    }
    // If path is not a direct key in NavbarOptions, check if it is a nested key in 'Data'
    if (NavbarOptions.Data[path]) {
      return NavbarOptions.Data[path];
    }
    // If no submenu found
    return {};
  };

  // Function to remove spaces from a string
const removeSpaces = (str) => {
  return str.replace(/[&\s]+/g, ''); // This removes all whitespace characters
};

  const renderSubmenu = (submenu) => {
    // Check if submenu is an array
    if (Array.isArray(submenu)) {
      return (
        <>
          {submenu.map((item, index) => (
            <li key={index}>
             <Link to={`/${routePath}/${removeSpaces(item)}`}>
              <button
                onClick={() => toggleSubmenu(item)}
                className="flex items-center p-2 text-white rounded-lg hover:bg-white hover:text-black group"
              >
                {item}
              </button>
              </Link>
            </li>
          ))}
        </>
      );
    } else if (typeof submenu === "object" && !Array.isArray(submenu)) {
      // If submenu is an object
      return (
        <>
          {Object.entries(submenu).map(([key, value], index) => (
            <li key={index}>
              <button
                onClick={() => toggleSubmenu(key)}
                className="flex items-center p-2 text-white rounded-lg hover:bg-white hover:text-black group"
              >
                {key}
              </button>
              {openSubmenus[key] && (
                <ul className="pl-4">
                  {renderSubmenu(value)}{" "}
                </ul>
              )}
            </li>
          ))}
        </>
      );
    }

    // Return null if submenu is neither array nor object
    return null;
  };

  return (
    <div className="flex h-screen">
      {isOpen && (
        <aside className="flex-none w-64 bg-black text-white">
          <div className="h-full px-3 py-4 overflow-y-auto">
            <div className="flex justify-end pr-4 pb-4">
              <FaArrowLeftLong
                size={20}
                className="cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>
            <ul className="space-y-2 font-medium">{renderSubmenu(submenu)}</ul>
          </div>
        </aside>
      )}

      <div className="children-scrollbar flex-1 h-full overflow-y-auto ">
        {children}
      </div>
    </div>
  );
}

export default Sidebar;
