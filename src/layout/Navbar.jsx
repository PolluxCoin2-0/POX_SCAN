import { useEffect, useState } from "react";
import { SearchBar } from "../components";
import LogoWithText from "../assets/Logowithtext.png";
import Logo from "../assets/Logo.png";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PoxImg from "../assets/PoxImg.png";
import UsdxImg from "../assets/UsdxImg.png";
import { NavbarOptions } from "../data/NavbarOptions";
import { HiMenu } from "react-icons/hi";
import { MdKeyboardArrowDown, MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import HoverWalletPage from "../pages/ConnectWalletPage/HoverWalletPage";
import { shortenString } from "../utils/shortenString";
import Notification from "./Notification";
import { setLogin, setSignup } from "../redux/slice/walletSlice";

const BlockchainHover = () => (
  <div className="absolute bg-white shadow-lg rounded-xl px-4 py-2">
    <div className="flex flex-row justify-between space-x-12">
      <div>
        <Link to="/blockchain/nodes">
          {" "}
          <p className="font-medium">Nodes</p>
        </Link>
        <Link to="/blockchain/blocks">
          {" "}
          <p className="font-medium py-2">Blocks</p>
        </Link>
        <Link to="/blockchain/accounts">
          {" "}
          <p className="font-medium">Accounts</p>
        </Link>
      </div>
      <div>
        <Link to="/blockchain/contacts">
          {" "}
          <p className="font-medium">Contacts</p>
        </Link>
        <Link to="/blockchain/transfer">
          {" "}
          <p className="font-medium py-2">Transfer</p>
        </Link>
        <Link to="/blockchain/transactions">
          {" "}
          <p className="font-medium">Transactions</p>
        </Link>
      </div>
    </div>
  </div>
);

const TokensHover = () => {
  return (
    <div className="w-32 bg-white shadow-lg rounded-xl px-4 py-2">
      <div className="flex space-x-2 items-center pb-4">
        <img src={PoxImg} alt="" />
        <Link to="/tokens/pox">
          {" "}
          <p>POX</p>
        </Link>
      </div>
      <div className="flex space-x-2 items-center">
        <img src={UsdxImg} alt="" />
        <Link to="/tokens/usdx">
          {" "}
          <p>USDX</p>
        </Link>
      </div>
    </div>
  );
};

const DataHover = () => (
  <div className="absolute bg-white shadow-lg rounded-xl px-4 py-2">
    <Link to="/data/poxsupply">
      <p className="font-medium whitespace-nowrap">POX Supply</p>
    </Link>
    <Link to="/data/ranking">
      <p className="font-medium pt-2">Ranking</p>
    </Link>
  </div>
);

const GovernanceHover = () => (
  <div className="absolute bg-white shadow-lg rounded-xl px-4 py-2">
    <Link to="/governance/superrepresentatives">
      <p className="font-medium whitespace-nowrap">Super Representatives</p>
    </Link>
    <Link to="/governance/votes">
      <p className="font-medium py-2">Votes</p>
    </Link>
    <Link to="/governance/poxstakinggovernance">
      {" "}
      <p className="font-medium whitespace-nowrap">POX Staking Governance</p>
    </Link>
    <Link to="/governance/parametersproposals">
      <p className="font-medium pt-2 whitespace-nowrap">
        Parameters & Proposals
      </p>
    </Link>
  </div>
);

const PoxecosystemHover = () => (
  <div className="absolute bg-white shadow-lg rounded-xl px-4 py-2">
    <Link to="/poxecosystem/contractsdeployment">
      <p className="font-medium whitespace-nowrap">Contracts Deployment</p>
    </Link>
    <Link to="/poxecosystem/contractsverification">
      <p className="font-medium py-2 whitespace-nowrap">
        Contracts Verification
      </p>
    </Link>
    <Link to="/poxecosystem/encodingconverter">
      {" "}
      <p className="font-medium whitespace-nowrap">Encoding Converter</p>
    </Link>
    <Link to="/poxecosystem/broadcasttransaction">
      {" "}
      <p className="font-medium pt-2 whitespace-nowrap">
        Broadcast Transaction
      </p>
    </Link>
  </div>
);

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showNetOptions, setShowNetOptions] = useState(false);
  const [path, setPath] = useState("");
  const [submenu, setSubmenu] = useState({});
  const [openSubmenus, setOpenSubmenus] = useState({});
  const [openWallet, setOpenWallet] = useState(false);
  const walletAddress = useSelector((state)=>state.wallet.address);
  const loginStatus = useSelector((state)=>state.wallet.login);
  const signupStatus = useSelector((state)=>state.wallet.signup)


  const renderHoverComponent = () => {
    switch (hoveredItem) {
      case "Blockchain":
        return <BlockchainHover />;
      case "Tokens":
        return <TokensHover />;
      case "Data":
        return <DataHover />;
      case "Governance":
        return <GovernanceHover />;
      case "PoxEcosystem":
        return <PoxecosystemHover />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".hover-menu") === null) {
        setHoveredItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
        <div className="pl-4 pb-2">
          {submenu.map((item, index) => (
            <div key={index} className="mb-2">
              <Link to={buildPath(parentPath, item)}>
                <button
                  onClick={() => toggleSubmenu(item, buildPath(parentPath, item))}
                  className={`flex justify-start items-center p-2 rounded-lg group font-semibold w-full ${
                    isActiveRoute(buildPath(parentPath, item))
                      ? "bg-dark-yellow text-black"
                      : "hover:bg-white hover:text-black"
                  }`}
                >
                  {item}
                </button>
              </Link>
            </div>
          ))}
        </div>
      );
    } else if (typeof submenu === "object" && !Array.isArray(submenu)) {
      return (
        <div className="pl-4">
          {Object.entries(submenu).map(([key, value], index) => (
            <div key={index} className="mb-2">
              <button
                onClick={() => toggleSubmenu(key, buildPath(parentPath, key))}
                className={`flex justify-between items-center p-2 rounded-lg group font-semibold w-full ${
                  isActiveRoute(buildPath(parentPath, key))
                    ? "bg-dark-yellow text-black"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                <span>{key}</span>
                {openSubmenus[key] ? (
                  <MdKeyboardArrowUp className="group-hover:text-black" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="group-hover:text-black" />
                )}
              </button>
              {openSubmenus[key] && (
                <div className="mt-2">
                  {renderSubmenu(value, buildPath(parentPath, key))}
                </div>
              )}
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
       {/* Larger Scrren Navbar */}
       <div className="hidden md:hidden lg:flex xl:flex 2xl:flex bg-dark-skyblue py-2 h-16 text-lg 
       items-center justify-between lg:pl-2 pl-8 relative w-full">
        <div className="flex items-center lg:space-x-0 xl:space-x-2 2xl:space-x-10">
          <Link to="/" className="lg:w-32">
            <img
              src={LogoWithText}
              alt="logo-poxscan"
              className="cursor-pointer border-r-2 border-white lg:pr-2 pr-8"
            />
          </Link>
          {Object.keys(NavbarOptions).map((key, index) => {
            const formattedKey = key.replace(/\s+/g, ""); // Remove all spaces from key
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredItem(formattedKey)}
                //  onMouseLeave={() => setHoveredItem(null)}
                className="relative"
              >
                <Link to={`/${formattedKey}`}>
                  <p
                    className={`cursor-pointer whitespace-nowrap font-semibold ${
                      currentPath === `/${formattedKey}`
                        ? "text-black rounded-3xl bg-dark-yellow px-4 py-1"
                        : "text-white lg:px-2 px-3"
                    }`}
                  >
                    {key}
                  </p>
                </Link>
                {hoveredItem === formattedKey && (
                  <div className="absolute top-full left-0 mt-2 z-10 hover-menu">
                    {renderHoverComponent()}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between lg:space-x-3 space-x-6 relative">
          <SearchBar />
            {" "}
            <p className="text-white  cursor-pointer border-r-2 lg:pr-2 pr-6" 
            onClick={()=>dispatch(setSignup(!signupStatus))}>
              Register
            </p>{" "}
            <p className="text-white cursor-pointer"
            onClick={()=>dispatch(setLogin(!loginStatus))}
            >Login</p>{" "}
          <Link to="/connectwallet">
            <button className="bg-dark-yellow py-1  px-3 rounded-xl text-black cursor-pointer whitespace-nowrap" onClick={()=>setOpenWallet(!openWallet)}>
              {walletAddress.length>0 ? shortenString(walletAddress,6):"Connect Wallet"}
            </button>
          </Link>
          {
         walletAddress.length>0 && 
          openWallet && 
          <div className="absolute top-14 right-1 ">
            <HoverWalletPage/>
          </div>
            }
          <IoNotificationsCircleOutline
            size={36}
            color="white"
            className="cursor-pointer"
          />
          <div onClick={()=>setShowNetOptions(!showNetOptions)}>
            <img src={Logo} alt="logo-poxscan" className="cursor-pointer" />
          </div>
          { showNetOptions && (
            <div className="absolute top-12 right-2 font-medium bg-white px-6 py-2 shadow-lg rounded-lg z-20">
              <p className="cursor-pointer">Testnet</p>
              <p className="cursor-pointer">Mainnet</p>
            </div>
          )
          }
        </div>
      </div>

      {/* Mobile submenu */}
      <div className="sm:block md:flex lg:hidden xl:hidden 2xl:hidden bg-dark-skyblue flex justify-between items-center p-4 z-50">
        <Link to="/">
          <img
            src={LogoWithText}
            alt="logo-poxscan"
            className="cursor-pointer w-[80%]"
          />
        </Link>
        <div>
          <HiMenu size={24} color="white" className="cursor-pointer" onClick={()=>setIsOpen(!isOpen)} />
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-mid-light-gray w-full flex flex-col p-4 ">
          {Object.keys(NavbarOptions).map((key) => (
            <div key={key} className="mb-2">
              <button
                onClick={() => toggleSubmenu(key, `/${key.toLowerCase()}`)}
                className={`flex justify-between items-center p-2 rounded-lg group font-semibold w-full ${
                  isActiveRoute(`/${key.toLowerCase()}`)
                    ? "bg-light-sky-blue text-black"
                    : "hover:bg-white hover:text-black"
                }`}
              >
                <span>{key}</span>
                {openSubmenus[key] ? (
                  <MdKeyboardArrowUp className="group-hover:text-black" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="group-hover:text-black" />
                )}
              </button>
              {openSubmenus[key] && (
                <div className="mt-2">{renderSubmenu(NavbarOptions[key], key)}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
 