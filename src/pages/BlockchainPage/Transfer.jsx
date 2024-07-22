import PieChartComp from "../../components/PieChartComp";
import SearchBarExpand from "../../components/SearchBarExpand";
import { IoSearch } from "react-icons/io5";
import { PiArrowBendDownLeftBold } from "react-icons/pi";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { getTransferTableDataOfPoxTransfer, getTransferTableDataOfPRC20Transfer} from "../../utils/axios/Blockchain";
import { secondsAgo } from "../../utils/secondAgo";
import { shortenString } from "../../utils/shortenString";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";
import { Link } from "react-router-dom";

// For Tab Switching
const POXTransferTable = () => {
  // For API Integration
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransferTableDataOfPoxTransfer();
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

       
        </div>

        <div className="min-w-[1500px] flex flex-row justify-evenly items-center bg-lightest-gray p-2 m-3 rounded-xl">
          <p className="w-[16%]">Hash</p>
          <p className="w-[8%]">Block</p>
          <p className="w-[12%]">Time</p>
          <p className="w-[12%]">Transaction Type</p>
          <p className="w-[15%]">From</p>
          <p className="w-[16%]">To</p>
          <p className="w-[12%]">Token</p>
          <p className="w-[5%]">Result</p>
          
        </div>

        {data?.transactions && data?.transactions.map((contact, index) => {
          return (
            <>
              <div className="min-w-[1500px] flex flex-row justify-evenly items-center p-5 border-b-2 border-lightest-gray  rounded-xl ">
                <p className="whitespace-nowrap w-[16%]">
                  <span className="text-dark-red px-2">
                  {contact?.transactionId && shortenString(contact?.transactionId,8)}
                  </span>
                </p>
                <p className="w-[8%]">{contact?.blockNumber && formatNumberWithCommas(contact?.blockNumber)}</p>
                <p className="w-[12%]">{contact?.timeStamp && secondsAgo(contact?.timeStamp)}</p>
                <p className="w-[12%] text-dark-red">{contact?.assetName && contact?.assetName}</p>
                <p className="w-[15%] text-dark-red">{contact?.fromAddress && shortenString(contact?.fromAddress,4)}</p>
                <p className="w-[16%] text-dark-red">{contact?.toAddress && shortenString(contact?.toAddress,4)}</p>
                <p className="w-[12%] text-dark-red">{Number(contact?.assetAmount/Math.pow(10,6)).toFixed(6)} {contact?.assetName && contact?.assetName}</p>
                <p className="w-[5%] text-dark-red">{contact?.result && contact?.result==="SUCCESS"?<IoCheckmarkCircleOutline size={24} color="green" />:<RxCrossCircled size={24} color="red"/>}</p>
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

const PRC20TransferTable = ({ setPieChartData }) => {
  // For API Integration
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransferTableDataOfPRC20Transfer();
        setData(data?.filterTokens);
        const pieChartData = [{ PRC20: data?.totalPage }];
        setPieChartData(pieChartData);
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
      <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto">
        <div className=" flex flex-row justify-between">
          <div>
            <p className="">
              <span className="text-lg font-bold">36,045 </span>
              <span className="font-bold text-light-gray">
                contracts in total
              </span>
            </p>
          </div>

        
        </div>

        <div className="min-w-[1500px] flex flex-row justify-evenly items-center bg-lightest-gray p-2 m-3 rounded-xl">
          <p className="w-[16%] text-left ">Token</p>
          <p className="w-[12%] text-left ">Amount/ID</p>
          <p className="w-[8%] text-left ">Result</p>
          <p className="w-[12%] text-left ">Time</p>
          <p className="w-[12%] text-left ">From</p>
          <p className="w-[12%] text-left ">To</p>
          <p className="w-[16%] text-left ">Hash</p>
          <p className="w-[8%] text-left">Block</p>
          
        </div>

        {data && data.map((contact, index) => {
          return (
            <>
              <div className="min-w-[1500px] flex flex-row justify-evenly items-center p-5 border-b-2 border-lightest-gray  rounded-xl ">
                <div className="whitespace-nowrap tex-center w-[12%]">
                  <div className="flex items-center space-x-4 mb-1">
                 <p className="text-dark-red"> Pollux...({contact?.assetName && contact?.assetName})</p>
                 <p className="px-2 py-[1px] rounded-md bg-light-red text-black"> {contact?.type && contact?.type}</p>
                 </div>

                 <Link to={`/tokendetailpage/${contact?.contractAddress}`}>
                 <span className="text-light-gray">
                  {contact?.contractAddress && shortenString(contact?.contractAddress,10)}
                  </span>
                 </Link>
                 
                </div>
                <p className="w-[16%] text-center">{contact?.asset && contact?.asset}</p>
                <p className="w-[8%] text-center">{contact?.result && contact?.result==="SUCCESS"?<IoCheckmarkCircleOutline size={24} color="green" />:<RxCrossCircled size={24} color="red"/>}</p>
                <p className="w-[12%] text-center ">{contact?.timeStamp && secondsAgo(contact?.timeStamp)}</p>
                <p className="w-[12%] text-center text-dark-red">{contact?.fromAddress && shortenString(contact?.fromAddress,4)}</p>
                <p className="w-[12%] text-center text-dark-red">{contact?.toAddress && shortenString(contact?.toAddress,4)}</p>
                <p className="w-[16%] text-center text-dark-red">{contact?.transactionId && shortenString(contact?.transactionId,5 )}</p>
                <p className="w-[8%] text-center text-dark-red">{contact?.blockNumber && formatNumberWithCommas(contact?.blockNumber)}</p>
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
  const [isRender, setIsRender] = useState("PRC20 Transfers");
  const [pieChartData, setPieChartData] = useState([]);

  const renderItemComponent = () => {
    switch (isRender) {
      case "PRC20 Transfers":
        return <PRC20TransferTable setPieChartData={setPieChartData}/> ;

      case "POX721 Transfers":
        return (
          <div className="bg-white rounded-2xl p-6">
          <p className="font-bold text-xl">No data found</p>
          </div>
        );

      case "POX Transfers":
        return <POXTransferTable />;

      case "POX1155 Transfers":
        return (
          <div className="bg-white rounded-2xl p-6">
          <p className="font-bold text-xl">No data found</p>
          </div>
        );
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
            Daily Txn Distribution (Total 4.75b Transfer)
            </p>

            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-center md:justify-evenly justify-between">
              <div className="h-80 w-[70%]">
                <PieChartComp value={pieChartData} xAxis="PRC20" yAxis=""/>
              </div>
            <div className="w-[30%]">
              <div className="flex flex-row items-center space-x-2 whitespace-nowrap">
              <span className="bg-dark-yellow px-2 py-2 rounded-lg"></span>
              <p className="pb-2 font-semibold">PRC20</p>
              </div>
              <div  className="flex flex-row items-center space-x-2 whitespace-nowrap">
              <span className="bg-[#E66262] px-2 py-2 rounded-lg"></span>
              <p className="pb-2 font-semibold">PRC721</p>
              </div>
              <div  className="flex flex-row items-center space-x-2 whitespace-nowrap">
              <span className="bg-[#35CA7B] px-2 py-2 rounded-lg"></span>
              <p className="pb-1 font-semibold">PRC1155</p>
              </div>
              <div  className="flex flex-row items-center space-x-2 whitespace-nowrap">
              <span className="bg-[#869BFE] px-2 py-2 rounded-lg"></span>
              <p className="font-semibold">Other Smart Contracts</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-start gap-8 pt-20 pb-10 overflow-x-auto">
        <button
          className={`cursor-pointer py-3 px-4 whitespace-nowrap  ${
            isRender === "PRC20 Transfers"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsRender("PRC20 Transfers")}
        >
          PRC20 Transfers
        </button>
        <button
          className={`cursor-pointer py-3 px-4 whitespace-nowrap ${
            isRender === "POX721 Transfers"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsRender("POX721 Transfers")}
        >
          POX721 Transfers
        </button>

        <button
          className={`cursor-pointer py-3 px-4 whitespace-nowrap ${
            isRender === "POX Transfers"
              ? "bg-dark-yellow font-semibold shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsRender("POX Transfers")}
        >
          POX Transfers
        </button>

        <button
          className={`cursor-pointer py-3 px-4 whitespace-nowrap ${
            isRender === "POX1155 Transfers"
              ? "bg-dark-yellow font-semibold shadow-lg rounded-lg"
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
