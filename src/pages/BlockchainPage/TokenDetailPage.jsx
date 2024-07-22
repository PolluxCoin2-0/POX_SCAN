import { BiSolidCopyAlt } from "react-icons/bi"
import { Pagination, SearchBarExpand } from "../../components"
import { RiQrCodeFill } from "react-icons/ri"
import { AiOutlineQuestion } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getContractDetailData, getTokenDetailData, getTokenTransactionsDetailData } from "../../utils/axios/Blockchain";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { shortenString } from "../../utils/shortenString";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";
import { secondsAgo } from "../../utils/secondAgo";
import { RxCrossCircled } from "react-icons/rx";
import { toast } from "react-toastify";
import TokenContractPage from "./TokenContractPage";

const TransactionsTable = () => {
    // For API Integration
    const [data, setData] = useState({});
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getTokenTransactionsDetailData();
          
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
        <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto md:overflow-hidden mt-10">
          <div className=" flex flex-row justify-between">
            <div>
              <p className="text-lg font-bold">A total of 10 transaction(s) </p>
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
  
          {data?.transactions && data?.transactions.map((transactions, index) => {
            return (
              <>
                <div className="min-w-[1500px] flex flex-row justify-evenly items-center p-5 border-b-2 border-lightest-gray  rounded-xl ">
                  <p className="whitespace-nowrap w-[16%]">
                    <span className="text-dark-red px-2">
                    {transactions?.transactionId && shortenString(transactions?.transactionId,8)}
                    </span>
                  </p>
                  <p className="w-[8%]">{transactions?.blockNumber && formatNumberWithCommas(transactions?.blockNumber)}</p>
                  <p className="w-[12%]">{transactions?.timeStamp && secondsAgo(transactions?.timeStamp)}</p>
                  <p className="w-[12%] text-dark-red">{transactions?.type && transactions?.type}</p>
                  <p className="w-[15%] text-dark-red">{transactions?.fromAddress && shortenString(transactions?.fromAddress,4)}</p>
                  <p className="w-[16%] text-dark-red">{transactions?.toAddress && shortenString(transactions?.toAddress,4)}</p>
                  <p className="w-[12%] text-dark-red">{transactions?.assetAmount && transactions?.assetAmount} {transactions?.type && transactions?.type} </p>
                  <p className="w-[5%] text-dark-red">{transactions?.result && transactions?.result==="SUCCESS"?<IoCheckmarkCircleOutline size={24} color="green" />:<RxCrossCircled size={24} color="red"/>}</p>
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


  const TransferTable = () => {
    // For Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; // Example total pages
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
     return (
      <div>
        <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto md:overflow-hidden mt-10">
          <div className=" flex flex-row justify-between">
            <div>
              <p className="text-lg font-bold">A total of 0 PRC20 Transfers </p>
            </div>
            </div>
  
          <div className="min-w-[1500px] flex flex-row justify-evenly items-center bg-lightest-gray p-2 pl-32 m-3 rounded-xl">
            <p className="w-[12%]">Token</p>
            <p className="w-[16%]">Amount/Function</p>
            <p className="w-[12%]">Result</p>
            <p className="w-[12%]">Time</p>
            <p className="w-[12%]">From</p>
            <p className="w-[12%]">To</p>
            <p className="w-[12%]">Hash</p>
            <p className="w-[12%]">Block</p>
            
          </div>
  
          
           
  
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
    }


const TokenDetailPage = () => {

     const handleCopy = (address) => {
    navigator.clipboard.writeText(address);
    toast.success("Hash copied successfully!");
  };



    const [tokendata, setTokenData] = useState({});
    const [contractdata, setContractData] = useState({});
     useEffect(() => {
      const fetchData = async () => {
        try {
          const tokendata = await getTokenDetailData();
          const contractdata = await getContractDetailData();
          console.log(contractdata);

          setTokenData(tokendata?.message);
          setContractData(contractdata);
        } catch (error) {
          console.log('error', error);
        } 
      };
  
      fetchData();
    }, [])

    
    const [isRender, setIsRender] = useState("Transactions");
    const renderItemComponent = () => {
    switch (isRender) {
      case "Transactions":
        return <TransactionsTable/> ;

      case "Contracts":
        return <TokenContractPage />;

      case "Transfers":
        return <TransferTable />;

      
    }
  };
  return (
    <div className="px-12 pb-12">

        {/* Search Bar */}
        <div>
            <SearchBarExpand />
        </div>

        {/* first Div */}
        <div className="flex flex-row justify-between">

            <div>
                <p className="text-xl font-bold">Account</p>

                <div className="flex flex-row space-x-4">
                <p className="text-lg font-semibold pt-3">{tokendata?.address}</p>
                <p className="text-xl p-2 bg-white rounded-full cursor-pointer ">
              <BiSolidCopyAlt
                className="cursor-pointer"
              onClick={() => handleCopy(tokendata?.address)}
              />
            </p>
            <p className="text-xl bg-white p-2 rounded-full cursor-pointer">
              <RiQrCodeFill />
            </p>
            </div>

                <div className="flex flex-row space-x-4 mt-3">
                    <p  className=" py-1 pl-2 pr-2 font-semibold bg-lightest-gray rounded-md">Add a private tag</p>
                    <p  className=" py-1 pl-2 pr-2 font-semibold bg-lightest-gray text-dark-brown rounded-md">{tokendata?.accountname && tokendata?.accountname}

                        </p>
                </div>
            </div>

            <div className="flex flex-row space-x-10 mt-14">
            <div>
                <div className="flex flex-row space-x-2">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p>Recent Activity (UTC)</p>
                </div>
            
                <p>{tokendata?.updatedAt && tokendata?.updatedAt}</p>
            </div>

            <div>
                <div className="flex flex-row space-x-2">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p>Created on (UTC)</p>
                </div>
                <p>{tokendata?.updatedAt && tokendata?.updatedAt}</p>
            </div>
        </div>
        </div>

        {/* Second Div */} 
        <div className="flex flex-row w-full space-x-10 mt-6" >

            <div className="w-[60%] bg-white rounded-lg p-5 shadow-lg">
                <p className="text-2xl font-bold border-b-[1px] border-text-bg-gray pb-4">Overview</p>

                <div>

                    <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Name: </p>
                        </div>
                   
                        <p>{tokendata?.contractDetails?.contractName && tokendata?.contractDetails?.contractName}</p>
                    </div>

                    <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Total Assets:</p>
                        </div>
                   
                    <p> {tokendata?.balance  && tokendata?.balance/Math.pow(10,6)} POX</p>
                    </div>

                    <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Transactions:</p>
                        </div>
                   
                    <p>{tokendata?.Transactions && tokendata?.Transactions}</p>
                    </div>

                    <div className="flex flex-row items-center justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Creator:</p>
                        </div>
                   
                    <div className="flex flex-col items-end">
                    <p>{tokendata?.contractDetails?.issuer && tokendata?.contractDetails?.issuer }  /   at Txn   /  </p>
                    <p>d3fe3dc36194e6c5c115989f113ad12753a2990c7fc0c98e4b2243e7ea7 83386</p>
                    </div>
                   
                    </div>

                    <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Energy Consumption Ratio:</p>
                        </div>
                    
                    <p>Contract 100%   /   User {tokendata?.TotalEnergy}%</p>
                    </div>

                    <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1 "><AiOutlineQuestion /> </p>
                        <p className="font-bold">Creator's Energy:</p>
                        </div>
                    
                    <p>Available: 0/0</p>
                    </div>

                    <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Extra Energy Consumption Factor:</p>
                        </div>
                   
                    <p>{tokendata?.TotalEnergy}%</p>
                    </div>

                    <div className="flex flex-row justify-between  pb-4 pt-4">
                        <div className="flex flex-row space-x-2">
                        <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /> </p>
                        <p className="font-bold">Energy & POLLUX Power:</p>
                        </div>
                  
                    <p>Energy: Available {tokendata?.TotalEnergy}   /  0POLLUX Power: Voted {tokendata?.VotedVotes}/{tokendata?.TotalVotes}</p>
                    </div>
                </div>
            </div>


            <div className="w-[40%] bg-white rounded-lg shadow-lg p-5">

                <div className="flex flex-row justify-between">
                  <p  className="text-2xl font-bold pb-4">Calling Overview</p>
                  <p className=" font-semibold">Only data within 30 days is counted</p>
                </div>

                <div className="w-full flex flex-row justify-between mt-5 border-b-[1px] border-text-bg-gray pb-4">
                    <div className="w-[40%] bg-text-bg-gray rounded-lg text-center pt-20 h-[220px]">
                        <p className="text-2xl font-bold">{contractdata?.totalContractCalls && contractdata?.totalContractCalls}</p>
                        <p className="text-light-gray"> Total Calls</p>
                    </div>

                    <div className="w-[60%] pl-5 pr-5">
                        <div className="flex flex-row justify-between pb-8">
                            <p className="text-lg font-semibold">TOP 5 Methods</p>
                            <p className="text-lg font-semibold">Calls Proportion</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p>{contractdata?.top5Selectors?.[0]?.selector}</p>
                            <p>{contractdata?.top5Selectors?.[0]?.proportion}</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p>{contractdata?.top5Selectors?.[1]?.selector}</p>
                            <p>{contractdata?.top5Selectors?.[1]?.proportion}</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p>{contractdata?.top5Selectors?.[2]?.selector}</p>
                            <p>{contractdata?.top5Selectors?.[2]?.proportion}</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p>{contractdata?.top5Selectors?.[3]?.selector}</p>
                            <p>{contractdata?.top5Selectors?.[3]?.proportion}</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-between mt-5 pb-4">
                    <div className="w-[40%] bg-text-bg-gray rounded-lg text-center pt-20 h-[220px]">
                        <p className="text-2xl font-bold">{contractdata?.allAddressesCall && contractdata?.allAddressesCall}</p>
                        <p className="text-light-gray"> Total Addresses</p>
                    </div>

                    <div className="w-[60%] pl-5 pr-5">
                        <div className="flex flex-row justify-between pb-8">
                            <p className="text-lg font-semibold">TOP 5 Addresses</p>
                            <p className="text-lg font-semibold">Calls Proportion</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-dark-red">{contractdata?.top5Addresses?.[0]?.address && shortenString(contractdata?.top5Addresses?.[0]?.address,6 )}</p>
                            <p>{contractdata?.top5Addresses?.[0]?.proportion}</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-dark-red">{contractdata?.top5Addresses?.[1]?.address && shortenString(contractdata?.top5Addresses?.[1]?.address, 6)}</p>
                            <p>{contractdata?.top5Addresses?.[1]?.proportion}</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-dark-red">{contractdata?.top5Addresses?.[2]?.address && shortenString(contractdata?.top5Addresses?.[2]?.address, 6)}</p>
                            <p>{contractdata?.top5Addresses?.[2]?.proportion}</p>
                        </div>

                        <div className="flex flex-row justify-between pb-2">
                            <p className="text-dark-red">{contractdata?.top5Addresses?.[3]?.address && shortenString(contractdata?.top5Addresses?.[3]?.address, 6)}</p>
                            <p>{contractdata?.top5Addresses?.[3]?.proportion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Table data */}
        <div className="flex flex-row space-x-8 mt-10">
            <p 
            className={`cursor-pointer py-3 px-4 whitespace-nowrap ${
                isRender === "Transactions"
                  ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
                  : "text-black bg-text-bg-gray shadow-md rounded-lg"
              }`}
            onClick={() => setIsRender("Transactions")}>Transactions</p>


            <p 
            className={`cursor-pointer py-3 px-4 whitespace-nowrap ${
                isRender === "Contracts"
                  ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
                  : "text-black bg-text-bg-gray shadow-md rounded-lg"
              }`}
            onClick={() => setIsRender("Contracts")}>Contracts</p>


            <p 
            className={`cursor-pointer py-3 px-4 whitespace-nowrap ${
                isRender === "Transfers"
                  ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
                  : "text-black bg-text-bg-gray shadow-md rounded-lg"
              }`}
            onClick={() => setIsRender("Transfers")}>Transfers</p>
        </div>

        <div>{renderItemComponent()}</div>
      
    </div>
  )
}

export default TokenDetailPage