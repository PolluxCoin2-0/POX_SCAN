import { useEffect, useState } from "react";
import { SearchBar } from "../components";
import LogoWithText from "../assets/Logowithtext.png";
import Logo from "../assets/Logo.png";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import PoxImg from "../assets/PoxImg.png";
import UsdxImg from "../assets/UsdxImg.png";
import { NavbarOptions } from "../data/NavbarOptions";
import { HiMenu } from "react-icons/hi";

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
  const location = useLocation();
  const currentPath = location.pathname;
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>

    {/* Larger Scrren Navbar */}
      <div className="hidden md:flex  bg-dark-skyblue py-2 h-16 text-lg items-center justify-between pl-8 relative w-full">
        <div className="flex items-center space-x-10">
          <Link to="/">
            <img
              src={LogoWithText}
              alt="logo-poxscan"
              className="cursor-pointer border-r-2 border-white pr-8"
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
                        : "text-white px-3"
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

        <div className="flex items-center justify-between space-x-6">
          <SearchBar />
          <Link to="/register">
            {" "}
            <p className="text-white cursor-pointer border-r-2 pr-6">
              Register
            </p>{" "}
          </Link>
          <Link to="/login">
            <p className="text-white cursor-pointer">Login</p>{" "}
          </Link>
          <Link to="/connectwallet">
            <button className="bg-dark-yellow py-1 px-3 rounded-xl text-black cursor-pointer">
              Connect Wallet
            </button>
          </Link>
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


      {/* Mobile Screen Navbar */}
      <div className="sm:block md:hidden lg:hidden xl:hidden 2xl:hidden bg-dark-skyblue flex justify-between items-center p-4">
        <Link to="/">
          <img
            src={LogoWithText}
            alt="logo-poxscan"
            className="cursor-pointe w-[80%]"
          />
        </Link>
        <div>
          <HiMenu size={24} color="white" className="cursor-pointer" onClick={()=>setIsOpen(!isOpen)} />
        </div>
      </div>
      {
        isOpen &&(
          <>
          <div className="fixed inset-0 bg-dark-skyblue py-6 px-4 z-20 top-14 min-h-fit">
            {Object.keys(NavbarOptions).map((key, index) => {
            const formattedKey = key.replace(/\s+/g, ""); // Remove all spaces from key
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredItem(formattedKey)}
                //  onMouseLeave={() => setHoveredItem(null)}
                className="relative mb-2"
              >
                <Link to={`/${formattedKey}`}>
                  <p
                    className={`inline cursor-pointer whitespace-nowrap font-semibold ${
                      currentPath === `/${formattedKey}`
                        ? "text-black rounded-lg bg-dark-yellow mx-2 px-4 py-1"
                        : "text-white px-3"
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
        <Link to="/register">
            <p className="text-white cursor-pointer font-semibold mx-3 pb-1">
              Register
            </p>
          </Link>
          <Link to="/login">
            <p className="text-white cursor-pointer font-semibold mx-3 pb-4">Login</p>{" "}
          </Link>
        <Link to="/connectwallet">
            <button className="bg-dark-yellow py-1 px-3 rounded-xl font-semibold text-black cursor-pointer mx-2">
              Connect Wallet
            </button>
          </Link>
          </div>
        </>
        )
      }
    </>
  );
};

export default Navbar;