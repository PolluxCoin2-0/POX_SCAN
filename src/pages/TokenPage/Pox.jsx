import { useEffect, useState } from "react";
import { TokenData } from "../../data/Token";
import SearchBarExpand from "../../components/SearchBarExpand";
import Pagination from "../../components/Pagination";
import { getHoldersData, getPoxData } from "../../utils/Token";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { shortenString } from "../../utils/shortenString";
import {secondsAgo} from "../../utils/secondAgo";

const TokenTransferTable = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getPoxData();
        
        setData(data?.message);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, [])

 return (
  
     <div>
    <div className="min-w-[1500px]  flex flex-row justify-around p-2 bg-lightest-gray rounded-lg ">
    <p className=" w-[12%]">Hash</p>
    <p className=" w-[12%]">Block</p>
    <p className=" w-[8%]">Time</p>
    <p className=" w-[12%]">Transaction Type</p>
    <p className=" w-[16%] whitespace-nowrap">
      From
    </p>
    <p className=" w-[12%]">To</p>
    <p className=" w-[16%]">Token</p>
    <p className=" w-[8%]">Result</p>
  </div>


  {data?.transactions?.map && data?.transactions?.map((stablecoin, index) => {
          return (
            <>
              <div className="min-w-[1500px]  flex flex-row  justify-around border-b-2 p-3 border-text-bg-gray">
                <p className="text-dark-red  w-[12%]">{stablecoin?.transactionId && shortenString(stablecoin?.transactionId)}</p>
                <p className=" w-[12%]">{stablecoin.blockNumber}</p>
                <p className="text-dark-red  w-[8%]">{stablecoin.timeStamp && secondsAgo(stablecoin?.timeStamp)}</p>
                <p className=" w-[12%]">{stablecoin.PoxCount}</p>
                <p className=" w-[16%]">{stablecoin.fromAddress && shortenString(stablecoin?.fromAddress)}</p>
                <p className=" w-[12%]">{stablecoin.toAddress && shortenString(stablecoin?.toAddress)}</p>
                <p className=" w-[16%]">{stablecoin?.assetAmount && ((stablecoin.assetAmount/1000000).toFixed(6))} {stablecoin?.assetName}</p>
                <p className=" w-[8%] text-dark-green text-xl"><IoCheckmarkCircleOutline /></p>
              </div>
            </>
          );
        })}

  </div>

 )
}

const HoldersTable = () => {
  const [holderdata, setHolderData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const holderdata = await getHoldersData();
        
        
        setHolderData(holderdata?.message);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, [])

  return (
    <div>
       <div className="flex flex-row justify-evenly p-2 bg-lightest-gray rounded-lg ">
        <p className="w-[8%]">#</p>
        <p className="w-[32%]">Account</p>
        <p className="w-[15%]">Amount</p>
        <p className="w-[15%]">Value</p>
        <p className="w-[15%]">Percentage</p>
        <p className="w-[15%]">Latest TXN Time(Local)</p>
       </div>

       {holderdata?.apiResult?.map && holderdata?.apiResult?.map((stablecoin, index) => {
          return (
            <>
              <div className="min-w-[1500px]  flex flex-row  justify-around border-b-2 p-3 border-text-bg-gray">
                <p className="w-[8%] text-dark-red "></p>
                <p className=" w-[32%]">{stablecoin?.address}</p>
                <p className="w-[15%] text-dark-red ">{stablecoin?.balance}</p>
                <p className="w-[15%] ">{stablecoin.PoxCount}</p>
                <p className=" w-[15%]">{stablecoin?.percentage.toFixed(6)}%</p>
                <p className=" w-[15%]"></p>
                
              </div>
            </>
          );
        })}

    </div>
  )
}
const Pox = () => {
  const [isRender, setIsRender] = useState("Token Transfer");
  const renderItemComponent = () => {
    switch (isRender) {
      case "Token Transfer":
        return <TokenTransferTable />;
      case "Holders":
        return <HoldersTable />;
     
      default:
        return null;
    }
  };

  // For Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const [onSearch, setOnSearch] = useState("");
  return (
    <div className="px-4 md:px-12 pb-12">
      <div>
        <SearchBarExpand onSearch={setOnSearch} />
      </div>
      <p className="font-bold text-2xl">Blocks</p>
      <div className=" flex flex-col  md:flex-row justify-between">
        {/* Number of Blocks */}
        <div className="w-full md:w-[32%]  bg-white shadow-lg rounded-2xl p-5 my-6 md:my-12">
          <div className="pt-1">
            <p className="font-bold">Number of Blocks</p>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1 ">
            <div>
              <p className="text-dark-red font-bold text-xl">60754103</p>
              <p className="pt-4 text-sm text-light-gray">Latest</p>
            </div>

            <div>
              <p className="text-xl font-bold">+28,793</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">
                Yesterday
              </p>
            </div>
          </div>
        </div>

        {/* Block Rewards */}
        <div className="w-full md:w-[32%]  rounded-2xl p-5 bg-white shadow-md my-3 md:my-12">
          <div className="pt-1">
            <p className="font-bold">Block Rewards</p>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1">
            <div>
              <p className="text-xl font-bold">8.87b POX</p>
              <p className="text-xs flex justify-end ">=$1,078,347,147.3</p>
              <p className="pt-4 text-sm text-light-gray">Total</p>
            </div>

            <div>
              <p className="text-xl font-bold">5067,392 TRX</p>
              <p className="text-xs flex justify-end">=$615,954.9</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">
                Yesterday
              </p>
            </div>
          </div>
        </div>

        {/* Stats on Burned Pox */}
        <div className="w-full md:w-[32%] rounded-2xl p-5 bg-white shadow-md my-3 md:my-12">
          <div className="pt-1">
            <p className="font-bold">Stats on Burned POX</p>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1">
            <div>
              <p className="text-xl font-bold">11.21b POX</p>
              <p className=" text-xs">=$1,363,166,000.31</p>
              <p className="pt-4 text-sm text-light-gray flex ">Total</p>
            </div>

            <div>
              <p className="text-xl font-bold">11,220,752 TRX</p>
              <p className="text-xs flex justify-end">=$1,363,912.13</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">
                Yesterday
              </p>
            </div>
          </div>
        </div>
      </div>
       
       <div className="flex flex-row space-x-8">
       <p className="font-bold text-xl mb-6 mt-6 md:mt-0 md:mb-12 bg-dark-yellow rounded-md px-10 py-2"
        onClick={() => setIsRender("Token Transfer")}>Token Transfer</p>

       <p  className="font-bold text-xl mb-6 mt-6 md:mt-0 md:mb-12 bg-light-mid-gray rounded-md px-14 py-2"
       onClick={() => setIsRender("Holders")}>Holders</p>
       </div>
       
      
      <div className="bg-white rounded-2xl p-4 md:p-7 ">
      <div className="overflow-x-auto md:overflow-hidden">
        <p className="pb-5 font-medium text-light-gray">
          Only the first{" "}
          <span className="text-black font-semibold">10,000</span> records are
          displayed
        </p>

      

        <div>{renderItemComponent()}</div>

        <div className="flex justify-end">
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

export default Pox;
