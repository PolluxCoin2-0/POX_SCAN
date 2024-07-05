// import React from 'react'

import { ContactData } from "../../data/ContactData";
import PieChartComp from "../../components/PieChartComp";
import SearchBarExpand from "../../components/SearchBarExpand";
import { IoSearch } from "react-icons/io5";
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { getTransferTableData } from "../../utils/axios/Blockchain";
import { secondsAgo } from "../../utils/secondAgo";
import { shortenString } from "../../utils/shortenString";

// For Tab Switching
const TransferTable = () => {
  
  // For API Integration
  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getTransferTableData();

        console.log(data);

        setData(data?.message);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, [])

  // For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto md:overflow-hidden">
        <div className=" flex flex-row justify-between">
          <div>
            <p className="">
              <span className="text-lg font-bold">36,045 </span>
              <span className="font-bold text-light-gray">
                contracts in total
              </span>
            </p>
          </div>

          <div className="hidden md:flex flex-row justify-between px-32 rounded-md  border-2 border-lightest-gray">
            <IoSearch className=" text-xl pt-4 w-10 h-10 text-light-gray" />

            <input
              className="bg-white h-12 w-full  rounded-lg text-sm  focus:outline-none placeholder:text-light-gray placeholder:font-medium"
              type="search"
              name="search"
              placeholder="Search by Contract Accounts/Name"
            />

            <PiArrowBendDownLeftBold className="w-10 h-10 pt-4  text-light-gray" />
          </div>
        </div>

        <div className="min-w-[1500px] flex flex-row justify-evenly items-center bg-lightest-gray p-2 m-3 rounded-xl">
          <p className="w-[20%]">Token</p>
          <p className="w-[10%]">Amount/Token TD</p>
          <p className="w-[6%]">Result </p>
          <p className="w-[10%]">Age </p>
          <p className="w-[16%]">From</p>
          <p className="w-[16%]">To</p>
          <p className="w-[16%]">Hash</p>
          <p className="w-[10%]">Block</p>
          
        </div>

        {data?.transactions && data?.transactions.map((contact, index) => {
          return (
            <>
              <div className="min-w-[1500px] flex flex-row justify-evenly items-center p-5 border-b-2 border-lightest-gray  rounded-xl ">
                <p className="whitespace-nowrap w-[20%]">
                  <span className="px-3 py-1 bg-lightest-gray rounded-lg">
                    SC
                  </span>
                  <span className="text-dark-red px-2">
                    {" "}
                    {contact.Account}{" "}
                  </span>
                  <span className="px-3 py-1 bg-lightest-gray rounded-lg">
                    USDT Token
                  </span>
                </p>
                <p className="w-[10%]">{contact?.ContractName}</p>
                <p className="w-[6%]">{contact?.NumberOfCalls}</p>
                <p className="w-[10%]">{contact?.POXBalance}</p>
                <p className="w-[10%]">{contact?.timeStamp && secondsAgo(contact?.timeStamp)} seconds ago</p>
                <p className="w-[16%]">{contact?.fromAddress && shortenString(contact?.fromAddress)}</p>
                <p className="w-[16%]">{contact?.toAddress && shortenString(contact?.toAddress)}</p>
                <p className="w-[16%]">{contact?.blockHash && shortenString(contact?.blockHash)}</p>
                <p className="w-[10%]">{contact?.blockNumber}</p>
              </div>
            </>
          );
        })}

        <div className="flex justify-start md:justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

const Transfer = () => {

 
  const [isRender, setIsRender] = useState("POX20 Transfers");

  const renderItemComponent = () => {
    switch (isRender) {
      case "POX20 Transfers":
        return <TransferTable />;

      case "POX721 Transfers":
        return <TransferTable />;

      case "POX Transfers":
        return <TransferTable />;

      case "POX1155 Transfers":
        return <TransferTable />;
    }
  };

  return (
    <div className="px-4 md:px-12 pb-12">
      <div>
        <SearchBarExpand />
      </div>

      <div className="">
        <div className="flex flex-row justify-between pb-10">
          <p className="text-2xl font-bold">Transfers</p>
        </div>

        <div className=" flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between w-full">
          <div className=" flex flex-col gap-10 w-full md:w-[48%]">
            <div className="bg-white px-4 md:px-12 py-6 gap-9 rounded-2xl shadow-xl ">
              <div className="flex flex-row justify-between">
                <p className=" text-xl font-bold">Transfer Counts</p>
              </div>

              <div className=" flex flex-row justify-between gap-20 rounded-lg py-5">
                <div className="">
                  <p className="text-xl font-bold">55,451,455,254</p>
                  <p className="text-light-gray  pt-5">Total</p>
                </div>

                <div>
                  <p className="text-dark-green font-bold text-xl">
                    +4,048,420
                  </p>
                  <p className="text-light-gray  pt-5"> Yesterday</p>
                </div>
              </div>
            </div>

            {/* Transfer Volume */}
            <div className="bg-white px-4 md:px-12 py-6 gap-9 rounded-2xl shadow-xl">
              <div className="flex flex-row justify-between ">
                <p className=" text-xl font-bold "> Transfer Volume</p>
              </div>

              <div className=" flex flex-row justify-between gap-20 rounded-lg pt-6 pb-6">
                <div>
                  <p className="text-xl font-bold ">51,421</p>
                  <p className="font-bold">=$18, 294.13b</p>
                  <p className="text-light-gray pt-5">Total</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-dark-green">
                    +4,048,420
                  </p>
                  <p className="font-bold">=$15.85b</p>
                  <p className="text-light-gray pt-5">Yesterday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl w-full md:w-[48%] py-3">
            <p className="font-bold text-xl pt-5 pl-8 ">
              Transfer Type Distribution
            </p>

            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
              <div className=" h-80 w-full md:w-[70%]">
                <PieChartComp />
              </div>

              <div className=" flex flex-row justify-between px-4">
                <div className="pr-0 md:pr-20 space-y-6">
                  <p className="font-bold">TRX Transfer</p>
                  <p className="font-bold">TRC 10 Transfers</p>
                  <p className="font-bold">TRC 20 Transfers</p>
                  <p className="font-bold">TRC721 Transfers</p>
                  <p className="font-bold">TRC1155 Transfers</p>
                </div>

                <div className="pr-0 md:pr-10 space-y-6 text-right">
                  <p className="font-bold">
                    2,035,198 calls{" "}
                    <span className="text-light-gray">(99.03%)</span>
                  </p>
                  <p className="font-bold">
                    6,035 calls{" "}
                    <span className="text-light-gray">(88.05%)</span>
                  </p>
                  <p className="font-bold">
                    7,987 calls{" "}
                    <span className="text-light-gray">(88.75%)</span>
                  </p>
                  <p className="font-bold">
                    8,345 calls <span className="text-light-gray">(77.5%)</span>
                  </p>
                  <p className="font-bold">
                    2,305 calls{" "}
                    <span className="text-light-gray">(75.66%)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-start gap-8 pt-20 pb-10 overflow-x-auto">
        <button
          className={`cursor-pointer py-3 px-4 whitespace-nowrap  ${
            isRender === "POX20 Transfers"
              ? "bg-dark-yellow  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsRender("POX20 Transfers")}
        >
          POX20 Transfers
        </button>
        <button
          className={`cursor-pointer py-3 px-4 whitespace-nowrap ${
            isRender === "POX721 Transfers"
              ? "bg-dark-yellow  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsRender("POX721 Transfers")}
        >
          POX721 Transfers
        </button>

        <button
          className={`cursor-pointer py-3 px-4 whitespace-nowrap ${
            isRender === "POX Transfers"
              ? "bg-dark-yellow shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsRender("POX Transfers")}
        >
          POX Transfers
        </button>

        <button
          className={`cursor-pointer py-3 px-4 whitespace-nowrap ${
            isRender === "POX1155 Transfers"
              ? "bg-dark-yellow shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsRender("POX1155 Transfers")}
        >
          POX1155 Transfers
        </button>
      </div>

      <div>{renderItemComponent()}</div>
    </div>
  );
};

export default Transfer;
