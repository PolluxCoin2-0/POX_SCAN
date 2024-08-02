import { useState } from "react";
import { BsCopy } from "react-icons/bs";
import { IoCopy } from "react-icons/io5";
import { LuShrink } from "react-icons/lu";

import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

import CodeSnippet from "./codeSnippet";
import { toast } from "react-toastify";

const CodeTable = () => {
  return (
    <div className="bg-white rounded-bl-xl rounded-br-xl shadow-xl p-5 ">
      <p className="text-lg font-bold underline underline-offset-4 ">
        Contract Source Code Verified (Perfect match){" "}
      </p>

      <div
        className="flex flex-row justify-between space-x-4 md:space-x-20 lg:space-x-20 xl:space-x-20 2xl:space-x-20 items-center md:items-start
       lg:items-start xl:items-start 2xl:items-start w-full mt-4 border-b-[1px] pb-4"
      >
        <div className="w-[50%]">
          <div className="flex flex-row items-center justify-between whitespace-nowrap space-x-8 md:space-x-0  lg:space-x-0 xl:space-x-0 2xl:space-x-0">
            <p className="text-light-gray font-semibold">Contract Name</p>
            <p className="font-semibold">PolluxUsd</p>
          </div>

          <div className="flex flex-row items-center justify-between mt-2">
            <p className="text-light-gray font-semibold">Optimization</p>
            <p className="font-semibold">Yes</p>
          </div>

          <div className="flex flex-row justify-between mt-2">
            <p className="text-light-gray font-semibold">Audit Report</p>
            <p className="font-semibold">No audit report yet (Submit here)</p>
          </div>
        </div>

        <div className="w-[50%] ">
          <div className="flex flex-row items-center justify-between">
            <p className="text-light-gray font-semibold">Compiler Version</p>
            <p className="font-semibold">solidity 0.8.23</p>
          </div>

          <div className="flex flex-row items-center justify-between mt-2 ">
            <p className="text-light-gray font-semibold">License</p>
            <p className="font-semibold">MIT</p>
          </div>
        </div>
      </div>

      <p className="text-xl font-semibold mt-5">Contract Code</p>

      <div className="bg-mid-light-gray rounded-xl mt-5 pt-5 pb-5  pr-10 pl-10">
        <p className="text-lg font-semibold">PolluxUsd</p>
        <div className="bg-text-bg-gray mt-8 rounded-sm w-full h-[600px]">
          <CodeSnippet />
        </div>
      </div>
    </div>
  );
};

const ReadContractTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isView, setIsView] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [key, setKey] = useState(1);

  const handleToggle = (keyNumber) => {
    setKey(keyNumber);
    setIsOpen(!isOpen);
  };

  const handleView = () => {
    setIsView(!isView);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCopy = (issueTime) => {
    navigator.clipboard.writeText(issueTime);
    toast.success(" copied!");
  };

  return (
    <div className="bg-white rounded-bl-xl rounded-br-xl shadow-xl p-10 ">
      <div className="border-[1px] border-mid-light-gray rounded-tl-lg rounded-tr-lg">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray">
          <p className="text-lg">1. DOMAIN_SEPARATOR</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(1)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("DOMAIN_SEPARATOR")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>

        {key === 1 && isOpen && (
          <div className="flex flex-row space-x-8">
            <p
              className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
              onClick={handleView}
              style={{ cursor: "pointer" }}
            >
              View{" "}
            </p>

            {isView && (
              <p className="mt-1 text-lg font-bold">
                2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9
              </p>
            )}
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">2. allowance</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(2)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("allowance")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>

        {key === 2 && isOpen && (
          <div>
            <div className="px-6">
              <p className="text-lg ">
                owner_address<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="ownner_address"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray  mt-2"
              />
            </div>

            <div className="px-6">
              <p className="text-lg ">
                spender_address<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="spender_address"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray  mt-2"
              />
            </div>

            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">
              Send
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">3. auth</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(3)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("auth")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>

        {key === 3 && isOpen && (
          <div className="flex flex-row space-x-8">
            <p
              className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
              onClick={handleView}
              style={{ cursor: "pointer" }}
            >
              View{" "}
            </p>

            {isView && (
              <p className="mt-1 text-lg font-bold">
                2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9
              </p>
            )}
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">4. balanceOf</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(4)}
            style={{ cursor: "pointer" }}
          >
            <IoIosArrowDropdownCircle />
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("balanceOf")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>

        {key === 4 && isOpen && (
          <div>
            <div className="px-6">
              <p className="text-lg ">
                account_address*<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="account_address*"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray  mt-2"
              />
            </div>

            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">
              Send
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">5. decimals</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(5)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("decimals")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>

        {key === 5 && isOpen && (
          <div className="flex flex-row space-x-8">
            <p
              className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
              onClick={handleView}
              style={{ cursor: "pointer" }}
            >
              View{" "}
            </p>

            {isView && <p className="mt-1 text-lg font-bold">18</p>}
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">6. eip712Domain</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(6)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("eip712Domain")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>

        {key === 6 && isOpen && (
          <div className="flex flex-row space-x-8">
            <p
              className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
              onClick={handleView}
              style={{ cursor: "pointer" }}
            >
              View{" "}
            </p>

            {isView && (
              <p className="mt-1 text-lg font-bold">
                2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9
              </p>
            )}
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">7. name</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(7)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("name")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>

        {key === 7 && isOpen && (
          <div className="flex flex-row space-x-8">
            <p
              className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
              onClick={handleView}
              style={{ cursor: "pointer" }}
            >
              View{" "}
            </p>

            {isView && <p className="mt-1 text-lg font-bold">Pollux Usd</p>}
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">8. nonces</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(8)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("nonces")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>

        {key === 8 && isOpen && (
          <div>
            <div className="px-6">
              <p className="text-lg  ">
                owner_address<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="owner_address"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray mt-2"
              />
            </div>

            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">
              Send
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">9. owner</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(9)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("owner")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>
        {key === 9 && isOpen && (
          <div className="flex flex-row space-x-8">
            <p
              className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
              onClick={handleView}
              style={{ cursor: "pointer" }}
            >
              View{" "}
            </p>

            {isView && (
              <p className="mt-1 text-lg font-bold">
                PTiodKEPfGyxiy1XgU2HtdscPbpGVU1ENZ
              </p>
            )}
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">10. paused</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(10)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("paused")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>
        {key === 10 && isOpen && (
          <div className="flex flex-row space-x-8">
            <p
              className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
              onClick={handleView}
              style={{ cursor: "pointer" }}
            >
              View{" "}
            </p>

            {isView && (
              <p className="mt-1 text-lg font-bold">
                2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9
              </p>
            )}
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">11. symbol</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(11)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("symbol")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>

        {key === 11 && isOpen && (
          <div className="flex flex-row space-x-8">
            <p
              className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
              onClick={handleView}
              style={{ cursor: "pointer" }}
            >
              View{" "}
            </p>

            {isView && (
              <p className="mt-1 text-lg font-bold">
                2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9
              </p>
            )}
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray rounded-bl-lg rounded-br-lg mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">12. totalSupply</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(12)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("totalSupply")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>

        {key === 12 && isOpen && (
          <div className="flex flex-row space-x-8">
            <p
              className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
              onClick={handleView}
              style={{ cursor: "pointer" }}
            >
              View{" "}
            </p>

            {isView && (
              <p className="mt-1 text-lg font-bold">
                2sXa4yLs8RwUg7qhxuuBgMpEhb2FMQrgjY7PMmSJyE8ukWf8vZ9
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const WriteContractTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isView, setIsView] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [key, setKey] = useState(1);

  const handleToggle = (keyNumber) => {
    setKey(keyNumber);
    setIsOpen(!isOpen);
  };

  const handleView = () => {
    setIsView(!isView);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCopy = (issueTime) => {
    navigator.clipboard.writeText(issueTime);
    toast.success(" copied!");
  };
  return (
    <div className="bg-white rounded-bl-xl rounded-br-xl shadow-xl pt-5 pb-5 pl-10 pr-10 ">
      <p className="text-lg font-semibold pb-5">
        Running the following functions will consume POX or Energy as fees
      </p>
      <div className="border-[1px] border-mid-light-gray rounded-tl-lg rounded-tr-lg">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">1. approve</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(1)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("approve")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>

        {key === 1 && isOpen && (
          <div>
            <div className="px-6">
              <p className="text-lg ">
                spender_address<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="spender_address"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <div className="px-6">
              <p className="text-lg ">
                value_uint256<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="value_uint256"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray mt-2"
              />
            </div>

            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">
              Send
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">2. burn</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(2)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("burn")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>

        {key === 2 && isOpen && (
          <div>
            <div className="px-6">
              <p className="text-lg pl-0">
                value_uint256<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="value_uint256"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>
            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">
              Send
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">3. burnFrom</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(3)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("burnFrom")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            <IoCopy />
          </p>
        </div>
        {key === 3 && isOpen && (
          <div>
            <div className="px-6">
              <p className="text-lg ">
                account_address<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="account_address"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <div className="px-6">
              <p className="text-lg ">
                value_uint256<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="value_uint256"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray mt-2"
              />
            </div>

            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">
              Send
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">4. mint</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(4)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("mint")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            ><IoCopy />
          </p>
        </div>
        {key === 4 && isOpen && (
          <div>
            <div className="px-6">
              <p className="text-lg ">
                to_address<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="to_address"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <div className="px-6">
              <p className="text-lg ">
                amount_uint256<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="amount_uint256"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray mt-2"
              />
            </div>

            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">
              Send
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">5. pause</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(5)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("pause")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            ><IoCopy />
          </p>
        </div>
        {key === 5 && isOpen && (
          <div className="flex flex-row space-x-8">
            <p
              className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
              onClick={handleView}
              style={{ cursor: "pointer" }}
            >
              Send{" "}
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">6. permit</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(6)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("permit")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            ><IoCopy />
          </p>
        </div>
        {key === 6 && isOpen && (
          <div>
            <div className="px-6">
              <p className="text-lg ">
                owner_address<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="owner_address"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <div className="px-6">
              <p className="text-lg ">
                spender_address<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="spender_address"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray mt-2"
              />
            </div>

            <div className="px-6">
              <p className="text-lg ">
                value_uint256<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="value_uint256"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <div className="px-6">
              <p className="text-lg ">
                deadline_uint256<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="deadline_uint256"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <div className="px-6">
              <p className="text-lg ">
                v_uint8<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="v_uint8"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <div className="px-6">
              <p className="text-lg ">
                r_bytes32<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="r_bytes32"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <div className="px-6">
              <p className="text-lg ">
                s_bytes32*<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="s_bytes32*"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">
              Send
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">7. renounceOwnership</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(7)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p
            className="text-xl"
            onClick={() => handleCopy("renounceOwnership")}
          >
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            ><IoCopy />
          </p>
        </div>
        {key === 7 && isOpen && (
          <div className="flex flex-row space-x-8">
            <p
              className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
              onClick={handleView}
              style={{ cursor: "pointer" }}
            >
              Send{" "}
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">8. setAuthAdd</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(8)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("setAuthAdd")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            ><IoCopy />
          </p>
        </div>

        {key === 8 && isOpen && (
          <div>
            <div className="px-6">
              <p className="text-lg ">
                newAdd_address<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="newAdd_address"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">
              Send
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">9. transfer</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(9)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy(" transfer")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            ><IoCopy />
          </p>
        </div>

        {key === 9 && isOpen && (
          <div>
            <div className="px-6">
              <p className="text-lg ">
                to_address<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="to_address"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>
            <div className="px-6">
              <p className="text-lg ">
                value_uint256<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="value_uint256"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">
              Send
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">10. transferFrom</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(10)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("transferFrom")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            ><IoCopy />
          </p>
        </div>

        {key === 10 && isOpen && (
          <div>
            <div className="px-6">
              <p className="text-lg ">
                from_address<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="from_address"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>
            <div className="px-6">
              <p className="text-lg ">
                to_address<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="to_address"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <div className="px-6">
              <p className="text-lg ">
                value_uint256<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="value_uint256"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">
              Send
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">11. transferOwnership</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(11)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p
            className="text-xl"
            onClick={() => handleCopy("transferOwnership")}
          >
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            ><IoCopy />
          </p>
        </div>

        {key === 11 && isOpen && (
          <div>
            <div className="px-6">
              <p className="text-lg ">
                newOwner_address<span className="text-dark-red text-xl">*</span>
              </p>
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="newOwner_address"
                className="w-full my-4 p-2  focus:bg-white  bg-text-bg-gray rounded-md outline-[1px]  outline-light-mid-gray ml-0 mt-2"
              />
            </div>

            <p className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7">
              Send
            </p>
          </div>
        )}
      </div>

      <div className="border-[1px] border-mid-light-gray rounded-bl-lg rounded-br-lg mt-8">
        <div className="flex flex-row justify-between p-5 bg-text-bg-gray  ">
          <p className="text-lg">12. unpause</p>
          <p
            className="text-2xl"
            onClick={() => handleToggle(12)}
            style={{ cursor: "pointer" }}
          >
            {isOpen ? <IoIosArrowDropupCircle /> : <IoIosArrowDropdownCircle />}
          </p>
        </div>

        <div className="flex justify-end pr-5 pt-4 pb-4 space-x-5">
          <p className="text-xl" onClick={() => handleCopy("unpause")}>
            <BsCopy />
          </p>
          <p
            className="text-xl"
            onClick={() =>
              handleCopy(
                "http://localhost:5173/tokendetailpage/PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm"
              )
            }
          >
            ><IoCopy />
          </p>
        </div>

        {key === 12 && isOpen && (
          <div className="flex flex-row space-x-8">
            <p
              className="border-[1px] border-light-gray bg-text-bg-gray rounded-md px-0 py-1 w-[70px] pl-4 ml-5 mb-7"
              onClick={handleView}
              style={{ cursor: "pointer" }}
            >
              Send
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const TokenContractPage = () => {
  const [isShow, setIsShow] = useState("Code");

  const showItemComponent = () => {
    switch (isShow) {
      case "Code":
        return <CodeTable />;

      case "Read Contract":
        return <ReadContractTable />;

      case "Write Contract":
        return <WriteContractTable />;
    }
  };
  return (
    <div>
      <div
        className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 
    md:items-center lg:items-center xl:items-center 2xl:items-center
    space-x-0 md:space-x-8 lg:space-x-8 xl:space-x-8 2xl:space-x-8
    space-y-4 md:space-y-0 lg:space-y-0 xl:space-y-0 2xl:space-y-0
     mt-10 bg-white rounded-tl-xl rounded-tr-xl p-5"
      >
        <p
          className={`cursor-pointer py-2 px-14 whitespace-nowrap ${
            isShow === "Code"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsShow("Code")}
        >
          Code
        </p>

        <p
          className={`cursor-pointer py-2 px-8 whitespace-nowrap ${
            isShow === "Read Contract"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsShow("Read Contract")}
        >
          Read Contract
        </p>

        <p
          className={`cursor-pointer py-2 px-8 whitespace-nowrap ${
            isShow === "Write Contract"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsShow("Write Contract")}
        >
          Write Contract
        </p>
      </div>

      <div>{showItemComponent()}</div>
    </div>
  );
};

export default TokenContractPage;
