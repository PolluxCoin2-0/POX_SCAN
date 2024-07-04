// import React from 'react'

import { ContactData } from "../../data/ContactData";
import PieChartComp from "../../components/PieChartComp";
import SimplePieChartComp from "../../components/SimplePieChartComp";
import SearchBarExpand from "../../components/SearchBarExpand";
import { IoSearch } from "react-icons/io5";
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Pagination from "../../components/Pagination";
import { useState } from "react";

const Transaction = () => {

   // For Pagination
   const [currentPage, setCurrentPage] = useState(1);
   const totalPages = 10; // Example total pages
 
   const handlePageChange = (page) => {
     setCurrentPage(page);
   };

  return (
    <div className="px-4 md:px-12 pb-12">
      <div>
        <SearchBarExpand />
      </div>

      <div className="">
        <div className="flex flex-row justify-between pb-10">
          <p className="text-2xl font-bold">Transactions</p>
        </div>

        <div className=" flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between w-full">
          <div className=" flex flex-col gap-10 w-full md:w-[48%]">
            <div className="bg-white px-4 md:px-12 py-6 gap-9 rounded-2xl shadow-xl ">
              <div className="flex flex-row justify-between">
                <p className=" text-xl font-bold">Tnx Counts</p>
              </div>

              <div className=" flex flex-row justify-between gap-20 py-5">
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

            {/* Trading Volume */}
            <div className="bg-white px-4 md:px-12 py-6 gap-9 rounded-2xl shadow-xl">
              <div className="flex flex-row justify-between ">
                <p className=" text-xl font-bold "> Trading Volume</p>
              </div>

              <div className=" flex flex-row justify-between gap-20 rounded-lg pt-6 pb-4">
                <div>
                  <p className="text-xl font-bold ">51,421 POX</p>
                  <p className="font-bold">=$18, 294.13b</p>
                  <p className="text-light-gray pt-5">Total</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-dark-green ">
                    +4,048,420 POX
                  </p>
                  <p className="font-bold">=$15.85b</p>
                  <p className="text-light-gray pt-5">Yesterday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl w-full md:w-[48%] py-3">
            <div className="flex flex-row items-center justify-between pt-4 px-6">
              <p className="font-bold text-xl">
                Daily Tnx Distribution
              </p>
              <div className="flex flex-row">
                <p>More</p>
                <MdKeyboardArrowRight className="mt-1 text-xl" />
              </div>
            </div>

            <div className="flex w-full h-80 flex-row justify-center items-center">
                <SimplePieChartComp />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-2xl p-4 md:p-10  overflow-x-auto md:overflow-hidden mt-16">
          <div className=" flex flex-row justify-between">
            <div>
              <p className="">
                <span className="text-lg font-bold">36,045 </span>
                <span className="font-bold text-light-gray">
                  A total of 10000 transactions(s)
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

          <div className="min-w-[1500px] flex flex-row justify-evenly bg-lightest-gray p-2 m-3 rounded-xl">
            <p className="w-[24%]">Account</p>
            <p className="w-[10%]">Contract</p>
            <p className="w-[10%]">Number of Calls </p>
            <p className="w-[10%]">POX Balance </p>
            <p className="w-[10%]">Version</p>
            <p className="w-[10%]">License</p>
            <p className="w-[10%]">Created On</p>
            <p className="w-[10%]">Verified On</p>
            <p className="w-[6%]">Setting</p>
          </div>

          {ContactData.map((contact, index) => {
            return (
              <>
                <div className="min-w-[1500px] flex flex-row justify-evenly p-5 border-b-2 border-lightest-gray  rounded-xl ">
                  <p className="whitespace-nowrap w-[24%]">
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
                  <p className="w-[10%]">{contact.ContractName}</p>
                  <p className="w-[10%]">{contact.NumberOfCalls}</p>
                  <p className="w-[10%]">{contact.POXBalance}</p>
                  <p className="w-[10%]">{contact.Version}</p>
                  <p className="w-[10%]">{contact.Licence}</p>
                  <p className="w-[10%]">{contact.CreatedOn}</p>
                  <p className="w-[10%]">{contact.VerifiedOn}</p>
                  <p className="w-[6%]">{contact.Settings}</p>
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
    </div>
  );
};

export default Transaction;
