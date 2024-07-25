import { useEffect, useState } from "react";
import { TokenData } from "../../data/Token";
import SearchBarExpand from "../../components/SearchBarExpand";
import Pagination from "../../components/Pagination";
import { getUsdxData, getUsdxHolderData } from "../../utils/Token";
import { IoCheckmarkCircleOutline, IoEllipsisVertical, IoShirtOutline } from "react-icons/io5";
import { shortenString } from "../../utils/shortenString";
import { GiSandsOfTime } from "react-icons/gi";
import { secondsAgo } from "../../utils/secondAgo";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
import { RiFileCopy2Fill } from "react-icons/ri";
import { PiFacebookLogoLight, PiInstagramLogoLight, PiTwitterLogoLight, PiYoutubeLogoLight } from "react-icons/pi";
import { LiaTelegram } from "react-icons/lia";
import { TbTrendingUp } from "react-icons/tb";
import UsdxImg from "../../assets/UsdxImg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { getUsdxOverviewData } from "../../utils/axios/Data";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";
const UsdxTable = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsdxData();
        setData(data);
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, [])

  return (
    <div>
      <div className="min-w-[1500px]  flex flex-row justify-around p-2 bg-lightest-gray rounded-lg ">
          <p className=" w-[12%] font-bold text-center ">Amount</p>
          <p className=" w-[8%] font-bold text-center ">Result</p>
          <p className=" w-[14%] font-bold text-center ">Time(UTC)</p>
          <p className=" w-[19%] font-bold text-center ">From</p>
          <p className=" w-[19%] font-bold text-center whitespace-nowrap">To</p>
          <p className=" w-[20%] font-bold text-center ">Hash</p>
          <p className=" w-[8%] font-bold text-center ">Block</p>
        </div>

        {data?.transactions  && data?.transactions.map((stablecoin, index) => {
          return (
            <>
              <div className="min-w-[1500px]  flex flex-row  justify-around border-b-2 p-3 border-text-bg-gray">
                <p className="w-[12%]  text-center ">{Number(stablecoin?.asset).toFixed(6)}</p>
                <p className=" w-[8%] flex justify-center">{stablecoin?.result && stablecoin?.result ? <IoCheckmarkCircleOutline size={24} color="green" />:<RxCrossCircled size={24} color="red"/>}</p>
                <p className="w-[14%] text-center ">{secondsAgo(stablecoin?.timeStamp)}</p>

                <Link to={`/accountdetails/${stablecoin?.fromAddress}`}  className="w-[19%] text-center text-dark-red ">
                <p>{stablecoin?.fromAddress && shortenString(stablecoin?.fromAddress,8)}</p>
                </Link>
                
                <Link to={`/accountdetails/${stablecoin?.fromAddress}`} className=" w-[19%] text-center text-dark-red">
                <p >{stablecoin?.toAddress && shortenString(stablecoin?.toAddress,8)}</p>
                </Link>
               
               <Link to={`/transactiondetails/${stablecoin?.transactionId}`} className=" w-[20%] text-center text-dark-red">
               <p >{stablecoin?.transactionId && shortenString(stablecoin?.transactionId,10)}</p>
               </Link>
               
               <Link to={`/blockdetailpage/${stablecoin?.blockNumber}`} className="w-[8%] text-center  text-dark-red">
               <p >{stablecoin?.blockNumber}</p>
               </Link>
                
                
              </div>
            </>
          );
        })}
    </div>
  )
}


const TokenHolderTable = () => {

  const [holderdata, setHolderData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsdxHolderData();
        setHolderData(data);
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, [])

  return (
    <div className="">
  <div className="min-w-[1500px] flex flex-row justify-around p-2 bg-lightest-gray rounded-lg rounded-tr-lg rounded-br-lg">
    <p className="w-[8%] font-bold text-center ">#</p>
    <p className="w-[28%] font-bold text-center ">Account</p>
    <p className="w-[20%] font-bold text-center  ">Amount</p>
    <p className="w-[16%] font-bold text-center ">Value</p>
    <p className="w-[12%] font-bold text-center">Percentage</p>
    <p className="w-[16%] font-bold text-center ">Latest TXN Time(Local)</p>
  </div>

  {holderdata?.holders?.map && holderdata?.holders?.map((stablecoin, index) => {
    

    return (
      <div key={index} className="min-w-[1500px] flex flex-row justify-around border-b-2 p-3 border-text-bg-gray">
        <p className="w-[8%] text-center ">{index+1}</p>

        <Link to={`/accountdetails/${stablecoin?.walletAddress}`} className="w-[28%]   text-center  text-dark-red" text-center >
        <p >{stablecoin?.walletAddress}</p>
        </Link>
       
        <p className="w-[20%]  text-center    font-bold  ">{Number(stablecoin?.balance).toFixed(6)}</p>
        <p className="w-[16%]  text-center  ">${Number(stablecoin?.balance).toFixed(2)}</p>
        <p className="w-[12%]   text-center ">{stablecoin?.percentage}%</p>
        <p className="w-[16%]  text-center ">{secondsAgo(stablecoin?.updatedAt)}</p>
      </div>
    );
  })}
</div>

  )
}

const Usdx = () => {

  const [usdxData, setUsdxData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usdxData = await getUsdxOverviewData();
        console.log(usdxData);
        setUsdxData(usdxData);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  const [isRender, setIsRender] = useState("Token Transfer");
  const renderItemComponent = () => {
    switch (isRender) {
      case "Token Transfer":
        return <UsdxTable />;
      case "Token Holders":
        return <TokenHolderTable />;
     
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
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row space-x-4">
        <div className="mt-2">
          <img src={UsdxImg}
          alt="pox image"
          className="w-[70px] "
          /></div>
        <div className="flex flex-col items-start ">
        <p className="font-bold text-xl">Pollux USD (USDX)</p>
        <p className="text-light-mid-gray text-sm border-[1px] border-light-mid-gray rounded-2xl  px-2 mt-1">PRC 20</p>
        <p className="pt-1">USDX is the official stablecoin issued by pollux on the POX network.</p>
        </div>
        </div>

        <div className="flex flex-row space-x-5 items-center">
        <div className="flex items-center space-x-4 font-bold bg-dark-yellow py-2 px-6 rounded-lg cursor-pointer">
          <button>Stake USDX to Get Rewards</button></div>
        
        <div className="flex items-center font-bold space-x-4 bg-dark-yellow py-2  px-8 rounded-lg cursor-pointer">
          <button>Trade</button></div>
        </div>
       
      </div>
     
      <div className=" flex flex-col space-x-5 md:flex-row justify-between">
        {/* Number of Blocks */}
        <div className="w-full md:w-[30%]  bg-white shadow-lg rounded-2xl p-5 my-6 md:my-12">
          <div className="pt-1 flex flex-row justify-between">
            <p className=" text-xl font-bold">Overview</p>
            <p className="text-dark-green bg-light-green rounded-md px-6 font-bold ">Reputation: OK </p>
          </div>

          <div className="flex flex-row space-x-2 pt-3">
            <p className="font-semibold">{usdxData?.totalSupply && formatNumberWithCommas(Number(usdxData?.totalSupply).toFixed(3))} USDX</p>
            <p className="font-semibold text-dark-green">(+0.02%)</p>
          </div>

          <p className="text-sm text-light-mid-gray">≈${usdxData?.totalSupply && formatNumberWithCommas(Number(usdxData?.totalSupply).toFixed(3))}</p>

          <div className="flex flex-row justify-between pt-6 pb-4 border-b-[1px] border-text-bg-gray">
            <p className="font-semibold">Total Supply</p>
            <p>{usdxData?.totalSupply && formatNumberWithCommas(Number(usdxData?.totalSupply).toFixed(3))}</p>
          </div>

          

          <div  className="flex flex-row justify-between pt-4 pb-4 border-b-[1px] border-text-bg-gray">
            <p className="font-semibold">Circulating Supply</p>
            <p>{usdxData?.circulationSupply && formatNumberWithCommas(Number(usdxData?.circulationSupply).toFixed(3))}</p>
          </div>

          <div  className="flex flex-row justify-between pt-4 pb-4 border-b-[1px] border-text-bg-gray">
            <p className="font-semibold">Total Market Cap</p>
            <p>{usdxData?.totalMarketCap && formatNumberWithCommas(Number(usdxData?.totalMarketCap).toFixed(3))}</p>
          </div>

          <div  className="flex flex-row justify-between pt-4 ">
            <p className="font-semibold">Circulating Market Cap</p>
            <p>{usdxData?.circulatingMarketCap && formatNumberWithCommas(Number(usdxData?.circulatingMarketCap).toFixed(3))}</p>
          </div>

        </div>

        {/* Block Rewards */}
        <div className="w-full md:w-[40%]  rounded-2xl p-5 bg-white shadow-md my-3 md:my-12">
          <div className="pt-1 flex flex-row justify-between">
            <p className="font-bold text-xl">Basic Info</p>
            <p><IoEllipsisVertical size={24}/></p>
          </div>

        <div className="flex flex-row justify-between pt-14 pb-4 border-b-[1px] border-text-bg-gray">
          <p className="font-semibold">Contract</p>
          <div className="flex flex-row space-x-1">
          <p>{usdxData?.contractAddress && usdxData?.contractAddress}</p>
          <p className="pt-1"><RiFileCopy2Fill /></p>
          </div>
          
        </div>

        <div className="flex flex-row justify-between pt-4 pb-4 border-b-[1px] border-text-bg-gray">
          <p className="font-semibold">Issuer</p>

          <div className="flex flex-row space-x-1">
          <p>{usdxData?.issuer && usdxData?.issuer}</p>
          <p className="pt-1"><RiFileCopy2Fill /></p>
          </div>
         
          
        </div>

        <div className="flex flex-row justify-between  pt-4 pb-4 border-b-[1px] border-text-bg-gray">
          <p className="font-semibold">Issuing Time</p>
          <p className=""> {usdxData?.issuingTime && usdxData?.issuingTime}(UTC)</p>
        </div>

        <div className="flex flex-row justify-between  pt-4 pb-4 border-b-[1px] border-text-bg-gray">
          <p className="font-semibold">Decimal</p>
          <p className="">{usdxData?.decimals && usdxData?.decimals}</p>
        </div>

        <div className="flex flex-row justify-between  pt-4  ">
          <p className="font-semibold">Social Profiles:</p>
          <div className="flex flex-row space-x-3">
           <Link>
           <p><PiTwitterLogoLight size={20} color="#C23631"/></p>
           </Link> 

           
           
          </div>
        </div>

        </div>

        {/* Stats on Burned Pox */}
        <div className="w-full md:w-[30%] rounded-2xl p-5 bg-white shadow-md my-3 md:my-12">
          <div className="pt-1 flex flex-row justify-between items-center">
            <p className="font-bold text-xl">More</p>
            <p className="border-2 rounded-lg p-1 "><TbTrendingUp  size={16}/></p>
          </div>

          <div className="flex flex-row justify-between pt-14 pb-4 border-b-[1px] border-text-bg-gray">
            <p className="font-semibold">Holders</p>
            <p>{usdxData?.totalHolders && usdxData?.totalHolders}</p>
          </div>

          <div className="flex flex-row justify-between pt-4 pb-4 border-b-[1px] border-text-bg-gray">
            <p className="font-semibold">Total Transfer Count</p>
            <p>{usdxData?.totaltransferCount && formatNumberWithCommas(usdxData?.totaltransferCount)}</p>
          </div>

          <div className="flex flex-row justify-between pt-4 pb-4 border-b-[1px] border-text-bg-gray">
            <p className="font-semibold">Transfer (24h)</p>
            <p>{usdxData?.transfer24H && usdxData?.transfer24H}</p>
          </div>

          <div className="flex flex-row justify-between pt-4">
            <p className="font-semibold">Trading Volume (24h)</p>
            <p>${usdxData?.tradingVolume && Number(usdxData?.tradingVolume).toFixed(2)}</p>

          </div>
        </div>
      </div>
       
       <div className="flex flex-row space-x-8 pb-10">
       <p className={`cursor-pointer py-3 px-4 whitespace-nowrap  ${
            isRender === "Token Transfer"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
       onClick={() => setIsRender("Token Transfer")}>Token Transfer</p>

       <p className={`cursor-pointer py-3 px-4 whitespace-nowrap  ${
            isRender === "Token Holders"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
       onClick={() => setIsRender("Token Holders")}>Token Holders</p>
       </div>
      
      <div className="bg-white rounded-2xl p-4 md:p-7 ">
      <div className="overflow-x-auto">
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

export default Usdx;
