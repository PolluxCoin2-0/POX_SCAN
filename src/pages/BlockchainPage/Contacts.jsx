// import React from 'react'


import PieChartComp from "../../components/PieChartComp";
import SearchBarExpand from "../../components/SearchBarExpand";
import { IoSearch } from "react-icons/io5";
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import { getAllContractTableData, getContractTableData } from "../../utils/axios/Blockchain";
import { PiWrenchLight } from "react-icons/pi";


const Contacts = () => {

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [piechartdata, setPieChartData] = useState([]);
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getContractTableData();
        setData(data);
        const data1 = await getAllContractTableData();
        
        setData1(data1);

        const contractAddresses = data1[0].map(contract => ({
          contractAddress: contract.contractAddress,
          noOfCalls: contract.noOfCalls
      }));
      setPieChartData(contractAddresses);

      } catch (error) {
        console.error('error', error);
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
    <div className="px-4 md:px-12 pb-12">
      <div>
        <SearchBarExpand />
      </div>

      <div className="">
        <div className="flex flex-row justify-between items-center pb-10">
          <p className="text-lg md:text-2xl font-bold">Contacts</p>
          <button className="bg-dark-yellow py-2 px-4 md:px-16 font-bold text-base md:text-xl rounded-lg text-black cursor-pointer  ">
            Contracts Verification
          </button>
        </div>

        <div className=" flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between w-full">
          <div className=" flex flex-col gap-10 w-full md:w-[48%]">
            <div className="bg-white px-4 md:px-12  py-6 gap-9 rounded-2xl shadow-xl ">
              <div className="flex flex-row justify-between">
                <p className=" text-xl font-bold pl-0">Contacts</p>
                <div className="flex flex-row pr-0">
                  <p>More</p>
                  <MdKeyboardArrowRight className="mt-1 text-xl" />
                </div>
              </div>

              <div className=" flex flex-row justify-between gap-20 py-5">
                <div className="pl-0">
                  <p>{data1[1]?.total_contracts && data1[1]?.total_contracts}</p>
                  <p className="text-light-gray  pt-5">Total</p>
                </div>

                <div>
                  <p className="text-dark-green font-bold text-xl pr-0">
                    {data1[1]?.allContract24h && data1[1]?.allContract24h}
                  </p>
                  <p className="text-light-gray  pt-5">Last 24h</p>
                </div>
              </div>
            </div>

            {/* Verified Contacts */}
            <div className="bg-white px-4 md:px-12 py-6 gap-9 rounded-2xl shadow-xl">
              <div className="flex flex-row justify-between ">
                <p className=" text-xl font-bold "> Verified Contacts </p>
                <div className="flex flex-row ">
                  <p>More</p>
                  <MdKeyboardArrowRight className="mt-1 text-xl" />
                </div>
              </div>

              <div className=" flex flex-row justify-between gap-20 rounded-lg pt-6 pb-6">
                <div>
                  <p className="text-xl font-bold ">{data[1]?.verifiedContractCount}</p>
                  <p className="text-light-gray pt-5">Total</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-dark-green text-right">{data[1]?.verifiedContract24h}</p>
                  <p className="text-light-gray pt-5">Yesterday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl w-full md:w-[48%] py-3">
            <p className="font-bold text-xl pt-5 pl-8 ">24h Top Contracts</p>

            <div className="flex flex-col md:flex-row justify-between">
              <div className=" h-80 w-full md:w-[40%]">
                <PieChartComp value={piechartdata} xAxis="noOfCalls" yAxis="contractAddress"/>
              </div>

              <div className=" flex flex-row justify-between px-4 md:px-0">
                <div className="pr-0 md:pr-20 space-y-5 ">
                  <p className="">
                    <span className="px-2 py-1 bg-lightest-gray rounded-md">
                      {" "}
                      SC
                    </span>{" "}
                    <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">
                    USDT Token{" "}
                    </span>
                  </p>
                  <p className="">
                    <span className="px-2 py-1 bg-lightest-gray rounded-md">
                      {" "}
                      SC
                    </span>{" "}
                    <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">
                      USDT Token{" "}
                    </span>
                  </p>
                  <p>
                    <span className="px-2 py-1 bg-lightest-gray rounded-md">
                      {" "}
                      SC
                    </span>{" "}
                    <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">
                      USDT Token{" "}
                    </span>
                  </p>
                  <p>
                    <span className="px-2 py-1 bg-lightest-gray rounded-md">
                      {" "}
                      SC
                    </span>{" "}
                    <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">
                      USDT Token{" "}
                    </span>
                  </p>
                  <p>
                    <span className="px-2 py-1 bg-lightest-gray rounded-md">
                      {" "}
                      SC
                    </span>{" "}
                    <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">
                      USDT Token{" "}
                    </span>
                  </p>
                  <p>
                    <span className="px-2 py-1 bg-lightest-gray rounded-md">
                      {" "}
                      SC
                    </span>{" "}
                    <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">
                      USDT Token{" "}
                    </span>
                  </p>
                  <p>
                    <span className="px-2 py-1 bg-lightest-gray rounded-md">
                      {" "}
                      SC
                    </span>{" "}
                    <span className="px-2 py-1 bg-lightest-gray text-dark-red rounded-md">
                      USDT Token{" "}
                    </span>
                  </p>
                </div>

                <div className="pr-0 md:pr-10 space-y-5 text-right">
                  <p>
                    2,035,198 calls{" "}
                    <span className="text-light-gray">(99.03%)</span>
                  </p>
                  <p>
                    6,035 calls{" "}
                    <span className="text-light-gray">(88.05%)</span>
                  </p>
                  <p>
                    7,987 calls{" "}
                    <span className="text-light-gray">(88.75%)</span>
                  </p>
                  <p>
                    8,345 calls <span className="text-light-gray">(77.5%)</span>
                  </p>
                  <p>
                    2,305 calls{" "}
                    <span className="text-light-gray">(75.66%)</span>
                  </p>
                  <p>
                    1,234 calls{" "}
                    <span className="text-light-gray">(75.66%)</span>
                  </p>
                  <p>
                    5,098 calls{" "}
                    <span className="text-light-gray">(65.54%)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between md:justify-start gap-8 pt-20 pb-10">
        <button className="bg-dark-yellow shadow-lg py-3 md:py-5 px-3 md:px-9 font-bold text-base md:text-xl rounded-lg text-black cursor-pointer whitespace-nowrap">
          Verified Contract
        </button>
        <button className="shadow-lg py-3 md:py-5 px-4 md:px-16 font-bold text-base md:text-xl rounded-lg bg-white text-black cursor-pointer whitespace-nowrap">
          All Contract
        </button>
      </div>

       <div>
        <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto md:overflow-hidden">
          <div className=" flex flex-row items-center justify-between ">
            <div>
              <p className="">
                {" "}
                <span className="text-lg font-bold">36,045 </span>{" "}
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

          <div className="min-w-[1500px] flex flex-row justify-evenly text-center bg-lightest-gray p-2 m-3 rounded-xl ">
            <p className="w-[30%]">Account</p>
            <p className="w-[10%]">Contract Name</p>
            <p className="w-[10%]">Number of Calls </p>
            
            <p className="w-[10%]">Version</p>
            <p className="w-[10%]">License</p>
            <p className="w-[12%]">Created On</p>
            <p className="w-[12%]">Verified On</p>
            <p className="w-[6%]">Setting</p>
          </div>

          {data[0] && data[0].map((contact, index) => {
            return (
              <>
                <div className="min-w-[1500px]  flex flex-row justify-evenly p-5 border-b-2 border-lightest-gray  rounded-xl ">
                  <p className="whitespace-nowrap w-[30%]">
                    <span className="px-3 py-1 bg-lightest-gray rounded-lg">
                      SC
                    </span>
                    <span className="text-dark-red px-2">
                      {" "}
                      {contact?.contractAddress}{" "}
                    </span>
                    {/* <span className="px-3 py-1 bg-lightest-gray rounded-lg">
                      USDT Token
                    </span> */}
                  </p>
                  <p className="w-[10%] text-center">{contact?.contractAddress && contact?.contractName}</p>
                  <p className="w-[10%] text-center">{contact?.noOfCalls && contact?.noOfCalls}</p>
                  
                  <p className="w-[10%] text-center">{contact?.compiler && contact?.compiler}</p>
                  <p className="w-[10%] text-center">{contact?.license && contact?.license}</p>
                  <p className="w-[12%] text-center">{contact?.createdAt && contact.createdAt}</p>
                  <p className="w-[12%] text-center">{contact?.updatedAt && contact?.updatedAt}</p>
                  <p className="w-[6%] "><PiWrenchLight /></p>
                </div>
              </>
            );
          })}

<div className="flex justify-start md:justify-end ">
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

export default Contacts;
