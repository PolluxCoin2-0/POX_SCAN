import PieChartComp from "../../components/PieChartComp";
import SearchBarExpand from "../../components/SearchBarExpand";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { getTransactionStatsData, getTransferTableDataOfPoxTransfer, getTransferTableDataOfPRC20Transfer} from "../../utils/axios/Blockchain";
import { secondsAgo } from "../../utils/secondAgo";
import { shortenString } from "../../utils/shortenString";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";


// For Tab Switching
const POXTransferTable = () => {
   // For Pagination
   const [currentPage, setCurrentPage] = useState(0);
  
  // For API Integration
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransferTableDataOfPoxTransfer(currentPage);
        setData(data?.message);
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, [currentPage])

 

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto lg:overflow-x-auto xl:overflow-x-auto 2xl:overflow-hidden">
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

        <div className="min-w-[1300px] flex flex-row justify-evenly items-center bg-lightest-gray p-2 m-3 rounded-xl">
          <p className="w-[18%] text-center  font-bold ">Hash</p>
          <p className="w-[8%] text-center  font-bold">Block</p>
          <p className="w-[12%] text-center  font-bold">Time</p>
          <p className="w-[12%] text-center  font-bold">Transaction Type</p>
          <p className="w-[14%] text-center  font-bold">From</p>
          <p className="w-[14%] text-center  font-bold">To</p>
          <p className="w-[12%] text-center font-bold">Token</p>
          <p className="w-[6%] text-center  font-bold">Result</p>
          
        </div>

        {data?.transactions && data?.transactions.map((contact, index) => {
          return (
            <>
              <div className="min-w-[1300px] flex flex-row justify-evenly items-center p-5 border-b-2 border-lightest-gray  rounded-xl pr-0">
                <Link to={`/transactiondetails/${contact?.transactionId}`} className="whitespace-nowrap w-[18%] text-center ">
                <p >
                  <span className="text-dark-red px-2">
                  {contact?.transactionId && shortenString(contact?.transactionId,10)}
                  </span>
                </p>
                </Link>
               
               <Link to={`/blockdetailpage/${contact?.blockNumber}`} className="w-[8%] text-dark-red text-center">
               <p >{contact?.blockNumber && contact?.blockNumber}</p>
               </Link>
                
                <p className="w-[12%]  text-center  ">{contact?.timeStamp && secondsAgo(contact?.timeStamp)}</p>
                <p className="w-[12%]  text-center  ">{contact?.assetName && contact?.assetName}</p>

                <Link to={`/accountdetails/${contact?.fromAddress}`} className="w-[14%] text-center text-dark-red">
                <p >{contact?.fromAddress && shortenString(contact?.fromAddress,5)}</p>
                </Link>
               
               <Link to={`/tokendetailpage/${contact?.toAddress}`} className="w-[14%] text-center text-dark-red">
               <p >{contact?.toAddress && shortenString(contact?.toAddress,5)}</p>
               </Link>
                
                <p className="w-[12%] text-center  ">{Number(contact?.assetAmount/Math.pow(10,6)).toFixed(6)} {contact?.assetName && contact?.assetName}</p>
                <p className="w-[6%]  flex justify-center ">{contact?.result && contact?.result==="SUCCESS"?<IoCheckmarkCircleOutline size={24} color="green" />:<RxCrossCircled size={24} color="red"/>}</p>
              </div>
            </>
          );
        })}

        <div className="flex justify-start md:justify-end">
          <Pagination
            
            totalPages={data?.totalPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

const PRC20TransferTable = ({ setPieChartData }) => {
  // For Pagination
  const [currentPage, setCurrentPage] = useState(0);
  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // For API Integration
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransferTableDataOfPRC20Transfer(currentPage);
        setData(data);
        const pieChartData = [{ PRC20: data?.totalPage }];
        setPieChartData(pieChartData);
      } catch (error) {
        console.log('error', error);
      } 
    };
    fetchData();
  }, [currentPage])

  

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

        <div className="min-w-[1300px] flex flex-row justify-evenly items-center bg-lightest-gray p-2 m-3 rounded-xl pl-0">
          <p className="w-[16%] text-center font-bold ">Token</p>
          <p className="w-[12%] text-center font-bold ">Amount/ID</p>
          <p className="w-[8%] text-center  font-bold">Result</p>
          <p className="w-[12%] text-center font-bold ">Time</p>
          <p className="w-[12%] text-center font-bold ">From</p>
          <p className="w-[12%] text-center font-bold ">To</p>
          <p className="w-[16%] text-center font-bold">Hash</p>
          <p className="w-[8%] text-center font-bold">Block</p>
          
        </div>

        {data?.filterTokens && data?.filterTokens.map((contact, index) => {
          return (
            <>
              <div className="min-w-[1300px] flex flex-row justify-evenly items-center p-5 border-b-2 border-lightest-gray  rounded-xl pr-0">
                <div className="whitespace-nowrap text-center w-[16%] ">
                  <div className="flex justify-center space-x-4 mb-1">
                 <p className="text-dark-red "> Pollux...({contact?.assetName && contact?.assetName})</p>
                 <p className="px-2 py-[1px] t rounded-md bg-light-red text-black"> {contact?.type && contact?.type}</p>
                 </div>

                 <Link to={`/tokendetailpage/${contact?.contractAddress}`} className="text-light-gray ">
                 <span >
                  {contact?.contractAddress && shortenString(contact?.contractAddress,10)}
                  </span>
                 </Link>
                 
                </div>
                <p className="w-[12%] text-center  ">{contact?.asset && contact?.asset}</p>
                <p className="w-[8%] flex justify-center  ">{contact?.result && contact?.result==="SUCCESS"?<IoCheckmarkCircleOutline size={24} color="green" />:<RxCrossCircled size={24} color="red"/>}</p>
                <p className="w-[12%] text-center">{contact?.timeStamp && secondsAgo(contact?.timeStamp)}</p>

                <Link to={`/accountdetails/${contact?.fromAddress}`} className="w-[12%] text-center  text-dark-red">
                <p >{contact?.fromAddress && shortenString(contact?.fromAddress,4)}</p>
                </Link>
                
                <Link to={`/tokendetailpage/${contact?.toAddress}`} className="w-[12%] text-center  text-dark-red">
                <p >{contact?.toAddress && shortenString(contact?.toAddress,4)}</p>
                </Link>
                
                <Link to={`/transactiondetails/${contact?.transactionId}`} className="w-[16%] text-center  text-dark-red">
                <p >{contact?.transactionId && shortenString(contact?.transactionId,5 )}</p>
                </Link>
              
                
                <Link to={`/blockdetailpage/${contact?.blockNumber}`} className="w-[8%] text-center  text-dark-red">
                 <p >
                {contact?.blockNumber && contact?.blockNumber}
                </p>
                </Link>
               
              </div>
            </>
          );
        })}

        <div className="flex justify-start md:justify-end">
          <Pagination
            totalPages={data?.totalPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

const Transfer = () => {

  const [data, setData] = useState([]);
  const [stats, setStats] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransferTableDataOfPRC20Transfer();
        setData(data);

        const stats = await getTransactionStatsData();
        
        setStats(stats?.message);
      } catch (error) {
        console.log('error', error);
      } 
    };
    fetchData();
  }, [])
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
    <div className="px-4 md:px-4 lg:px-4 xl:px-12 2xl:px-12 pb-12">
      <div>
        <SearchBarExpand />
      </div>

      <div className="">
        <div className="flex flex-row justify-between pb-10">
          <p className="text-2xl font-bold">Transfers</p>
        </div>

        <div className=" flex flex-col space-y-6 lg:space-y-0 xl:space-y-0 2xl:space-y-0 md:space-y-6 md:flex-col lg:flex-row xl:flex-row 2xl:flex-row
        justify-between w-full">
          <div className=" flex flex-col gap-10 w-full md:w-full lg:w-[48%] xl:w-[48%] 2xl:w-[48%]">
            <div className="bg-white px-4 md:px-12 py-6 gap-9 rounded-2xl shadow-xl ">
              <div className="flex flex-row justify-between">
                <p className=" text-xl font-bold">Transfer Counts</p>
                
                <div className="flex flex-row cursor-pointer">
                  <p className="text-dark-red text-lg font-semibold">More</p>
                  <MdKeyboardArrowRight className="mt-1 " size={24} color="#C23631"/>
                </div>
                
               
              </div>

              <div className=" flex flex-row justify-between rounded-lg py-5">
                <div className="">
                  <p className="text-xl font-bold pt-5">{data?.totalPage && formatNumberWithCommas(data?.totalPage)}</p>
                  <p className="text-light-gray  pt-2">Total</p>
                </div>

                <div className="text-right">
                  <p className="text-dark-green font-bold text-xl pt-5">
                    0
                  </p>
                  <p className="text-light-gray  pt-2"> Yesterday</p>
                </div>
              </div>
            </div>

            {/* Transfer Volume */}
            <div className="bg-white px-4 md:px-12 py-6 gap-9 rounded-2xl shadow-xl">
              <div className="flex flex-row justify-between ">
                <p className=" text-xl font-bold "> Transfer Volume</p>
                
                <div className="flex flex-row cursor-pointer">
                  <p className="text-dark-red text-lg font-semibold">More</p>
                  <MdKeyboardArrowRight className="mt-1" size={24} color="#C23631"/>
                </div>
                
              
              </div>

              <div className=" flex flex-row justify-between  rounded-lg pt-6 pb-6">
                <div>
                  <p className="text-xl font-bold pt-5">{stats?.Total_Volume && formatNumberWithCommas(Number(stats?.Total_Volume /Math.pow(10,6)).toFixed(2))}</p>
                  <p className="font-bold">≈$0b</p>
                  <p className="text-light-gray pt-2">Total</p>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-dark-green pt-5">
                  {stats?.Yesterday_Volume && formatNumberWithCommas(Number(stats?.Yesterday_Volume /Math.pow(10, 4)).toFixed(2))}b
                  </p>
                  <p className="font-bold">≈$0</p>
                  <p className="text-light-gray pt-2">Yesterday</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl w-full md:w-full lg:w-[48%] xl:w-[48%] 2xl:w-[48%] py-3">
            <p className="font-bold text-xl pt-5 pl-8 ">
            Daily Txn Distribution (Total 4.75b Transfer)
            </p>

            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-center md:justify-evenly
            lg:flex-col xl:flex-col 2xl:flex-row justify-between">
              <div className="lg:h-64 xl:h-64 lg:ml-12 xl:ml-12 h-80 lg:w-full xl:w-full w-[70%]">
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
