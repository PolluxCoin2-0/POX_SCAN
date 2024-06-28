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
    console.log(pathNameFromURL)
    const capitalizedPath = capitalizeFirstLetter(pathNameFromURL);
    setPath(capitalizedPath);

    const submenuList = getSubmenuList(capitalizedPath);
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
    console.log(submenu)
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
    console.log(Array.isArray(submenu))
    return Object.entries(submenu).map(([key, value], index) => {
      if (Array.isArray(value)) {
        return (
          <li key={index}>
            <button
              onClick={() => toggleSubmenu(key)}
              className="flex items-center p-2 text-white rounded-lg hover:bg-white hover:text-black  group"
            >
              {key}
            </button>
            {openSubmenus[key] && (
              <ul className="pl-4">
                {value.map((subItem, subIndex) => (
                  <li key={subIndex} className="flex items-center p-2 text-white rounded-lg hover:bg-white hover:text-black group">
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      } else if (typeof value === "object") {
        return (
          <li key={index}>
            <button
              onClick={() => toggleSubmenu(key)}
              className="flex items-center p-2 text-white rounded-lg hover:bg-white hover:text-black  group"
            >
              {key}
            </button>
            {openSubmenus[key] && (
              <ul className="pl-4">
                {renderSubmenu(value)}
              </ul>
            )}
          </li>
        );
      }
      return null;
    });
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
        <div className="p-4 border-2  border-dashed rounded-lg dark:border-light-sky-blue">
          {children}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
