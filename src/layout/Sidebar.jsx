import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { FaArrowLeftLong } from 'react-icons/fa';
import { NavbarOptions } from '../data/NavbarOptions';

const Sidebar = ({ children }) => {
  const [path, setPath] = useState('');
  const [submenu, setSubmenu] = useState({});
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenus, setOpenSubmenus] = useState({});
  const location = useLocation();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const pathNameFromURL = location.pathname.split('/')[1];
    const capitalizedPath = capitalizeFirstLetter(pathNameFromURL);
    setPath(capitalizedPath);
    setSubmenu(getSubmenuList(capitalizedPath));
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
    if (NavbarOptions.Data[path]) {
      return NavbarOptions.Data[path];
    }
    return {};
  };

  const removeSpaces = (str) => {
    return str.replace(/[&\s]+/g, '');
  };

  const buildPath = (parentPath, item) => {
    // Remove leading slash from parentPath to avoid double slashes in the URL
    const basePath = parentPath.replace(/^\/|\/$/g, '');
    return `/${basePath}/${removeSpaces(item)}`;
  };

  const renderSubmenu = (submenu, parentPath = '') => {
    if (Array.isArray(submenu)) {
      return (
        <>
          {submenu.map((item, index) => (
            <li key={index}>
              <Link to={buildPath(parentPath, item)}>
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
    } else if (typeof submenu === 'object' && !Array.isArray(submenu)) {
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
                <ul className="pl-4">{renderSubmenu(value, buildPath(parentPath, key))}</ul>
              )}
            </li>
          ))}
        </>
      );
    }
    return null;
  };

  return (
    <div className="flex h-screen">
      {isOpen && (
        <aside className="flex-none w-64 bg-black text-white">
          <div className="h-full px-3 py-4 overflow-y-auto">
            <div className="flex justify-end pr-4 pb-4">
              {/* <FaArrowLeftLong size={20} className="cursor-pointer" onClick={toggleSidebar} /> */}
            </div>
            <ul className="space-y-2 font-medium">{renderSubmenu(submenu, `/${path}`)}</ul>
          </div>
        </aside>
      )}
      <div className="children-scrollbar flex-1 h-full overflow-y-auto">{children}</div>
    </div>
  );
};

export default Sidebar;
