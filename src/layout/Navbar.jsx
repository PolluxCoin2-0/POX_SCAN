import { SidebarOptions } from "../data/SidebarOptions";
import { SearchBar } from "../components";
import LogoWithText from "../assets/Logowithtext.png";
import Logo from "../assets/Logo.png";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="bg-dark-skyblue py-2 h-16  font-medium text-lg flex items-center justify-between pl-8">
      <div className="flex items-center space-x-10">
        <Link to="/">
        <img
          src={LogoWithText}
          alt="logo-poxscan"
          className="cursor-pointer border-r-2 border-white pr-8"
        />
        </Link>
        {Object.keys(SidebarOptions).map((key, index) => {
          const formattedKey = key.replace(/\s+/g, ""); // Remove all spaces from key
          return (
            <Link to={`/${formattedKey}`} key={index}>
              <p
                className={`cursor-pointer ${
                  currentPath === `/${formattedKey}`
                    ? "text-black rounded-3xl bg-dark-yellow px-4 py-1"
                    : "text-white px-3"
                }`}
              >
                {key}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="flex items-center justify-between space-x-6">
        <SearchBar />
        <p className="text-white cursor-pointer border-r-2 pr-6">Register</p>
        <p className="text-white cursor-pointer">Login</p>
        <button className="bg-dark-yellow py-1 px-3 rounded-xl text-black cursor-pointer">
          Connect Wallet
        </button>
        <IoNotificationsCircleOutline
          size={36}
          color="white"
          className="cursor-pointer"
        />
        <div>
          <img src={Logo} alt="logo-poxscan" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
