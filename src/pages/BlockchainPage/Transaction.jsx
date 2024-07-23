import SimplePieChartComp from "../../components/SimplePieChartComp";
import SearchBarExpand from "../../components/SearchBarExpand";
import { IoSearch } from "react-icons/io5";
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import { getTransactionStatsData, getTransactionTableData } from "../../utils/axios/Blockchain";
import { shortenString } from "../../utils/shortenString";
import { secondsAgo } from "../../utils/secondAgo";
import { Link } from "react-router-dom";

const Transaction = () => {
  const [data, setData] = useState({});
  const [transactionTableData, setTransactionTableData] = useState({});
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataObj = await getTransactionStatsData();
        setData(dataObj?.message);
        const pieChartDataArr = [{ name: 'Total Volume', value: dataObj?.message?.Total_Volume },];
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

        <div className=" flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between w-full">
          <div className=" flex flex-col gap-10 w-full md:w-[48%]">
            <div className="bg-white px-4 md:px-12 py-6 gap-9 rounded-2xl shadow-xl ">
              <div className="flex flex-row justify-between">
                <p className=" text-xl font-bold">Tnx Counts</p>
              </div>

              <div className=" flex flex-row justify-between gap-20 py-5">
                <div className="">
                  <p className="text-xl font-bold">
                    {data?.Total_Transactions}
                  </p>
                  <p className="text-light-gray  pt-5">Total</p>
                </div>

                <div>
                  <p className="text-dark-green font-bold text-xl">
                    +{data?.Yesterday_Transaction}
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
                  <p className="text-xl font-bold ">
                    {(data?.Total_Volume / Math.pow(10, 6)).toFixed(2)} POX
                  </p>
                  <p className="font-bold">=$18, 294.13b</p>
                  <p className="text-light-gray pt-5">Total</p>
                </div>

                <div>
                  <p className="text-xl font-bold text-dark-green ">
                    +{(data?.Yesterday_Volume / Math.pow(10, 6)).toFixed(2)} POX
                  </p>
                  <p className="font-bold">=$15.85b</p>
                  <p className="text-light-gray pt-5">Yesterday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl w-full md:w-[48%] py-3">
            <div className="flex flex-row items-center justify-between pt-4 px-6">
              <p className="font-bold text-xl">Daily Tnx Distribution</p>
              <div className="flex flex-row">
                <p>More</p>
                <MdKeyboardArrowRight className="mt-1 text-xl" />
              </div>
            </div>

            <div className="flex w-full h-80 flex-row justify-center items-center">
            <SimplePieChartComp value={pieChartData} />

            <div className=" w-4/5">
              <div className="flex flex-row items-center space-x-2 whitespace-nowrap">
              <span className="bg-dark-yellow px-2 py-2 rounded-lg"></span>
              <p className="pb-2 font-semibold">Total Transactions</p>
              </div>
              <div  className="flex flex-row items-center space-x-2 whitespace-nowrap">
              <span className="bg-[#E66262] px-2 py-2 rounded-lg"></span>
              <p className="pb-2 font-semibold">Yesterday Transactions</p>
              </div>
              <div  className="flex flex-row items-center space-x-2 whitespace-nowrap">
              <span className="bg-[#1A5BA1] px-2 py-2 rounded-lg"></span>
              <p className="font-semibold">Total Volume</p>
              </div>
              <div  className="flex flex-row items-center space-x-2 whitespace-nowrap">
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

          <div className="min-w-[1300px] flex flex-row justify-evenly bg-lightest-gray p-2 m-3 rounded-xl">
            <p className="w-[18%]">Hash</p>
            <p className="w-[10%]">Block</p>
            <p className="w-[10%]">Time</p>
            <p className="w-[16%]">Transaction Type</p>
            <p className="w-[10%]">From</p>
            <p className="w-[10%] text-center">To</p>
            <p className="w-[16%] text-center">Token</p>
            <p className="w-[10%] text-center">Result</p>
          </div>

          {transactionTableData?.transactions?.map((transaction, index) => {
            return (
              <>
                <div className="min-w-[1300px] flex flex-row justify-evenly p-5 border-b-2 border-lightest-gray  rounded-xl" key={index}>
                  <Link to={`/transactiondetails/${transaction?.transactionId}`}> 
                  <p className="whitespace-nowrap w-[18%]">
                  <span className="text-dark-red px-2">
                    {transaction?.transactionId && shortenString(transaction?.transactionId,10)}
                  </span>
                </p>
                  </Link>
              
                  <Link to={`/blockdetailpage/${transaction?.blockNumber}`}>
                  <p className="w-[10%] text-dark-red">{transaction?.blockNumber}</p>
                  </Link>
                  
                  <p className="w-[10%]">{transaction?.timeStamp && secondsAgo(transaction.timeStamp)}</p>
                  <p className="w-[16%] ">{transaction.type}</p>

                  <Link to={`/accountdetailpage/${transaction.fromAddress}`}>
                  <p className="w-[10%] ">{shortenString(transaction.fromAddress,5)}</p>
                  </Link>
                  
                  <p className="w-[10%] text-center">{shortenString(transaction.toAddress,5)}</p>
                  <p className="w-[16%] text-center">{transaction.assetAmount/Math.pow(10,6)}</p>
                  <p className="w-[10%] text-center indent-4">{transaction.result}</p>
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
