import SimplePieChartComp from "../../components/SimplePieChartComp";
import SearchBarExpand from "../../components/SearchBarExpand";
import { IoCheckmarkCircleOutline, IoSearch } from "react-icons/io5";
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import {
  getTransactionStatsData,
  getTransactionTableData,
} from "../../utils/axios/Blockchain";
import { shortenString } from "../../utils/shortenString";
import { secondsAgo } from "../../utils/secondAgo";
import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";

const Transaction = () => {
  const [data, setData] = useState({});
  const [transactionTableData, setTransactionTableData] = useState({});
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataObj = await getTransactionStatsData();
        setData(dataObj?.message);
        const pieChartDataArr = [
          { name: "Total Volume", value: dataObj?.message?.Total_Volume },
        ];
        setPieChartData(pieChartDataArr);

        const data1 = await getTransactionTableData();
        setTransactionTableData(data1?.message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

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

        <div className=" flex flex-col space-y-6 md:space-y-6 lg:space-y-6 xl:space-y-0 2xl:space-y-0 md:flex-col lg:flex-col xl:flex-row 2xl:flex-row justify-between w-full">
          <div className=" flex flex-col gap-10 w-full md:w-full lg:w-full xl:w-[48%] 2xl:w-[48%]">
            <div className="bg-white px-4 md:px-12 py-6 gap-9 rounded-2xl shadow-xl ">
              <div className="flex flex-row justify-between">
                <p className=" text-xl font-bold">Tnx Counts</p>

                <Link to="/tokens/pox">
                  <div className="flex flex-row space-x-0">
                    <p className="font-semibold text-dark-red text-lg">More</p>
                    <p className="pt-1 text-dark-red">
                      <MdOutlineKeyboardArrowRight size={24} />
                    </p>
                  </div>
                </Link>
              </div>

              <div className=" flex flex-row justify-between gap-20 py-5">
                <div className="">
                  <p className="text-xl font-bold pt-5">
                    {data?.Total_Transactions &&
                      formatNumberWithCommas(data?.Total_Transactions)}
                  </p>
                  <p className="text-light-gray  pt-2">Total</p>
                </div>

                <div>
                  <p className="text-dark-green font-bold text-xl pt-5 text-right">
                    +
                    {data?.Yesterday_Transaction &&
                      formatNumberWithCommas(data?.Yesterday_Transaction)}
                  </p>
                  <p className="text-light-gray  pt-2"> Yesterday</p>
                </div>
              </div>
            </div>

            {/* Trading Volume */}
            <div className="bg-white px-4 md:px-12 py-6 gap-9 rounded-2xl shadow-xl">
              <div className="flex flex-row justify-between ">
                <p className=" text-xl font-bold "> Trading Volume</p>

                <Link to="/tokens/pox">
                  <div className="flex flex-row space-x-0">
                    <p className="font-semibold text-dark-red text-lg">More</p>
                    <p className="pt-1 text-dark-red">
                      <MdOutlineKeyboardArrowRight size={24} />
                    </p>
                  </div>
                </Link>
              </div>

              <div className=" flex flex-row justify-between gap-20 rounded-lg pt-6 pb-4">
                <div>
                  <p className="text-xl font-bold pt-5 ">
                    {formatNumberWithCommas(
                      (data?.Total_Volume / Math.pow(10, 6)).toFixed(2)
                    )}{" "}
                    POX
                  </p>
                  <p className="font-bold">=$18, 294.13b</p>
                  <p className="text-light-gray pt-2">Total</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-dark-green pt-5 text-right">
                    +
                    {formatNumberWithCommas(
                      (data?.Yesterday_Volume / Math.pow(10, 6)).toFixed(2)
                    )}{" "}
                    POX
                  </p>
                  <p className="font-bold text-right">=$15.85b</p>
                  <p className="text-light-gray pt-2 text-right">Yesterday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl w-full md:w-full lg:w-full xl:w-[48%] 2xl:w-[48%] py-3">
            <div className="flex flex-row items-center justify-between pt-4 px-6">
              <p className="font-bold text-xl">Daily Tnx Distribution</p>
            </div>

            <div className="flex w-full h-80 flex-row  justify-center items-center">
              <SimplePieChartComp value={pieChartData} />

              <div className=" w-4/5">
                <div className="flex flex-row items-center space-x-4 whitespace-nowrap">
                  <span className="bg-dark-yellow px-2 py-2  rounded-lg"></span>
                  <p className="pb-2 font-semibold">Total Transactions</p>
                </div>
                <div className="flex flex-row items-center pt-4 space-x-4 whitespace-nowrap">
                  <span className="bg-[#E66262] px-2 py-2 rounded-lg"></span>
                  <p className="pb-2 font-semibold">Yesterday Transactions</p>
                </div>
                <div className="flex flex-row items-center pt-4 space-x-4 whitespace-nowrap">
                  <span className="bg-[#1A5BA1] px-2 py-2  rounded-lg"></span>
                  <p className="font-semibold">Total Volume</p>
                </div>
                <div className="flex flex-row items-center pt-6 space-x-4 whitespace-nowrap">
                  <span className="bg-[#35CA7B] px-2 py-2 rounded-lg"></span>
                  <p className="pb-1 font-semibold">Yesterday Volume</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-2xl p-4 md:p-10  overflow-x-auto mt-16">
          <div className=" flex flex-row justify-between items-center">
            <div>
              <p className="">
                <span className="text-lg font-bold">36,045 </span>
                <span className="font-bold text-light-gray">
                  A total of 10000 transactions(s)
                </span>
              </p>
            </div>

            <div className="hidden md:hidden lg:flex xl:flex 2xl:flex flex-row justify-between px-32 rounded-md  border-2 border-lightest-gray">
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

          <div className="min-w-[1300px] flex flex-row justify-evenly bg-lightest-gray p-2 m-3 rounded-xl">
            <p className="w-[16%] font-bold  text-center">Hash</p>
            <p className="w-[10%] font-bold  text-center">Block</p>
            <p className="w-[10%] font-bold  text-center">Time</p>
            <p className="w-[16%] font-bold  text-center">Transaction Type</p>
            <p className="w-[12%] font-bold  text-center">From</p>
            <p className="w-[12%] font-bold  text-center">To</p>
            <p className="w-[16%] font-bold  text-center">Token</p>
            <p className="w-[10%] font-bold text-center">Result</p>
          </div>

          {transactionTableData?.transactions?.map((transaction, index) => {
            return (
              <>
                <div
                  className="min-w-[1300px] flex flex-row justify-evenly p-5 border-b-2 border-lightest-gray  rounded-xl"
                  key={index}
                >
                  <Link
                    to={`/transactiondetails/${transaction?.transactionId}`}
                    className="whitespace-nowrap w-[16%] text-center "
                  >
                    <p>
                      <span className="text-dark-red px-2">
                        {transaction?.transactionId &&
                          shortenString(transaction?.transactionId, 10)}
                      </span>
                    </p>
                  </Link>

                  <Link
                    to={`/blockdetailpage/${transaction?.blockNumber}`}
                    className="w-[10%] text-dark-red text-center "
                  >
                    <p>
                      {transaction?.blockNumber && transaction?.blockNumber}
                    </p>
                  </Link>

                  <p className="w-[10%] text-center ">
                    {transaction?.timeStamp &&
                      secondsAgo(transaction?.timeStamp)}
                  </p>
                  <p className="w-[16%] text-center  ">
                    {transaction.type && transaction?.type}
                  </p>

                  <Link
                    to={`/accountdetails/${transaction.fromAddress}`}
                    className="w-[12%] text-dark-red text-center "
                  >
                    <p>
                      {transaction?.fromAddress &&
                        shortenString(transaction?.fromAddress, 5)}
                    </p>
                  </Link>

                  <Link
                    to={`/tokendetailpage/${transaction?.toAddress}`}
                    className="w-[12%] text-dark-red text-center "
                  >
                    <p>
                      {transaction?.toAddress &&
                        shortenString(transaction?.toAddress, 5)}
                    </p>
                  </Link>

                  <p className="w-[16%] text-center">
                    {transaction?.assetAmount !== undefined &&
                    transaction?.assetAmount !== null
                      ? `${(
                          Number(transaction.assetAmount) / Math.pow(10, 6)
                        ).toFixed(6)} ${transaction.type || ""}`
                      : transaction?.type || "N/A"}
                  </p>

                  <p className="w-[10%]  flex justify-center indent-4">
                    {transaction?.result &&
                    transaction?.result === "SUCCESS" ? (
                      <IoCheckmarkCircleOutline size={24} color="green" />
                    ) : (
                      <RxCrossCircled size={24} color="red" />
                    )}
                  </p>
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
