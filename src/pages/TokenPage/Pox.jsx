import { useEffect, useState } from "react";
import SearchBarExpand from "../../components/SearchBarExpand";
import Pagination from "../../components/Pagination";
import { getHoldersData, getPoxData } from "../../utils/Token";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { shortenString } from "../../utils/shortenString";
import { secondsAgo } from "../../utils/secondAgo";
import { Link } from "react-router-dom";
import PoxImg from "../../assets/PoxImg.png";
import { IoEllipsisVertical } from "react-icons/io5";
import { RiFileCopy2Fill } from "react-icons/ri";
import { PiTwitterLogoLight } from "react-icons/pi";
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiInstagramLogoLight } from "react-icons/pi";
import { LiaTelegram } from "react-icons/lia";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { TbTrendingUp } from "react-icons/tb";
import { getPoxOverviewData } from "../../utils/axios/Data";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";
import { toast } from "react-toastify";

const TokenTransferTable = () => {
  
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPoxData();
        setData(data?.message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="min-w-[1500px]  flex flex-row justify-around p-2 bg-lightest-gray rounded-lg ">
        <p className=" w-[18%] text-center font-bold">Hash</p>
        <p className=" w-[10%] text-center font-bold ">Block</p>
        <p className=" w-[12%] text-center font-bold">Time</p>
        <p className=" w-[12%] text-center font-bold">Transaction Type</p>
        <p className=" w-[13%] text-center font-bold whitespace-nowrap">
          From
        </p>
        <p className=" w-[13%] text-center font-bold">To</p>
        <p className=" w-[12%] text-center font-bold ">Token</p>
        <p className=" w-[10%] text-center font-bold">Result</p>
      </div>

      {data?.transactions?.map &&
        data?.transactions?.map((stablecoin, index) => {
          return (
            <>
              <div className="min-w-[1500px]  flex flex-row  justify-around border-b-2 p-3 border-text-bg-gray">
                <Link
                  to={`/transactiondetails/${stablecoin?.transactionId}`}
                  className="text-dark-red  text-center  w-[18%]  "
                >
                  <p>
                    {stablecoin?.transactionId &&
                      shortenString(stablecoin?.transactionId, 10)}
                  </p>
                </Link>

                <Link
                  to={`/blockdetailpage/${stablecoin.blockNumber}`}
                  className=" w-[10%] text-center  text-dark-red "
                >
                  <p>{stablecoin.blockNumber}</p>
                </Link>

                <p className="  w-[12%] text-center ">
                  {stablecoin.timeStamp && secondsAgo(stablecoin?.timeStamp)}
                </p>
                <p className=" w-[12%] text-center">
                  {stablecoin?.assetName}
                </p>

                <Link
                  to={`/accountdetails/${stablecoin.fromAddress}`}
                  className=" w-[13%] text-center text-dark-red"
                >
                  <p>
                    {stablecoin.fromAddress &&
                      shortenString(stablecoin?.fromAddress, 5)}
                  </p>
                </Link>

                <Link
                  to={`/accountdetails/${stablecoin.fromAddress}`}
                  className=" w-[13%] text-center text-dark-red"
                >
                  <p>
                    {stablecoin.toAddress &&
                      shortenString(stablecoin?.toAddress, 5)}
                  </p>
                </Link>

                <p className=" w-[12%]  text-center ">
                  {stablecoin?.assetAmount &&
                    (stablecoin.assetAmount / 1000000).toFixed(6)}{" "}
                  {stablecoin?.assetName}
                </p>
                <p className=" w-[10%] flex justify-center text-dark-green text-xl">
                  <IoCheckmarkCircleOutline />
                </p>
              </div>
            </>
          );
        })}
    </div>
  );
};

const HoldersTable = () => {  
  const [holderdata, setHolderData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const holderdata = await getHoldersData();
        setHolderData(holderdata?.message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>

      
      <div className="flex flex-row justify-evenly p-2 bg-lightest-gray rounded-lg ">
        <p className="w-[8%]  text-center font-bold ">#</p>
        <p className="w-[32%] text-center font-bold ">Account</p>
        <p className="w-[15%] text-center font-bold ">Amount</p>
        <p className="w-[15%] text-center font-bold ">Value</p>
        <p className="w-[15%] text-center font-bold ">Percentage</p>
        <p className="w-[15%] text-center font-bold ">Latest TXN Time(Local)</p>
      </div>

      {holderdata?.apiResult?.map &&
        holderdata?.apiResult?.map((stablecoin, index) => {
          return (
            <>
              <div className="min-w-[1500px]  flex flex-row  justify-around border-b-2 p-3 border-text-bg-gray">
                <p className="w-[8%]  text-center  ">{index + 1}</p>

                <Link
                  to={`/tokendetailpage/${stablecoin?.address}`}
                  className=" w-[32%] text-dark-red text-center "
                >
                  <p>{stablecoin?.address && stablecoin?.address}</p>
                </Link>

                <p className="w-[15%]  text-center ">{Number(stablecoin?.balance).toFixed(6)}</p>
                <p className="w-[15%] text-center ">{stablecoin.PoxCount}</p>
                <p className=" w-[15%]  text-center ">
                  {stablecoin?.percentage.toFixed(6)}%
                </p>
                <p className=" w-[15%]  text-center ">
                  {stablecoin?.age && secondsAgo(stablecoin?.age)}
                </p>
              </div>
            </>
          );
        })}
    </div>
  );
};

const Pox = () => {
 
  const [poxData, setPoxData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const poxData = await getPoxOverviewData();
        console.log(poxData);
        setPoxData(poxData);
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

  const handleCopy = (issueTime) => {
    navigator.clipboard.writeText(issueTime);
    toast.success(" copied!");
  };

  const [onSearch, setOnSearch] = useState("");
  return (
    <div className="px-4 md:px-12 pb-12">
      <div>
        <SearchBarExpand onSearch={setOnSearch} />
      </div>
      
      <div className="flex flex-row space-x-4">
        <div>
          <img src={PoxImg}
          alt="pox image"
          className="w-[60px] "
          /></div>
        <div>
        <p className="font-bold text-xl">Pollux (POX)</p>
        <p className="pt-1">Pollux is the official token issued by pollux network on the POX chain.</p>
        </div>
      </div>
     
      <div className=" flex flex-col space-x-5 md:flex-row justify-between">
        {/* Number of Blocks */}
        <div className="w-full md:w-[30%]  bg-white shadow-lg rounded-2xl p-5 my-6 md:my-12">
          <div className="pt-1 flex flex-row justify-between">
            <p className=" text-xl font-bold">Overview</p>
            <p className="text-dark-green bg-light-green rounded-md px-6 font-bold ">Reputation: {poxData?.Rep && poxData?.Rep}</p>
          </div>

          <div className="flex flex-row space-x-2 pt-3">
            <p className="font-semibold">{poxData?.price && Number(poxData?.price).toFixed(4)} POX</p>
            <p className="font-semibold text-dark-green">(+0.02%)</p>
          </div>

          <div className="flex flex-row justify-between pt-6 pb-4 border-b-[1px] border-text-bg-gray">
            <p className="font-semibold">Total Supply</p>
            <p>{poxData?.totalsupply && formatNumberWithCommas(Number(poxData?.totalsupply).toFixed(3))}</p>
          </div>

          <div  className="flex flex-row justify-between pt-4 pb-4 border-b-[1px] border-text-bg-gray">
            <p className="font-semibold">Max Supply</p>
            <p>{poxData?.maxSupply && formatNumberWithCommas(Number(poxData?.maxSupply).toFixed(0))}</p>
          </div>

          <div  className="flex flex-row justify-between pt-4 pb-4 border-b-[1px] border-text-bg-gray">
            <p className="font-semibold">Circulating Supply</p>
            <p>{poxData?.circsupply && formatNumberWithCommas(poxData?.circsupply)}</p>
          </div>

          <div  className="flex flex-row justify-between pt-4 pb-4 border-b-[1px] border-text-bg-gray">
            <p className="font-semibold">Total Market Cap</p>
            <p>{poxData?.totalmatket && formatNumberWithCommas(Number(poxData?.totalmatket).toFixed(3))}</p>
          </div>

          <div  className="flex flex-row justify-between pt-4 pb-4">
            <p className="font-semibold">Circulating Market Cap</p>
            <p>{poxData?.circmarket && formatNumberWithCommas(Number(poxData?.circmarket).toFixed(3))}</p>
          </div>

        </div>

        {/* Block Rewards */}
        <div className="w-full md:w-[40%]  rounded-2xl p-5 bg-white shadow-md my-3 md:my-12">
          <div className="pt-1 flex flex-row justify-between">
            <p className="font-bold text-xl">Basic Info</p>
            <p><IoEllipsisVertical size={24}/></p>
          </div>

        <div className="flex flex-row justify-between pt-14 pb-4 border-b-[1px] border-text-bg-gray">
          <p className="font-semibold">Issuing Time:</p>
          <div className="flex flex-row space-x-1">
          <p>{poxData?.issueTime && poxData?.issueTime}</p>
          <p className="pt-1"><RiFileCopy2Fill  onClick={() => handleCopy(poxData?.issueTime)}/></p>
          </div>
          
        </div>

        <div className="flex flex-row justify-between pt-4 pb-4 border-b-[1px] border-text-bg-gray">
          <p className="font-semibold">Decimal:</p>

          <div className="flex flex-row space-x-1">
          <p>{poxData?.Decimal && poxData?.Decimal}</p>
          <p className="pt-1"><RiFileCopy2Fill onClick={() => handleCopy(poxData?.issueTime)}/></p>
          </div>
         
          
        </div>

        <div className="flex flex-row justify-between  pt-4 pb-4 border-b-[1px] border-text-bg-gray">
          <p className="font-semibold">Official Website:</p>
          <Link to="https://polluxcoin.info/">
          <p className="text-dark-red underline cursor-pointer">{poxData?.Web && poxData?.Web} </p>
          </Link>
        
        </div>

        <div className="flex flex-row justify-between  pt-4 pb-4 border-b-[1px] border-text-bg-gray">
          <p className="font-semibold">White Paper:</p>
          <Link to="https://polluxcoin.info/white-paper.pdf">
          <p className="text-dark-red underline">{poxData?.Whitepaper && poxData?.Whitepaper}</p>
          </Link>
          
        </div>

        <div className="flex flex-row justify-between  pt-4 pb-4 ">
          <p className="font-semibold">Social Profiles:</p>
          <div className="flex flex-row space-x-3">
           <Link to={poxData?.social?.twitter}>
           <p><PiTwitterLogoLight size={20} color="#C23631"/></p>
           </Link> 

           <Link to={poxData?.social?.fb}>
           <p><PiFacebookLogoLight   size={20} color="#C23631"/></p>
           </Link>
           
           <Link to={poxData?.social?.insta}>
           <p><PiInstagramLogoLight  size={20} color="#C23631" /></p>
           </Link>
           
           <Link to={poxData?.social?.tele}>
           <p><LiaTelegram  size={20} color="#C23631"/></p>
           </Link>
           
           <Link to={poxData?.social?.yt}>
           <p><PiYoutubeLogoLight  size={20} color="#C23631"/></p>
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
            <p>{poxData?.holders && formatNumberWithCommas(poxData?.holders)} </p>
          </div>

          <div className="flex flex-row justify-between pt-4 pb-4 border-b-[1px] border-text-bg-gray">
            <p className="font-semibold">Total Transfer Count</p>
            <p>{poxData?.totaltransfer && formatNumberWithCommas(poxData?.totaltransfer)}</p>
          </div>

          <div className="flex flex-row justify-between pt-4 pb-4 border-b-[1px] border-text-bg-gray">
            <p className="font-semibold">Transfer (24h)</p>
            <p>{poxData?.last24transfer && formatNumberWithCommas(poxData?.last24transfer )} </p>
          </div>

          <div className="flex flex-row justify-between pt-4 pb-4">
            <p className="font-semibold">Trading Volume (24h)</p>
            <p>${poxData?.tradingvol && formatNumberWithCommas(Number(poxData?.tradingvol).toFixed(2))}</p>

          </div>
        </div>
      </div>

      <div className="flex flex-row space-x-8 pb-10">
        <p
          className={`cursor-pointer py-3 px-4 whitespace-nowrap  ${
            isRender === "Token Transfer"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsRender("Token Transfer")}
        >
          Token Transfer
        </p>

        <p
          className={`cursor-pointer py-3 px-4 whitespace-nowrap  ${
            isRender === "Holders"
              ? "bg-dark-yellow font-semibold  shadow-lg rounded-lg"
              : "text-black bg-text-bg-gray shadow-md rounded-lg"
          }`}
          onClick={() => setIsRender("Holders")}
        >
          Holders
        </p>
      </div>


      {/* For colourful bar */}
      <div className="bg-white rounded-lg shadow-lg mb-5 p-5 mb-">
        <p className="text-lg font-semibold">Asset Breakdown by Holders</p>
        <div className="flex flex-row justify-evenly w-full mt-5 border-[1px] border-white ">
          <p className="w-[29%] bg-pink-gradient rounded-tl-md rounded-bl-md text-dark-pink">-</p>
          <p className="w-[20%] bg-blue-gradient"></p>
          <p className="w-[6%] bg-peach-gradient"></p>
          <p className="w-[10%] bg-voilet-gradient"></p>
          <p className="w-[35%] bg-yellow-gradient rounded-tr-md rounded-br-md"></p>
        </div>

        <div className="flex flex-row justify-between mt-5">
          <div className="flex flex-row items-center space-x-1">
          <span className="bg-pink-gradient px-2 py-2 rounded-lg"></span>
          <p className="text-sm font-semibold">Top 1~10 holders: 29.35%</p>
          </div>
         
         <div className="flex flex-row items-center space-x-1">
         <span className="bg-blue-gradient px-2 py-2 rounded-lg"></span>
         <p className="text-sm font-semibold">Top 11~50 holders: 20.48%</p>
         </div>
         
         <div className="flex flex-row items-center space-x-1">
         <span className=" bg-peach-gradient px-2 py-2 rounded-lg"></span>
         <p className="text-sm font-semibold">Top 51~100 holders: 4.69%</p>
         </div>
         
         <div className="flex flex-row items-center space-x-1">
         <span className="bg-voilet-gradient px-2 py-2 rounded-lg"></span>
         <p className="text-sm font-semibold">Top 101~500 holders: 9.80%</p>
         </div>
         
         <div className="flex flex-row items-center space-x-1"> 
         <span className="bg-yellow-gradient px-2 py-2 rounded-lg"></span>
          <p className="text-sm font-semibold">Top 501~ ∞ holders: 35.68%</p>

         </div>
         
        </div>
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
