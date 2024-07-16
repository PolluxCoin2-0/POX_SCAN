// import React from 'react'

import PieChartComp from "../../components/PieChartComp";
import SearchBarExpand from "../../components/SearchBarExpand";
import { IoSearch } from "react-icons/io5";
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import {
  getAllContractTableData,
  getContractTableData,
} from "../../utils/axios/Blockchain";
import { PiWrenchLight } from "react-icons/pi";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";
import { shortenString } from "../../utils/shortenString";
import { formatTimestampOnlyDate } from "../../utils/formatTimestamponlyDate";

const VerifiedContractTable = () => {
  // For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // for api integration
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getContractTableData();
        setData(data);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto">
        <div className=" flex flex-row items-center justify-between ">
          <div>
            <p className="">
              {" "}
              <span className="text-lg font-bold">4 </span>{" "}
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
          <p className="w-[7%] text-center ">Account</p>
          <p className="w-[12%] text-center ">Contract Name</p>
          <p className="w-[12%] text-center ">Number of Calls </p>
          <p className=" w-[12%]  text-center text-nowrap">Contract Address</p>
          <p className="w-[12%] text-center ">Version</p>
          <p className="w-[12%] text-center ">License</p>
          <p className="w-[12%] text-center ">Created On</p>
          <p className="w-[12%] text-center ">Verified On</p>
          <p className="w-[7%] text-center ">Setting</p>
        </div>

        {data[0] &&
          data[0].map((contact, index) => {
            return (
              <>
                <div className="min-w-[1500px]  flex flex-row justify-evenly p-5 border-b-2 border-lightest-gray  rounded-xl ">
                  <p className="whitespace-nowrap text-center w-[7%]">
                    <span className="px-3 py-1 bg-lightest-gray rounded-lg">
                      SC
                    </span>
                  </p>
                  <p className="w-[12%] text-center">
                    {contact?.contractName && contact?.contractName}
                  </p>
                  <p className="w-[12%] text-center">
                    {contact?.noOfCalls && contact?.noOfCalls}
                  </p>
                  <p className="w-[12%] text-center">
                    {contact?.contractAddress &&
                      shortenString(contact?.contractAddress, 10)}{" "}
                  </p>
                  <p className="w-[12%] text-center indent-4">
                    {contact?.compiler && contact?.compiler}
                  </p>
                  <p className="w-[12%] text-center indent-4">
                    {contact?.license && contact?.license}
                  </p>
                  <p className="w-[12%] text-center indent-8">
                    {contact?.createdAt && formatTimestampOnlyDate(contact.createdAt)}
                  </p>
                  <p className="w-[12%] text-center indent-8">
                    {contact?.updatedAt && formatTimestampOnlyDate(contact?.updatedAt)}
                  </p>
                  <p className="w-[7%] flex justify-end">
                    <PiWrenchLight />
                  </p>
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
  );
};

const AllContractTable = () => {
  // For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [data1, setData1] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await getAllContractTableData();
        console.log(data1);
        setData1(data1);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto">
      <div className=" flex flex-row items-center justify-between ">
        <div>
          <p className="">
            {" "}
            <span className="text-lg font-bold">22 </span>{" "}
            <span className="font-bold text-light-gray">
              contracts in total
            </span>
          </p>
        </div>
      </div>

      <div className="min-w-[1500px] flex flex-row justify-evenly text-center bg-lightest-gray p-2 m-3 rounded-xl ">
        <p className="w-[10%] text-center">Account</p>
        <p className="w-[20%] text-center">Contract Address</p>
        <p className="w-[20%] text-center">Number of Calls </p>

        <p className="w-[20%] text-center">Created On</p>
        <p className="w-[20%] text-center">Verified On</p>
        <p className="w-[10%] text-center">Settings</p>
      </div>

      {data1[0] &&
        data1[0].map((contact, index) => {
          return (
            <>
              <div className="min-w-[1500px]  flex flex-row justify-evenly p-5 border-b-2 border-lightest-gray  rounded-xl ">
                <p className="whitespace-nowrap w-[10%] text-center">
                  <span className="px-3 py-1 bg-lightest-gray rounded-lg">
                    SC
                  </span>
                </p>
                <p className="w-[20%] text-center">
                  {contact?.contractAddress &&
                    shortenString(contact?.contractAddress, 10)}
                </p>
                <p className="w-[20%] text-center">
                  {contact?.noOfCalls && contact?.noOfCalls
                    ? contact?.noOfCalls
                    : "--"}
                </p>

                <p className="w-[20%] text-center indent-4">
                  {contact?.createdAt && formatTimestampOnlyDate(contact?.createdAt)}
                </p>
                <p className="w-[20%] text-center indent-4">
                  {contact?.updatedAt && formatTimestampOnlyDate(contact?.updatedAt)}
                </p>
                <p className="w-[10%] flex justify-center">
                  <PiWrenchLight />
                </p>
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
  );
};
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

        const contractAddresses = data1[0].map((contract) => ({
          contractAddress: contract.contractAddress,
          noOfCalls: contract.noOfCalls,
        }));
        setPieChartData(contractAddresses);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchData();
  }, []);

  // for tab switching
  const [isShow, setIsShow] = useState("Verified Contract");

  //  for tab switching in transactions and transfer
  const showItemComponent = () => {
    switch (isShow) {
      case "Verified Contract":
        return <VerifiedContractTable />;

      case "All Contract":
        return <AllContractTable />;
    }
  };

  return (
    <div className="px-4 md:px-12 pb-12">
      <div>
        <SearchBarExpand />
      </div>
      <div className="">
        <div className="flex flex-row justify-between items-center pb-10">
          <p className="text-lg md:text-2xl font-bold">Contracts</p>
          <button className="bg-dark-yellow py-2 px-4 md:px-16 font-bold text-base md:text-xl rounded-lg text-black cursor-pointer  ">
            Contracts Verification
          </button>
        </div>

        <div className=" flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between w-full">
          <div className=" flex flex-col gap-10 w-full md:w-[30%]">
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
                  <p>
                    {data1[1]?.total_contracts && data1[1]?.total_contracts}
                  </p>
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
                  <p className="text-xl font-bold ">
                    {data[1]?.verifiedContractCount}
                  </p>
                  <p className="text-light-gray pt-5">Total</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-dark-green text-right">
                    {data[1]?.verifiedContract24h}
                  </p>
                  <p className="text-light-gray pt-5">Yesterday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl w-full md:w-[68%] py-3">
            <p className="font-bold text-xl pt-5 pl-8 ">24h Top Contracts</p>

            <div className="flex flex-col md:flex-row justify-between">
              <div className=" h-80 w-full md:w-[55%] ">
                <PieChartComp
                  value={piechartdata}
                  xAxis="noOfCalls"
                  yAxis="contractAddress"
                />
              </div>

              <div className=" px-4 md:px-0 w-full md:w-[55%] h-80 overflow-y-scroll">
                {piechartdata.map((data, idx) => {
                  return (
                    <>
                      <div
                        className="flex justify-between space-x-8 md:space-x-0 items-center my-5"
                        key={idx}
                      >
                        <div>
                          <p>
                            <span className="px-2 py-2 bg-lightest-gray rounded-md mr-2">
                              SC
                            </span>
                            <span className="px-2 py-2 bg-lightest-gray text-dark-red rounded-md">
                              {data?.contractAddress}
                            </span>
                          </p>
                        </div>
                        <div className="pr-0 md:pr-5 text-right">
                          <p>
                            {data?.noOfCalls &&
                              formatNumberWithCommas(data?.noOfCalls)}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between md:justify-start gap-8 pt-20 pb-10">
        <button
          className={`cursor-pointer py-3 px-4 whitespace-nowrap  ${
            isShow === "Verified Contract"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsShow("Verified Contract")}
        >
          Verified Contract
        </button>

        <button
          className={`cursor-pointer py-3 px-4 whitespace-nowrap  ${
            isShow === "All Contract"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsShow("All Contract")}
        >
          All Contract
        </button>
      </div>

      <div>{showItemComponent()}</div>
    </div>
  );
};

export default Contacts;
