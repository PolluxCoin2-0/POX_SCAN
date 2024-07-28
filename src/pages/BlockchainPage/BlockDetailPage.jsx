import { Pagination, SearchBarExpand } from "../../components";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineQuestion } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getBlockDetailPageData } from "../../utils/axios/Blockchain";
import { useParams } from "react-router-dom";
import { secondsAgo } from "../../utils/secondAgo";

const TransactionTable = () => {
  // For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="bg-white rounded-2xl mt-8 pt-5 pb-5 overflow-x-auto md:overflow-x-auto 
      lg:overflow-auto xl:overflow-auto 2xl:overflow-hidden">
        <div className=" flex flex-row justify-between">
          <div>
            <p className="pl-5 font-bold">A total of 10000 transaction(s)</p>
          </div>
        </div>

        <div className="min-w-[1500px] flex flex-row justify-evenly items-center bg-lightest-gray pl-24 p-2 m-5  rounded-xl">
          <p className="w-[11%]">
            <FaEye />
          </p>
          <p className="w-[12%]">Hash</p>
          <p className="w-[11%]">Block</p>
          <p className="w-[11%]">Time</p>
          <p className="w-[11%]">Transaction Type</p>
          <p className="w-[11%]">From</p>
          <p className="w-[11%]">To</p>
          <p className="w-[11%]">Token</p>
          <p className="w-[11%]">Result</p>
        </div>

        <div className="text-center">No Data Found</div>

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

const BlockDetailPage = () => {
  const number = useParams().id;
  // API INTEGRATION
  const [blockdata, setBlockData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blockdata = await getBlockDetailPageData(number);
        setBlockData(blockdata?.message);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const [isRender, setIsRender] = useState("Transactions");

  const renderItemComponent = () => {
    switch (isRender) {
      case "Transactions":
        return <TransactionTable />;

      case "Transfers":
        return <TransactionTable />;

      case "Internal Txns":
        return <TransactionTable />;
    }
  };

  return (
    <div className="px-4 md:px-4 lg:px-4 xl:px-12 2xl:px-12 pb-12">
      {/* Search Bar */}
      <div>
        <SearchBarExpand />
      </div>

      {/* Block Detail  */}
      <div className="">
        <p className="text-xl font-bold">Block Details</p>

        <div
          className="flex flex-col md:flex-col lg:flex-col space-y-6 md:space-y-6 lg:space-y-6
        xl:space-y-0 2xl:space-y-0 xl:flex-row 2xl:flex-row justify-between w-full space-x-0 md:space-x-0 lg:space-x-0 xl:space-x-16 2xl:space-x-16 mt-8 "
        >
          {/* First Div */}
          <div className="w-full md:w-full lg:w-full xl:w-[65%] 2xl:w-[65%] bg-white rounded-xl shadow-lg p-8 ">
            <div className="flex flex-row items-center space-x-5 border-b-[1px] border-text-bg-gray pb-4">
              <p className="text-lg font-semibold">
                Block #{blockdata?.blocknumber}
              </p>
              <p className="text-sm bg-text-bg-gray px-2 rounded-md pt-1">
                {" "}
                Producer: {blockdata?.witness?.[0]}
              </p>
              <p className="bg-text-bg-gray rounded-2xl px-1 pt-1">
                <IoIosArrowBack />
              </p>
              <p className="bg-text-bg-gray rounded-2xl px-1 pt-1">
                <IoIosArrowForward />
              </p>
            </div>

            <div>
              <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row space-x-0
              md:space-x-0 lg:space-x-32  xl:space-x-32 2xl:space-x-32 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row whitespace-nowrap space-x-2">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />{" "}
                  </p>
                  <p>Block Hash:</p>
                </div>

                <div className="flex flex-row items-center space-x-4">
                  <p className="truncate md:truncate lg:truncate xl:truncate xl:w-80 2xl:w-full">{blockdata?.blockHash}</p>
                  <p className="pt-1">
                    <MdContentCopy />
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row
              space-x-0 md:space-x-0 lg:space-x-44 xl:space-x-44 2xl:space-x-44 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />{" "}
                  </p>
                  <p>Time:</p>
                </div>

                <div className="flex flex-row space-x-4">
                  <p>
                    {blockdata?.timestamp && secondsAgo(blockdata?.timestamp)}
                  </p>
                  <p className="text-light-gray">Thu Jul 18 2024</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row 
              space-x-0 md:space-x-0 lg:space-x-36 xl:space-x-36 2xl:space-x-36 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />{" "}
                  </p>
                  <p>Block Size:</p>
                </div>

                <div className="flex flex-row space-x-5">
                  <p>{blockdata?.size} Bytes </p>
                  <p className="text-light-gray">
                    (Upper Limit: 2,000,000 Bytes)
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row
              space-x-0 md:space-x-0 lg:space-x-44 xl:space-x-44 2xl:space-x-44 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />{" "}
                  </p>
                  <p>Status:</p>
                </div>

                <div className="flex flex-row space-x-4">
                  <p className="text-dark-green bg-light-green px-3 rounded-md">
                    CONFIRMED
                  </p>
                  <p className="text-light-gray"> Confirmed by over</p>
                  <p>38</p>
                  <p className="text-light-gray">blocks</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:items-center xl:items-center 2xl:items-center
              space-x-0 md:space-x-0 lg:space-x-28 xl:space-x-28 2xl:space-x-28 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />{" "}
                  </p>
                  <p className="whitespace-nowrap">Confirmed SRs:</p>
                </div>

                <div className="flex flex-row items-center space-x-4">
                  <p className="text-dark-green bg-light-green px-2 rounded-md">
                    19
                  </p>
                  <p>
                    {" "}
                    POXCHAIN786, KHATUSHAYAMJI, KHALSANATION, WILLIAMSONPOLINK
                  </p>
                </div>
              </div>

              <div className="flex flex-row space-x-28 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />{" "}
                  </p>
                  <p>Block Reward:</p>
                </div>

                <p>0.2</p>
              </div>

              <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row 
             space-x-0 md:space-x-0 lg:space-x-20 xl:space-x-20 2xl:space-x-20 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />{" "}
                  </p>
                  <p className="whitespace-nowrap">Parent Block Hash:</p>
                </div>
                <div className="flex flex-row space-x-4">
                  <p className="truncate md:truncate lg:truncate xl:truncate xl:w-80 2xl:w-full">{blockdata?.parenthash}</p>
                  <p className="pt-1">
                    <MdContentCopy />
                  </p>
                </div>
              </div>

              <div className="flex flex-row space-x-24 border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />{" "}
                  </p>
                  <p>Version Number:</p>
                </div>

                <p>1</p>
              </div>
            </div>
          </div>

          {/* Second Div */}
          <div
            className="w-full md:w-full lg:w-full xl:w-[35%] 2xl:w-[35%] bg-white rounded-xl 
          shadow-lg h-full p-5 space-y-5 "
          >
            <div className="h-[60%] bg-text-bg-gray rounded-xl p-5 pt-3">
              <p className="text-lg font-semibold border-b-[1px] border-lightest-gray pb-2">
                Transaction Overview
              </p>

              <div>
                <div className="border-b-[1px] border-lightest-gray pt-2 pb-4 ">
                  <div className="flex flex-row w-full">
                    <p className="w-[10%] font-semibold text-lg">1</p>
                    <div className=" w-[90%] h-[2px] flex flex-row justify-end pt-2">
                      <p className="w-[30%] border-2 text-dark-red"></p>
                      <p className="w-[27%] border-2 text-dark-orange"></p>
                      <p className="w-[10%] border-2 text-dark-skyblue"></p>
                      <p className="w-[10%] border-2 text-dark-green"></p>
                      <p className="w-[10%] border-2 text-dark-purple"></p>
                      <p className="w-[3%] border-2 text-light-brown"></p>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between pt-2">
                    <div className="flex flex-row space-x-2">
                      <p className="bg-lightest-gray rounded-md pt-1 px-1">
                        <AiOutlineQuestion />{" "}
                      </p>
                      <p className="font-medium">Transactions</p>
                    </div>

                    <p className="">(Failed:0)</p>
                  </div>
                </div>

                <div className="border-b-[1px] border-lightest-gray pt-2 pb-4">
                  <div className="flex flex-row w-full">
                    <p className="w-[10%] font-semibold text-lg">0</p>
                    <div className=" w-[90%] h-[2px] flex flex-row justify-end pt-2">
                      <p className="w-[45%] border-2 text-dark-green"></p>
                      <p className="w-[45%] border-2 text-dark-orange"></p>
                    </div>
                  </div>
                  <div className="flex flex-row space-x-2 pt-2">
                    <p className="bg-lightest-gray rounded-md pt-1 px-1">
                      <AiOutlineQuestion />{" "}
                    </p>
                    <p>Transfers</p>
                  </div>
                </div>

                <div className="pt-2 pb-4">
                  <div className="flex flex-row space-x-3">
                    <p className=" font-semibold text-lg">0</p>
                    <p>(from 0 parent Txns)</p>
                  </div>
                  <div className="flex flex-row space-x-2 pt-3">
                    <p className="bg-lightest-gray rounded-md pt-1 px-1">
                      <AiOutlineQuestion />{" "}
                    </p>
                    <p className="">Internal Txns</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[40%] bg-text-bg-gray rounded-xl p-5 pt-3">
              <p className="text-lg font-bold border-b-[1px] border-lightest-gray pb-1">
                Total Consumption
              </p>

              <div>
                <div className="flex flex-row justify-between border-b-[1px] border-lightest-gray pt-2 pb-2">
                  <div className="flex flex-row space-x-2">
                    <p className="bg-lightest-gray rounded-md pt-1 px-1">
                      <AiOutlineQuestion />{" "}
                    </p>
                    <p>POX Burned</p>
                  </div>

                  <p>0</p>
                </div>

                <div className="flex flex-row justify-between border-b-[1px] border-lightest-gray pt-2 pb-2">
                  <div className="flex flex-row space-x-2">
                    <p className="bg-lightest-gray rounded-md pt-1 px-1">
                      <AiOutlineQuestion />{" "}
                    </p>
                    <p>Bandwidth</p>
                  </div>

                  <p>267</p>
                </div>

                <div className="flex flex-row justify-between border-b-[1px] border-lightest-gray pt-2 pb-2">
                  <div className="flex flex-row space-x-2">
                    <p className="bg-lightest-gray rounded-md pt-1 px-1">
                      <AiOutlineQuestion />{" "}
                    </p>
                    <p>Energy</p>
                  </div>

                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}

      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row lg:items-center xl:items-center 2xl:items-center
      space-x-0 md:space-x-10 lg:space-x-10 xl:space-x-10 2xl:space-x-10 space-y-4 md:space-y-4 
      lg:space-y-0 xl:space-y-0 2xl:space-y-0 mt-10">
        <p
          className={`cursor-pointer py-3 px-6 whitespace-nowrap ${
            isRender === "Transactions"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsRender("Transactions")}
        >
          Transactions
        </p>

        <p
          className={`cursor-pointer py-3 px-10 whitespace-nowrap ${
            isRender === "Transfers"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsRender("Transfers")}
        >
          Transfers
        </p>

        <p
          className={`cursor-pointer py-3 px-6 whitespace-nowrap ${
            isRender === "Internal Txns"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsRender("Internal Txns")}
        >
          Internal Txns
        </p>
      </div>

      <div>{renderItemComponent()}</div>
    </div>
  );
};

export default BlockDetailPage;
