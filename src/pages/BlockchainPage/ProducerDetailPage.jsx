import { Pagination, SearchBarExpand } from "../../components";
import { BiSolidCopyAlt } from "react-icons/bi";
import { RiQrCodeFill } from "react-icons/ri";
import { AiOutlineQuestion } from "react-icons/ai";
import { useEffect, useState } from "react";
import {
  IoIosArrowForward,
  IoIosCheckmarkCircleOutline,
  IoMdArrowUp,
  IoMdEye,
} from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { getProducerDetailData } from "../../utils/axios/Blockchain";
import { extractSiteName } from "../../utils/extractSiteName";
import { LuArrowDownToLine, LuArrowUpToLine } from "react-icons/lu";
import PoxImg from "../../assets/PoxImg.png";
import {
  getAccountDetailsPageData,
  getTransactionDetailsData,
  getTransferDetailData,
} from "../../utils/axios/TransactionDetails";
import { shortenString } from "../../utils/shortenString";
import { secondsAgo } from "../../utils/secondAgo";
import { RxCrossCircled } from "react-icons/rx";
import { getTrendingSearchGraphData } from "../../utils/axios/Home";
import { toast } from "react-toastify";
import GaugeChart from "../../components/GaugeChart";
import VotesChart from "../../components/VotesChart";

const TransactionTable = () => {
  // For Pagination
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState({});
  const [currentPageData, setCurrentPageData] = useState([]);
  const itemsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await getTransactionDetailsData(currentPage);
        setData(apiData?.message);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentPageData(data?.transactions?.slice(start, end));
  }, [currentPage, data]);

  return (
    <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto md:overflow-hidden">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold text-light-gray">
          A total of 10 transaction(s)
        </p>
      </div>

      <div className="min-w-[1500px] flex flex-row justify-evenly text-center bg-lightest-gray p-4 m-3 rounded-xl">
        <p className="w-[4%] flex justify-center ">
          <IoMdEye />
        </p>
        <p className="w-[16%] font-bold text-center ">Hash</p>
        <p className="w-[10%] font-bold text-center ">Block</p>
        <p className="w-[10%] font-bold text-center ">Time</p>
        <p className="w-[14%] font-bold text-center ">Transaction Type</p>
        <p className="w-[12%] font-bold text-center ">From</p>
        <p className="w-[12%] font-bold text-center ">To</p>
        <p className="w-[14%] font-bold text-center ">Token</p>
        <p className="w-[8%] font-bold text-center ">Result</p>
      </div>

      {currentPageData &&
        currentPageData.map((transaction, index) => (
          <div
            key={index}
            className="min-w-[1500px] flex flex-row justify-evenly p-4 m-3 border-b-2 border-lightest-gray rounded-xl"
          >
            <p className="w-[4%] flex justify-center">
              <IoMdEye />
            </p>

            <Link
              to={`/transactiondetails/${transaction?.transactionId}`}
              className="w-[16%] text-center cursor-pointer text-dark-red"
            >
              <p>
                {transaction?.transactionId &&
                  shortenString(transaction?.transactionId, 8)}
              </p>
            </Link>

            <Link
              to={`/blockdetailpage/${transaction?.blockNumber}`}
              className="w-[10%] text-center  text-dark-red"
            >
              <p>{transaction?.blockNumber}</p>
            </Link>

            <p className="w-[10%] text-center ">
              {transaction?.timeStamp && secondsAgo(transaction?.timeStamp)}
            </p>
            <p className="w-[14%] text-center">
              {transaction?.type && transaction?.type}
            </p>

            <Link
              to={`/accountdetails/${transaction?.fromAddress}`}
              className="w-[12%] text-center  text-dark-red"
            >
              <p>
                {transaction?.fromAddress &&
                  shortenString(transaction?.fromAddress, 5)}
              </p>
            </Link>

            <Link
              to={`/producerdetailpage/${transaction?.toAddress}`}
              className="w-[12%] text-center text-dark-red   "
            >
              <p>
                {transaction?.toAddress &&
                  shortenString(transaction?.toAddress, 5)}
              </p>
            </Link>

            <p className="w-[14%] text-center ">
              {transaction?.type && transaction?.type}
            </p>
            <p className="w-[8%] flex justify-center">
              {transaction?.result === "SUCCESS" ? (
                <IoIosCheckmarkCircleOutline size={24} color="green" />
              ) : (
                <RxCrossCircled size={24} color="red" />
              )}
            </p>
          </div>
        ))}

      <div className="flex justify-start md:justify-end">
        <Pagination
          totalPages={data?.totalRecords}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

const TransferTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState([]);
  const itemsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [data1, setData1] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await getTransferDetailData(currentPage);
        setData1(data1?.message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    setCurrentPageData(data1?.transactions?.slice(start, end));
  }, [currentPage, data1]);

  return (
    <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto md:overflow-hidden">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold text-light-gray">
          A total of 484 PRC20 Transfers
        </p>
      </div>

      <div className="min-w-[1500px] flex flex-row justify-evenly text-center bg-lightest-gray p-4 m-3 rounded-xl">
        <p className="w-[22%] font-bold text-center ">Token</p>
        <p className="w-[15%] font-bold text-center ">Amount/Function</p>
        <p className="w-[10%] font-bold text-center ">Result </p>
        <p className="w-[10%] font-bold text-center ">Time</p>
        <p className="w-[10%] font-bold text-center ">From</p>
        <p className="w-[10%] font-bold text-center ">To</p>
        <p className="w-[15%] font-bold text-center ">Hash</p>
        <p className="w-[10%] font-bold text-center ">Block</p>
      </div>

      {currentPageData &&
        currentPageData?.map((transaction, index) => (
          <div
            key={index}
            className="min-w-[1500px] flex flex-row justify-evenly p-4 m-3 border-b-2 border-lightest-gray rounded-xl"
          >
            <div className="w-[22%] ">
              <div className="flex justify-center space-x-0 ">
                <p className="text-dark-red ">
                  {" "}
                  Pollux...(
                  {transaction?.multipleDecodedData?.decodedDataResult?.name &&
                    transaction?.multipleDecodedData?.decodedDataResult?.name}
                  )
                </p>
                <p className="px-2 py-[1px] rounded-md bg-light-red text-black">
                  {" "}
                  {transaction?.multipleDecodedData?.decodedDataResult?.name &&
                    transaction?.multipleDecodedData?.decodedDataResult?.name}
                </p>
              </div>

              <Link
                to={`/tokendetailpage/${transaction?.multipleDecodedData?.decodedDataResult?.contractAddress}`}
                className=" text-center  text-light-gray"
              >
                <p>
                  {transaction?.multipleDecodedData?.decodedDataResult
                    ?.contractAddress &&
                  transaction?.multipleDecodedData?.decodedDataResult
                    ?.contractAddress
                    ? transaction?.multipleDecodedData?.decodedDataResult
                        ?.contractAddress
                    : transaction?.contractAddress}
                </p>
              </Link>
            </div>

            <p className="w-[15%] text-center ">
              {transaction?.multipleDecodedData?.decodedDataResult?.value &&
              transaction?.multipleDecodedData?.decodedDataResult?.value
                ? transaction?.multipleDecodedData?.decodedDataResult?.value
                : 0}
              /{transaction?.functionSelector}
            </p>

            <p className="w-[10%] flex justify-center ">
              {transaction?.result === "SUCCESS" ? (
                <IoIosCheckmarkCircleOutline size={24} color="green" />
              ) : (
                <RxCrossCircled size={24} color="red" />
              )}
            </p>

            <p className="w-[10%] text-center ">
              {transaction?.timeStamp && secondsAgo(transaction?.timeStamp)}
            </p>

            <Link
              to={`/accountdetails/${transaction?.multipleDecodedData?.decodedDataResult?.from}`}
              className="w-[10%] text-center  text-dark-red"
            >
              <p>
                {transaction?.multipleDecodedData?.decodedDataResult?.from &&
                transaction?.multipleDecodedData?.decodedDataResult?.from
                  ? shortenString(
                      transaction?.multipleDecodedData?.decodedDataResult?.from,
                      5
                    )
                  : shortenString(transaction?.fromAddress, 5)}
              </p>
            </Link>

            <Link
              to={`/producerdetailpage/${transaction?.multipleDecodedData?.decodedDataResult?.to}`}
              className="w-[10%] text-center  text-dark-red"
            >
              <p>
                {transaction?.multipleDecodedData?.decodedDataResult?.to &&
                transaction?.multipleDecodedData?.decodedDataResult?.to
                  ? shortenString(
                      transaction?.multipleDecodedData?.decodedDataResult?.to,
                      5
                    )
                  : shortenString(transaction?.toAddress, 5)}
              </p>
            </Link>

            <Link
              to={`/transactiondetails/${transaction?.transactionId}`}
              className="w-[15%] text-dark-red  text-center "
            >
              <p>
                {transaction?.transactionId &&
                  shortenString(transaction?.transactionId, 8)}
              </p>
            </Link>

            <p className="w-[10%] flex justify-center ">
              {transaction?.blockNumber && transaction?.blockNumber}
            </p>
          </div>
        ))}

      <div className="flex justify-start md:justify-end">
        <Pagination
          totalPages={data1?.totalRecords}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

const Wallet = ({ value1, value2 }) => {
  return (
    <div className="bg-white h-auto rounded-lg p-5">
      <div>
        <SearchBarExpand />
      </div>

      <div className="flex flex-row justify-between items-center  p-7 border-b-[1px] border-text-bg-gray pt-4 pb-4">
        <div className="flex flex-row ">
          <img src={PoxImg} alt="pox image" className="" />
          <Link to="/tokens/pox">
            <p className="pl-2 font-bold text-dark-red">Pollux (POX )</p>
          </Link>
        </div>
        <div>
          <p>{value1}</p>
          <p>≈ ${value2}</p>
        </div>
      </div>

      <div className="flex flex-row justify-between  p-7 border-b-[1px] border-text-bg-gray pt-4 pb-40">
        <div>
          <div className="flex flex-row items-center">
            <img src={PoxImg} alt="pox image" className="" />
            <p className="pl-2 font-bold">Pollux USD (USDX)</p>
            <p className=" ml-2 px-2 py-1 text-light-mid-gray bg-text-bg-gray rounded-lg">
              PRC20
            </p>
          </div>
          <p className="pl-10 font-semibold">
            PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm
          </p>
        </div>

        <p className="font-bold">8007.22</p>
      </div>

      <div className="flex flex-row items-center justify-center py-2 rounded-lg bg-text-bg-gray">
        <p className="text-dark-yellow font-semibold cursor-pointer">More</p>
        <p className="text-dark-yellow mt-1">
          <IoIosArrowForward />
        </p>
      </div>
    </div>
  );
};

const ProducerDetailPage = () => {
  const witnessAddress = useParams().id;
  const [data, setData] = useState({});
  const [accountData, setAccountData] = useState({});
  const [poxPrice, setPoxPrice] = useState(0);
  const [isShow, setIsShow] = useState("Transactions");
  // For tab Switching in walllet
  const [isRender, setIsRender] = useState("Wallet (1)");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducerDetailData(witnessAddress);
        setData(data?.message);
        const poxPrice = await getTrendingSearchGraphData();
        setPoxPrice(poxPrice?.price);
        const accountDataObj = await getAccountDetailsPageData(witnessAddress);
        setAccountData(accountDataObj?.message);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address);
    toast.success("Hash copied successfully!");
  };

  const showItemComponent = () => {
    switch (isShow) {
      case "Transactions":
        return <TransactionTable />;

      case "Transfers":
        return <TransferTable />;
    }
  };

  const renderItemComponent = () => {
    switch (isRender) {
      case "Wallet (1)":
        return (
          <Wallet
            value1={(Number(accountData?.balance) / Math.pow(10, 6)).toFixed(6)}
            value2={poxPrice}
            value3={""}
          />
        );

      case "Portfolio (0)":
        return (
          <div className="bg-white h-[600px] rounded-lg">
            <p className="px-80 py-48">No Data Found</p>
          </div>
        );

      case "Approval (0)":
        return (
          <div className="bg-white h-[600px] rounded-lg">
            <p className="px-80 py-48">No Data Found</p>
          </div>
        );
    }
  };
  return (
    <div className="px-12 pb-12">
      {/* Search Bar */}
      <div>
        <SearchBarExpand />
      </div>
      {/* First  */}
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-xl font-bold">Account</p>
          <div className="flex flex-row items-center space-x-4">
            <p className="text-lg font-semibold pt-3"></p>
            {data?.address}
            <p className="text-xl p-2 bg-white rounded-full cursor-pointer ">
              <BiSolidCopyAlt onClick={() => handleCopy(data?.address)} />
            </p>
            <p className="text-xl bg-white p-2 rounded-full cursor-pointer">
              <RiQrCodeFill />
            </p>
          </div>
          <p className="mt-2 py-1 px-3 mr-80 font-semibold bg-lightest-gray rounded-md">
            Add a private tag
          </p>
        </div>

        <div className="flex flex-row items-center space-x-10 mt-14">
          <div>
            <div className="flex flex-row space-x-2">
              <p className="bg-lightest-gray rounded-md pt-1 px-1">
                <AiOutlineQuestion />
              </p>
              <p>Recent Activity (UTC)</p>
            </div>
            <p>2024-07-19T00:00:40.423Z</p>
          </div>

          <div>
            <div className="flex flex-row space-x-2">
              <p className="bg-lightest-gray rounded-md pt-1 px-1">
                <AiOutlineQuestion />
              </p>
              <p>Created on (UTC)</p>
            </div>
            <p>2024-07-19T00:00:40.423Z</p>
          </div>
        </div>
      </div>

      {/* Second div */}
      <div className="flex flex-row justify-between space-x-5 w-full mt-5">
        <div className="w-[50%] bg-white rounded-lg shadow-lg p-5 h-[300px]">
          <div className="flex flex-row justify-between items-center border-b-[1px] border-text-bg-gray pt-2 pb-4">
            <div className="flex flex-row space-x-2">
              <p className="bg-lightest-gray rounded-md font-bold pt-1 px-1">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold">Name</p>
            </div>
            <p>{data?.checkSR?.url && extractSiteName(data?.checkSR?.url)}</p>
          </div>

          <div className="flex flex-row justify-between items-center border-b-[1px] border-text-bg-gray pt-4 pb-4">
            <div className="flex flex-row space-x-2">
              <p className="bg-lightest-gray rounded-md font-bold pt-1 px-1">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold">Website</p>
            </div>
            <p className="text-dark-red">{data?.checkSR?.url}</p>
          </div>

          <div className="flex flex-row justify-between items-center border-b-[1px] border-text-bg-gray pt-4 pb-4">
            <div className="flex flex-row space-x-2">
              <p className="bg-lightest-gray rounded-md font-bold pt-1 px-1">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold">Block Count/Efficiency：</p>
            </div>
            <p>
              {" "}
              <span className="text-dark-skyblue">
                {" "}
                {data?.checkSR?.totalProduced}{" "}
              </span>
              / /99.18
            </p>
          </div>

          <div className="flex flex-row items-center justify-between pt-4 pb-2">
            <div className="flex flex-row space-x-2">
              <p className="bg-lightest-gray font-bold rounded-md pt-1 px-1">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold">Round Ranking/Votes：</p>
            </div>
            <p>
              {data?.checkSR?.ranking}/ {data?.checkSR?.voteCount}
            </p>
          </div>
        </div>

        <div className="w-[50%]   flex flex-row  space-x-5">
          <div className="w-[33%] bg-white rounded-lg shadow-lg p-5">
            <div className="flex flex-row space-x-2">
              <p className="bg-lightest-gray rounded-md pt-1 px-1">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold "> Current Ranking</p>
            </div>

            <p className="text-xl font-semibold pt-3">
              {data?.checkSR?.ranking}
            </p>

            <div className="pt-20 flex justify-end">
              <img src="https://poxscan.io/images/cup.svg" alt="cup-image" />
            </div>

            <div className=" w-full flex flex-row">
              <p className="w-[100%] border-[3px] border-light-mid-red rounded-lg mt-3 mb-1 "></p>
              <p className=" border-r-[5px]  border-dark-red mt-2  rounded "></p>
            </div>

            <div className="flex flex-row justify-between pt-3">
              <p>1</p>
              <p>2</p>
            </div>
          </div>

          <div className="w-[33%] bg-white rounded-lg shadow-lg p-5">
            <div className="flex flex-row space-x-2">
              <p className="bg-lightest-gray rounded-md pt-1 px-1">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold">Current Votes</p>
            </div>

            <p className="text-xl font-semibold pt-3">
              {data?.checkSR?.voteCount}
            </p>

            <div className=" h-[230px] w-[250px] pl-5 ">
              <VotesChart />
            </div>
          </div>

          <div className="w-[33%] bg-white rounded-lg shadow-lg p-5">
            <div className="flex flex-row space-x-2">
              <p className="bg-lightest-gray rounded-md pt-1 px-1">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold">Reward Distribution</p>
            </div>

            <div className="h-[200px] w-[200px] ml-5">
              <GaugeChart />
            </div>

            <div className="">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row space-x-2">
                  <p className="text-xl font-bold text-dark-green">98%</p>
                  <p className="pt-2 text-dark-green">
                    <IoMdArrowUp />
                  </p>
                </div>

                <div className="flex flex-row space-x-2">
                  <p className="text-xl font-bold text-dark-red">2%</p>
                  <p className="pt-2 text-dark-red">
                    <IoMdArrowDown />
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-between">
                <p className="text-sm text-light-gray">Voters</p>
                <p className="text-sm text-light-mid-gray">SR Rewards</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full space-x-5 pt-5 mt-10">
        {/* First Div */}
        <div className="w-[50%] bg-white rounded-lg p-5">
          <div className="flex flex-row justify-between">
            <div className="">
              <p className="text-2xl pt-2 font-bold">
                $
                {(
                  (Number(accountData?.balance) / Math.pow(10, 6)) *
                  poxPrice
                ).toFixed(2)}
              </p>
              <p className="text-light-gray pt-2 font-semibold">
                {Number(accountData?.balance / Math.pow(10, 6)).toFixed(2)} POX
              </p>
            </div>
          </div>

          <div className="pt-4">
            <div className="flex flex-row justify-between border-b-[1px] border-t-[1px] border-text-bg-gray pt-4 pb-4">
              <div className="flex flex-row space-x-2 ">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p className=" font-bold ">POX Staked / Balance:</p>
              </div>

              <p>
                {" "}
                <span className="text-dark-red">
                  {accountData?.staked &&
                    Number(accountData?.staked / Math.pow(10, 6)).toFixed(
                      2
                    )}{" "}
                  POX
                </span>{" "}
                /{" "}
                {accountData?.balance &&
                  Number(accountData?.balance / Math.pow(10, 6)).toFixed(
                    2
                  )}{" "}
                POX
              </p>
            </div>

            <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-4 pb-4">
              <div className="flex flex-row space-x-2 ">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p className=" font-bold ">Transactions:</p>
              </div>
              <p className=" text-dark-red">{accountData?.Transactions}</p>
            </div>

            <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-4 pb-4">
              <div className="flex flex-row space-x-2 ">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p className=" font-bold">Transfers:</p>
              </div>

              <div className="flex flex-row items-center space-x-1 text-lg ">
                <p className="text-dark-red">{accountData?.Transactions}</p>{" "}
                <p>(</p>
                <p className="pt-1 text-dark-green">
                  <LuArrowDownToLine size={16} />
                </p>
                <p> {accountData?.Intxn} </p>
                <p className="pt-1 text-dark-red">
                  <LuArrowUpToLine size={16} />
                </p>
                <p>{accountData?.Outtxn} )</p>
              </div>
            </div>

            <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-4 pb-4">
              <div className="flex flex-row space-x-2 ">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p className=" font-bold">Bandwidth:</p>
              </div>
              <p>
                Available: {accountData?.AvailableBandwidth} /{" "}
                <span className="text-dark-red">
                  {accountData?.TotalBandwidth}
                </span>
              </p>
            </div>

            <div className="flex flex-row justify-between border-b-[1px]  border-text-bg-gray pt-4 pb-4">
              <div className="flex flex-row space-x-2 ">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p className=" font-bold">Energy:</p>
              </div>
              <p>
                Available: {accountData?.Availablenergy} /{" "}
                <span className="text-dark-red">
                  {accountData?.TotalEnergy}
                </span>
              </p>
            </div>

            <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-4 pb-4">
              <div className="flex flex-row space-x-2 ">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p className=" font-bold ">Votes:</p>
              </div>

              <p>
                Voted:{" "}
                <span className="text-dark-red">{accountData?.VotedVotes}</span>{" "}
                / {accountData?.TotalVotes}
              </p>
            </div>

            <div className="flex flex-row justify-between  pt-4 ">
              <div className="flex flex-row space-x-2 ">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p className=" font-bold">Claimable Voting Rewards:</p>
              </div>
              <p>{accountData?.ClaimableVotingRewards / Math.pow(10, 6)} POX</p>
            </div>
          </div>
          <div></div>
        </div>

        {/* Second Div */}
        <div className="w-[50%]  rounded-lg ">
          <div className="flex flex-row justify-between space-x-1 rounded-lg w-full">
            <p
              className={`cursor-pointer py-3 px-24 font-bold whitespace-nowrap w-[33%] ${
                isRender === "Wallet (1)"
                  ? "bg-white rounded-t-lg"
                  : "bg-lightest-gray text-black rounded-lg rounded-bl-none"
              }`}
              onClick={() => setIsRender("Wallet (1)")}
            >
              Wallet (1)
            </p>
            <p
              className={`cursor-pointer py-3 px-20 font-bold whitespace-nowrap w-[33%] ${
                isRender === "Portfolio (0)"
                  ? "bg-white rounded-t-lg"
                  : "bg-lightest-gray text-black rounded-lg"
              }`}
              onClick={() => setIsRender("Portfolio (0)")}
            >
              Portfolio (0)
            </p>
            <p
              className={`cursor-pointer py-3 px-20 font-bold whitespace-nowrap w-[33%] ${
                isRender === "Approval (0)"
                  ? "bg-white rounded-t-lg"
                  : "bg-lightest-gray text-black rounded-lg"
              }`}
              onClick={() => setIsRender("Approval (0)")}
            >
              Approval (0)
            </p>
          </div>
          <div>{renderItemComponent()}</div>
        </div>
      </div>

      <div className="flex flex-row justify-between md:justify-start gap-8 pt-20 pb-10">
        <button
          className={` py-2 md:py-3 px-3 md:px-9 font-bold text-base md:text-xl rounded-lg text-black cursor-pointer whitespace-nowrap ${
            isShow === "Transactions" ? "bg-dark-yellow shadow-lg" : "bg-white"
          }`}
          onClick={() => setIsShow("Transactions")}
        >
          Transactions
        </button>
        <button
          className={` py-2 md:py-3 px-5 md:px-9 font-bold text-base md:text-xl rounded-lg text-black cursor-pointer whitespace-nowrap ${
            isShow === "Transfers" ? "bg-dark-yellow shadow-lg" : "bg-white"
          }`}
          onClick={() => setIsShow("Transfers")}
        >
          Transfers
        </button>
      </div>
      <div>{showItemComponent()}</div>
    </div>
  );
};

export default ProducerDetailPage;
