import { useState } from "react";
import { BsFillLightningChargeFill, BsSend, BsTagsFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { MdKeyboardArrowRight, MdNoteAlt } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TbArrowsExchange } from "react-icons/tb";
import QRCode from "qrcode.react";

const SendComponent = ({ onClose }) => {
  return (
    <div className="bg-light-gray p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="flex justify-end pr-4">
        <RxCross2 color="gray" onClick={onClose} className="cursor-pointer" />
      </div>
      <p className="text-xl mb-4">Send</p>
      <div className="mb-5">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Receiving Account
        </label>
        <input
          type="text"
          placeholder="Please enter a receiving account"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

const ReceiveComponent = ({ onClose }) => {
    const [receivingAccount, setReceivingAccount] = useState("");
  
    const handleInputChange = (e) => {
      setReceivingAccount(e.target.value);
    };
  
    const handleSaveQRCode = () => {
      const canvas = document.querySelector("canvas");
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "qrcode.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
  
    return (
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-lg mx-auto border border-gray-200 w-3/4">
        <div className="flex justify-end mb-0">
          <RxCross2 color="gray" onClick={onClose} className="cursor-pointer text-xl hover:text-black transition" />
        </div>
        <p className="text-2xl font-semibold text-gray-800 mb-4 text-center">Account QR Code</p>
        <div className="mb-6">
          <label
            htmlFor="receivingAccount"
            className="block mb-2 text-base font-semibold text-gray-700"
          >
            Receiving Account
          </label>
          <input
            type="text"
            id="receivingAccount"
            placeholder="Please enter receiving account"
            value={receivingAccount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none transition placeholder:text-base"
          />
        </div>
        <div className="flex justify-center mb-10">
          <QRCode value={receivingAccount || "default"} size={200} />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSaveQRCode}
            className="bg-dark-midblue text-white px-6 py-3 rounded-lg shadow-md focus:outline-none focus:border-none transition"
          >
            Save QR Code
          </button>
        </div>
      </div>
    );
  };
  

const MultiSignatureComponent = ({ onClose }) => {
  return (
    <div className="bg-light-gray p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="flex justify-end pr-4">
        <RxCross2 color="gray" onClick={onClose} className="cursor-pointer" />
      </div>
      <p className="text-xl mb-4">Multi-Signature Transfer</p>
      <div className="mb-5">
        <label
          htmlFor="text"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Transfer Details
        </label>
        <input
          type="text"
          placeholder="Please enter transfer details"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

const ExitWalletComponent = ({ onClose }) => {
  return (
    <div className="bg-light-gray p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="flex justify-end pr-4">
        <RxCross2 color="gray" onClick={onClose} className="cursor-pointer" />
      </div>
      <p className="text-xl mb-4">Exit Wallet</p>
      <p>Are you sure you want to exit the wallet?</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
        Exit
      </button>
    </div>
  );
};

const HoverWalletPage = () => {
  const [activeComponent, setActiveComponent] = useState("");

  const handleComponentClose = () => {
    setActiveComponent("");
  };

  return (
    <>
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
        {/* User profile pic, Wallet address, and copy button */}
        <div className="flex items-center space-x-2 mb-6">
          <HiUserCircle size={40} className="text-gray-500" />
          <p className="flex-grow text-gray-700 text-sm overflow-hidden overflow-ellipsis whitespace-nowrap">
            PR58ATVJNmiGkG9KKEiiUcKVrBga45jrjk
          </p>
          <IoCopyOutline
            size={24}
            className="text-gray-500 cursor-pointer hover:text-gray-700"
          />
        </div>

        {/* Amount */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-bold text-2xl text-gray-700">$0</p>
          <div className="flex items-center text-gray-500 cursor-pointer hover:text-gray-700">
            <p className="text-sm">Asset Management</p>
            <MdKeyboardArrowRight size={20} />
          </div>
        </div>

        {/* Energy and Bandwidth */}
        <div className="flex space-x-4 mb-6">
          {/* Energy card */}
          <div className="bg-[#fff4d6] rounded-lg p-4 flex-1">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm">Energy</p>
              <div className="flex items-center text-red-600 cursor-pointer hover:text-red-800">
                <p>0</p>
                <MdKeyboardArrowRight size={20} />
              </div>
            </div>
            <div className="h-2 bg-dark-yellow rounded-lg"></div>
          </div>

          {/* Bandwidth card */}
          <div className="bg-[#e6e6e6] rounded-lg p-4 flex-1">
            <div className="flex justify-between items-center mb-2">
              <p className="text-blue-600 text-sm">Bandwidth</p>
              <div className="flex items-center text-blue-600 cursor-pointer hover:text-blue-800">
                <p>300</p>
                <MdKeyboardArrowRight size={20} />
              </div>
            </div>
            <div className="h-2 bg-[#a1a1a1] rounded-lg"></div>
          </div>
        </div>

        {/* Options (Send, Receive, Multi-Signature Transfer, etc.) */}
        <div className="space-y-4 mb-6">
          <div
            className="flex items-center justify-between cursor-pointer hover:bg-text-bg-gray p-2 rounded-lg border-b-[1px] border-[#f0f0f0]"
            onClick={() => setActiveComponent("send")}
          >
            <div className="flex items-center space-x-2 text-gray-700">
              <BsSend />
              <p className="text-sm">Send</p>
            </div>
            <MdKeyboardArrowRight size={20} className="text-gray-400" />
          </div>
          <div
            className="flex items-center justify-between cursor-pointer hover:bg-text-bg-gray p-2 rounded-lg border-b-[1px] border-[#f0f0f0]"
            onClick={() => setActiveComponent("receive")}
          >
            <div className="flex items-center space-x-2 text-gray-700">
              <FaDownload />
              <p className="text-sm">Receive</p>
            </div>
            <MdKeyboardArrowRight size={20} className="text-gray-400" />
          </div>
          <div
            className="flex items-center justify-between cursor-pointer hover:bg-text-bg-gray p-2 rounded-lg border-b-[1px] border-[#f0f0f0]"
            onClick={() => setActiveComponent("multiSignature")}
          >
            <div className="flex items-center space-x-2 text-gray-700">
              <BsTagsFill />
              <p className="text-sm">Multi-Signature Transfer</p>
            </div>
            <MdKeyboardArrowRight size={20} className="text-gray-400" />
          </div>
          <div className="flex items-center justify-between cursor-pointer hover:bg-text-bg-gray p-2 rounded-lg border-b-[1px] border-[#f0f0f0]">
            <div className="flex items-center space-x-2 text-gray-700">
              <MdNoteAlt />
              <p className="text-sm">To-Be-Signed Txns</p>
            </div>
            <MdKeyboardArrowRight size={20} className="text-gray-400" />
          </div>
          <div className="flex items-center justify-between cursor-pointer hover:bg-text-bg-gray p-2 rounded-lg border-b-[1px] border-[#f0f0f0]">
            <div className="flex items-center space-x-2 text-gray-700">
              <BsFillLightningChargeFill />
              <p className="text-sm">Swap</p>
            </div>
            <MdKeyboardArrowRight size={20} className="text-gray-400" />
          </div>
          <div className="flex items-center justify-between cursor-pointer hover:bg-text-bg-gray p-2 rounded-lg border-b-[1px] border-[#f0f0f0]">
            <div className="flex items-center space-x-2 text-gray-700">
              <TbArrowsExchange />
              <p className="text-sm">Change Wallet</p>
            </div>
            <MdKeyboardArrowRight size={20} className="text-gray-400" />
          </div>
        </div>

        {/* Exit wallet button */}
        <div className="text-center">
          <button
            type="button"
            className="bg-dark-yellow w-full hover:bg-[#f0c34a] focus:outline-none font-semibold rounded-lg text-md px-5 py-2.5"
            onClick={() => setActiveComponent("exitWallet")}
          >
            Exit Wallet
          </button>
        </div>
      </div>

      {/* Render the active component */}
      {/* {activeComponent === "send" && (
        <div className="fixed z-10 backdrop-blur-[1px] bg-dark-brown bg-opacity-30 h-screen w-full inset-0 flex items-center justify-center">
          <SendComponent onClose={handleComponentClose} />
        </div>
      )}
      {activeComponent === "receive" && (
        <div className="fixed z-10 backdrop-blur-[1px] bg-dark-brown bg-opacity-30 h-screen w-full inset-0 flex items-center justify-center">
          <ReceiveComponent onClose={handleComponentClose} />
        </div>
      )}
      {activeComponent === "multiSignature" && (
        <div className="fixed z-10 backdrop-blur-[1px] bg-dark-brown bg-opacity-30 h-screen w-full inset-0 flex items-center justify-center">
          <MultiSignatureComponent onClose={handleComponentClose} />
        </div>
      )}
      {activeComponent === "exitWallet" && (
        <div className="fixed z-10 backdrop-blur-[1px] bg-dark-brown bg-opacity-30 h-screen w-full inset-0 flex items-center justify-center">
          <ExitWalletComponent onClose={handleComponentClose} />
        </div>
      )} */}
    </>
  );
};

export default HoverWalletPage;
