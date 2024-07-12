import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { NavbarOptions } from "../data/NavbarOptions";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ children }) => {
  const [path, setPath] = useState("");
  const [submenu, setSubmenu] = useState({});
  const [openSubmenus, setOpenSubmenus] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const pathNameFromURL = location.pathname.split("/")[1];
    const capitalizedPath = capitalizeFirstLetter(pathNameFromURL);
    let submenuList;

    if (
      capitalizedPath === "PoxEcosystem" ||
      capitalizedPath === "Poxecosystem"
    ) {
      setPath("Pox Ecosystem");
      submenuList = getSubmenuList(path);
      setSubmenu(submenuList);
    } else {
      setPath(capitalizedPath);
      submenuList = getSubmenuList(capitalizedPath);
      setSubmenu(submenuList);
    }
  }, [location, path]);

  const toggleSubmenu = (key, path) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    navigate(path);
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
    return str.replace(/[&\s]+/g, "");
  };

  const buildPath = (parentPath, item) => {
    // Remove leading slash from parentPath to avoid double slashes in the URL
    const basePath = parentPath.replace(/^\/|\/$/g, "").replace(/\s+/g, "");
    return `/${basePath}/${removeSpaces(item)}`;
  };

  const isActiveRoute = (menuItemPath) => {
    return location.pathname.startsWith(menuItemPath);
  };

  const renderSubmenu = (submenu, parentPath = "") => {
    if (Array.isArray(submenu)) {
      return (
        <>
          {submenu.map((item, index) => (
            <li key={index}>
              <Link to={buildPath(parentPath, item)}>
                <button
                  onClick={() => toggleSubmenu(item, buildPath(parentPath, item))}
                  className={`flex items-center p-2  rounded-lg group font-semibold ${
                    isActiveRoute(buildPath(parentPath, item))
                      ? "bg-dark-yellow text-black px-4 my-2"
                      : "hover:bg-white hover:text-black hover:px-4"
                  }`}
                >
                  {item}
                </button>
              </Link>
            </li>
          ))}
        </>
      );
    } else if (typeof submenu === "object" && !Array.isArray(submenu)) {
      return (
        <>
          {Object.entries(submenu).map(([key, value], index) => (
            <li key={index}>
              <button
                onClick={() => toggleSubmenu(key, buildPath(parentPath, key))}
                className={`flex items-center p-2 text-white rounded-lg whitespace-nowrap hover:bg-white hover:text-black group
                 ${openSubmenus[key] ? "bg-dark-brown mb-2 list-disc" : ""}`}
              >
                {openSubmenus[key] && <BsDot size={28} className="mt-1 " />}
                {key}{" "}
                {openSubmenus[key] ? (
                  <MdKeyboardArrowUp className="mt-1 ml-2" size={22} />
                ) : (
                  <MdOutlineKeyboardArrowDown className="mt-1 ml-2" size={22} />
                )}
              </button>
              {openSubmenus[key] && (
                <ul className="pl-4 whitespace-nowrap font-semibold">
                  {renderSubmenu(value, buildPath(parentPath, key))}
                </ul>
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
      <aside className="hidden md:flex w-64 bg-black text-white">
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium text-center">
            {renderSubmenu(submenu, `/${path}`)}
          </ul>
        </div>
      </aside>
      <div className="children-scrollbar flex-1 h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
