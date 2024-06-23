import { useState } from "react";
import { SearchBar } from "../components";
import LogoWithText from "../assets/Logowithtext.png";
import Logo from "../assets/Logo.png";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import PoxImg from "../assets/PoxImg.png";
import UsdxImg from "../assets/UsdxImg.png";
import {NavbarOptions}  from "../data/NavbarOptions";

const BlockchainHover = () => (
  <div className="absolute bg-white shadow-lg rounded-xl px-4 py-2">
    <div className="flex flex-row justify-between space-x-12">
      <div>
        <p className="font-medium">Nodes</p>
        <p className="font-medium py-2">Blocks</p>
        <p className="font-medium">Accounts</p>
      </div>
      <div>
        <p className="font-medium">Contacts</p>
        <p className="font-medium py-2">Transfer</p>
        <p className="font-medium">Transactions</p>
      </div>
    </div>
  </div>
);

const TokensHover = () => {
  return (
    <div className="w-32 bg-white shadow-lg rounded-xl px-4 py-2">
      <div className="flex space-x-2 items-center  pb-4">
        <img src={PoxImg} alt="" />
        <p>POX</p>
      </div>
      <div className="flex space-x-2 items-center">
        <img src={UsdxImg} alt="" />
        <p>USDX</p>
      </div>
    </div>
  );
};
const DataHover = () => (
  <div className="absolute bg-white shadow-lg rounded-xl px-4 py-2">
    <p className="font-medium whitespace-nowrap">POX Supply</p>
    <p className="font-medium pt-2">Ranking</p>
  </div>
);

const GovernanceHover = () => (
  <div className="absolute bg-white shadow-lg rounded-xl px-4 py-2">
    <p className="font-medium whitespace-nowrap">Super Representatives</p>
    <p className="font-medium py-2">Votes</p>
    <p className="font-medium whitespace-nowrap">POX Staking Governance</p>
    <p className="font-medium pt-2 whitespace-nowrap">Parameters & Proposals</p>
  </div>
);

const PoxecosystemHover = () => (
  <div className="absolute bg-white shadow-lg rounded-xl px-4 py-2">
    <p className="font-medium whitespace-nowrap">Contracts Deployment</p>
    <p className="font-medium py-2 whitespace-nowrap">Contracts Verification</p>
    <p className="font-medium whitespace-nowrap">Encoding Converter</p>
    <p className="font-medium pt-2 whitespace-nowrap">Broadcast Transaction</p>
  </div>
);

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [hoveredItem, setHoveredItem] = useState(null);

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

  return (
    <>
      <div className="bg-dark-skyblue py-2 h-16 font-medium text-lg flex items-center justify-between pl-8 relative">
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
                onMouseLeave={() => setHoveredItem(null)}
                className="relative"
    <div className="bg-dark-skyblue py-2 h-16  font-medium text-lg flex items-center justify-between pl-8">
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
            <Link to={`/${formattedKey}`} key={index}>
              <p
                className={`cursor-pointer whitespace-nowrap ${
                  currentPath === `/${formattedKey}`
                    ? "text-black rounded-3xl bg-dark-yellow px-4 py-1"
                    : "text-white px-3"
                }`}
              >
                <Link to={`/${formattedKey}`}>
                  <p
                    className={`cursor-pointer whitespace-nowrap ${
                      currentPath === `/${formattedKey}`
                        ? "text-black rounded-3xl bg-dark-yellow px-4 py-1 font-semibold"
                        : "text-white px-3"
                    }`}
                  >
                    {key}
                  </p>
                </Link>
                {hoveredItem === formattedKey && (
                  <div className="absolute top-full left-0 mt-2 z-10">
                    {renderHoverComponent()}
                  </div>
                )}
              </div>
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
    </>
  );
};

export default Navbar;
