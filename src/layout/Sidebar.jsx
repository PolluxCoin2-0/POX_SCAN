import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavbarOptions } from "../data/NavbarOptions";

const Sidebar = ({children}) => {
  const [path, setPath] = useState("");
  const [submenu, setSubmenu] = useState({});
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const location = useLocation();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const pathNameFromURL = location.pathname.split("/")[1];
    const capitalizedPath = capitalizeFirstLetter(pathNameFromURL);
    if(capitalizedPath==="PoxEcosystem")
      {
        setPath("Pox Ecosystem")
      }
      else{
        setPath(capitalizedPath)
      }

      let submenuList;

      if(capitalizedPath==="PoxEcosystem"){
        submenuList = getSubmenuList("Pox Ecosystem");
      }
      else{
        submenuList = getSubmenuList(capitalizedPath);
      }

    setSubmenu(submenuList);
  }, [location]);

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

  const renderSubmenu = (submenu) => {
    // Check if submenu is an array
    if (Array.isArray(submenu)) {
      return (
        <>
          {submenu.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => toggleSubmenu(item)}
                className="flex items-center p-2 text-white rounded-lg hover:bg-white hover:text-black group"
              >
                {item}
              </button>
              {openSubmenus[item] && (
                <ul className="pl-4">
                  {/* Here you can render additional nested items if needed */}
                </ul>
              )}
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
                  {renderSubmenu(value)} {/* Recursively render nested submenu */}
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
    <>
      <aside
        className="fixed top-16 left-0 z-40 w-64 h-screen bg-black text-white">
        <div className="h-full px-3 py-4 overflow-y-auto ">
          <ul className="space-y-2 font-medium">
            {renderSubmenu(submenu)}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4">
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
