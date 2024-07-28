import { useEffect, useState } from "react";
import SearchBarExpand from "../../components/SearchBarExpand";
import Pagination from "../../components/Pagination";
import {
  getHoldersData,
  getHoldersSlidersStatsData,
  getPoxData,
} from "../../utils/Token";
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
            <div key={index}>
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
            </div>
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
        <p className="w-[15%]  text-center font-bold ">Amount</p>
        <p className="w-[15%]  text-center font-bold ">Value</p>
        <p className="w-[15%]  text-center font-bold ">Percentage</p>
        <p className="w-[15%]  text-center font-bold ">Latest TXN Time(Local)</p>
      </div>

      {holderdata?.apiResult?.map &&
        holderdata?.apiResult?.map((stablecoin, index) => {
          return (
            <div key={index}>
              <div className="min-w-[1500px]  flex flex-row  justify-around border-b-2 p-3 border-text-bg-gray">
                <p className="w-[8%]  text-center  ">{index + 1}</p>

                <Link
                  to={`/tokendetailpage/${stablecoin?.address}`}
                  className=" w-[32%]  text-dark-red text-center "
                >
                  <p>{stablecoin?.address && stablecoin?.address}</p>
                </Link>

                <p className="w-[15%]  text-center ">{stablecoin?.balance}</p>
                <p className="w-[15%]  text-center ">{stablecoin.PoxCount}</p>

                <p className="w-[15%]  text-center ">
                  {Number(stablecoin?.balance).toFixed(6)}
                </p>
                <p className=" w-[15%]  text-center "> </p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const Pox = () => {
  const [poxData, setPoxData] = useState({});
  const [sliderData, setSliderData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const poxData = await getPoxOverviewData();
        setPoxData(poxData);

        const sliderData = await getHoldersSlidersStatsData();
        console.log(sliderData);
        setSliderData(sliderData?.message);
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
          <img src={PoxImg} alt="pox image" className="w-[60px] " />
        </div>
        <div>
          <p className="font-bold text-xl">Pollux (POX)</p>
          <p className="pt-1">
            Pollux is the official token issued by pollux network on the POX
            chain.
          </p>
        </div>
      </div>

      <div className=" flex flex-col space-x-5 md:flex-row justify-between">
        {/* Number of Blocks */}
        <div className="w-full md:w-1/3  bg-lightest-gray rounded-xl my-2">
          <p className=" px-2  flex flex-row justify-between items-center  pt-4 ">
            <span>Price</span>{" "}
            <span className=" text-dark-red flex flex-row items-center justify-end">
              ${poxData.price}
              <span className="flex items-center pl-3 ">
                <TbTrendingUp />
              </span>
            </span>
          </p>
          <div className=" flex flex-row items-center justify-between px-2  pt-4 pb-1">
            <p>Price change (24h) </p>{" "}
            <p className=" flex flex-row justify-end items-center">
              <span className=" text-dark-green ">{poxData.change24h}</span>
            </p>
          </div>

          <div className=" flex flex-row items-center justify-between px-2  pt-4 pb-1">
            <p>Market Cap </p>{" "}
            <p className=" flex flex-row justify-end items-center">
              <span className=" text-dark-green ">
                ${poxData?.marketCap && formatNumberWithCommas(poxData.marketCap)}
              </span>
            </p>
          </div>

          <div className=" flex flex-row items-center justify-between px-2  pt-4 pb-1">
            <p>Market Cap Change (24h)</p>{" "}
            <p className=" flex flex-row justify-end items-center">
              <span className=" text-dark-green ">
                ${poxData.marketCapChange24h && formatNumberWithCommas(poxData.marketCapChange24h)}
              </span>
            </p>
          </div>

          <div className=" flex flex-row items-center justify-between px-2  pt-4 pb-1">
            <p>24h Volume/Market Cap</p>{" "}
            <p className=" flex flex-row justify-end items-center">
              <span className=" text-dark-green ">{poxData?.volChange}</span>
            </p>
          </div>

          <div className=" flex flex-row items-center justify-between px-2  pt-4 pb-1">
            <p>Volume 24h</p>{" "}
            <p className=" flex flex-row justify-end items-center">
              <span className=" text-dark-green ">
                ${poxData?.volume24h && formatNumberWithCommas(poxData?.volume24h)}
              </span>
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-lightest-gray rounded-xl my-2">
          <p className=" px-2  flex flex-row justify-between items-center  pt-4 ">
            <span>Total supply </span>{" "}
            <span className=" text-dark-red flex flex-row items-center justify-end">
              {sliderData?.totalSupply}
            </span>
          </p>
          <div className=" flex flex-row items-center justify-between px-2  pt-4 pb-1">
            <p>Circulating Supply</p>{" "}
            <p className=" flex flex-row justify-end items-center">
              <span className=" text-dark-green ">
                {sliderData?.circulatingSupply}
              </span>
            </p>
          </div>

          <div className=" flex flex-row items-center justify-between px-2  pt-4 pb-1">
            <p>Block </p>{" "}
            <p className=" flex flex-row justify-end items-center">
              <span className=" text-dark-green ">{sliderData?.block}</span>
            </p>
          </div>

          <div className=" flex flex-row items-center justify-between px-2  pt-4 pb-1">
            <p>Reward per block</p>{" "}
            <p className=" flex flex-row justify-end items-center">
              <span className=" text-dark-green ">{sliderData?.reward}</span>
            </p>
          </div>

          <div className=" flex flex-row items-center justify-between px-2  pt-4 pb-1">
            <p>Issue time</p>{" "}
            <div className=" flex flex-row justify-end items-center">
              <p className=" text-dark-green pr-2">{sliderData?.issueTime}</p>
              <span
                onClick={() => handleCopy(sliderData?.issueTime)}
                className=" text-dark-red cursor-pointer"
              >
                <RiFileCopy2Fill />
              </span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-lightest-gray rounded-xl my-2">
          <p className=" px-2  flex flex-row justify-between items-center  pt-4 ">
            <span>Holders </span>{" "}
            <span className=" text-dark-red flex flex-row items-center justify-end">
              {sliderData?.holders}
            </span>
          </p>
          <div className=" flex flex-row items-center justify-between px-2  pt-4 pb-1">
            <p>Transaction Count </p>{" "}
            <p className=" flex flex-row justify-end items-center">
              <span className=" text-dark-green ">
                {sliderData?.transactionCount}
              </span>
            </p>
          </div>

          <div className=" flex flex-row items-center justify-between px-2  pt-4 pb-1">
            <p>Transactions (24h) </p>{" "}
            <p className=" flex flex-row justify-end items-center">
              <span className=" text-dark-green ">
                {sliderData?.transaction24h}
              </span>
            </p>
          </div>

          <div className=" flex flex-row items-center justify-between px-2  pt-4 pb-1">
            <p>POS count</p>{" "}
            <p className=" flex flex-row justify-end items-center">
              <span className=" text-dark-green ">{sliderData?.posCount}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-around w-full  bg-lightest-gray rounded-xl my-3">
        <p
          onClick={() => setIsRender("Token Transfer")}
          className={`cursor-pointer w-full  text-center py-3 rounded-xl ${
            isRender === "Token Transfer"
              ? " bg-dark-red text-white"
              : "text-dark-red"
          } `}
        >
          Token Transfer
        </p>
        <p
          onClick={() => setIsRender("Holders")}
          className={`cursor-pointer w-full  text-center py-3 rounded-xl ${
            isRender === "Holders" ? " bg-dark-red text-white" : "text-dark-red"
          } `}
        >
          Holders
        </p>
      </div>

      <div>{renderItemComponent()}</div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <div className="flex flex-row justify-end items-center space-x-4 text-lightest-gray text-xl ">
        <p>Follow us</p>
        <span>
          <PiTwitterLogoLight />
        </span>
        <span>
          <PiFacebookLogoLight />
        </span>
        <span>
          <PiInstagramLogoLight />
        </span>
        <span>
          <LiaTelegram />
        </span>
        <span>
          <PiYoutubeLogoLight />
        </span>
      </div>
    </div>
  );
};

export default Pox;
