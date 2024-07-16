import { Pagination, SearchBarExpand } from "../../components";
import { BiSolidCopyAlt } from "react-icons/bi";
import { RiQrCodeFill } from "react-icons/ri";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineQuestion } from "react-icons/ai";
import { useEffect, useState } from "react";
import PoxImg from "../../assets/PoxImg.png";
import { IoMdEye } from "react-icons/io";
import {
  getAccountDetailsPageData,
  getTransactionDetailsData,
  getTransferDetailData,
} from "../../utils/axios/TransactionDetails";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { shortenString } from "../../utils/shortenString";
import { secondsAgo } from "../../utils/secondAgo";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getTrendingSearchGraphData } from "../../utils/axios/Home";

const TransactionTable = () => {
  // For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTransactionDetailsData();
        setData(data?.message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto md:overflow-hidden">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold text-light-gray">
          A total of 10 transaction(s)
        </p>
      </div>

      <div className="min-w-[1500px] flex flex-row justify-evenly text-center bg-lightest-gray p-4 m-3 rounded-xl">
        <p className="w-[4%]">
          <IoMdEye />
        </p>
        <p className="w-[16%]">Hash</p>
        <p className="w-[10%]">Block</p>
        <p className="w-[10%]">Time</p>
        <p className="w-[14%]">Transaction Type</p>
        <p className="w-[12%]">From</p>
        <p className="w-[12%]">To</p>
        <p className="w-[14%]">Token</p>
        <p className="w-[8%]">Result</p>
      </div>

      {data?.transactions &&
        data?.transactions.slice(0,10).map((transaction, index) => (
          <div
            key={index}
            className="min-w-[1500px] flex flex-row justify-evenly p-4 m-3 border-b-2 border-lightest-gray rounded-xl"
          >
            <p className="w-[4%]">
              <IoMdEye />
            </p>
            <p className="w-[16%] text-center">
              {transaction?.transactionId &&
                shortenString(transaction?.transactionId, 8)}
            </p>
            <p className="w-[10%] text-center">{transaction?.blockNumber}</p>
            <p className="w-[10%] text-center">
              {transaction?.timeStamp && secondsAgo(transaction?.timeStamp)}
            </p>
            <p className="w-[14%] text-center">
              {transaction?.type && transaction?.type}
            </p>
            <p className="w-[12%] text-center">
              {transaction?.fromAddress &&
                shortenString(transaction?.fromAddress, 5)}
            </p>
            <p className="w-[12%] text-center">
              {transaction?.toAddress &&
                shortenString(transaction?.toAddress, 5)}
            </p>
            <p className="w-[14%] text-center">
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
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

const TransferTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [data1, setData1] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await getTransferDetailData();
        setData1(data1?.message);
      } catch (error) {
        console.log("error", error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto md:overflow-hidden">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold text-light-gray">
          A total of 484 PRC20 Transfers
        </p>
      </div>

      <div className="min-w-[1500px] flex flex-row justify-evenly text-center bg-lightest-gray p-4 m-3 rounded-xl">
        <p className="w-[22%]">Token</p>
        <p className="w-[22%]">Amount/Function</p>
        <p className="w-[5%]">Result </p>
        <p className="w-[10%]">Time</p>
        <p className="w-[8%]">From</p>
        <p className="w-[8%]">To</p>
        <p className="w-[10%]">Hash</p>
        <p className="w-[5%]">Block</p>
      </div>

      {data1?.transactions &&
        data1?.transactions.slice(0,10).map((transaction, index) => (
          <div
            key={index}
            className="min-w-[1500px] flex flex-row justify-evenly p-4 m-3 border-b-2 border-lightest-gray rounded-xl"
          >
            <p className="w-[22%] text-center">
              {transaction?.multipleDecodedData?.decodedDataResult
                ?.contractAddress &&
              transaction?.multipleDecodedData?.decodedDataResult
                ?.contractAddress
                ? transaction?.multipleDecodedData?.decodedDataResult
                    ?.contractAddress
                : transaction?.contractAddress}
            </p>

            <p className="w-[22%] text-center">
              {transaction?.multipleDecodedData?.decodedDataResult?.value &&
              transaction?.multipleDecodedData?.decodedDataResult?.value
                ? transaction?.multipleDecodedData?.decodedDataResult?.value
                : 0}
              /{transaction?.functionSelector}
            </p>

            <p className="w-[5%] text-center">
              {transaction?.result === "SUCCESS" ? (
                <IoIosCheckmarkCircleOutline size={24} color="green" />
              ) : (
                <RxCrossCircled size={24} color="red" />
              )}
            </p>

            <p className="w-[10%] text-center">
              {transaction?.timeStamp && secondsAgo(transaction?.timeStamp)}
            </p>

            <p className="w-[8%] text-center">
              {transaction?.multipleDecodedData?.decodedDataResult?.from &&
              transaction?.multipleDecodedData?.decodedDataResult?.from
                ? shortenString(
                    transaction?.multipleDecodedData?.decodedDataResult?.from,
                    5
                  )
                : shortenString(transaction?.fromAddress, 5)}
            </p>

            <p className="w-[8%] text-center">
              {transaction?.multipleDecodedData?.decodedDataResult?.to &&
              transaction?.multipleDecodedData?.decodedDataResult?.to
                ? shortenString(
                    transaction?.multipleDecodedData?.decodedDataResult?.to,
                    5
                  )
                : shortenString(transaction?.toAddress, 5)}
            </p>

            <p className="w-[10%] text-center">
              {transaction?.transactionId &&
                shortenString(transaction?.transactionId, 8)}
            </p>

            <p className="w-[5%] flex justify-center">
              {transaction?.blockNumber && transaction?.blockNumber}
            </p>
          </div>
        ))}

      <div className="flex justify-start md:justify-end">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

const Wallet = ({value1, value2}) => {
  return (
    <div className="bg-white h-auto rounded-lg p-5">
      <div>
        <SearchBarExpand />
      </div>

      <div className="flex flex-row justify-between items-center  p-7 border-b-[1px] border-text-bg-gray pt-4 pb-4">
        <div className="flex flex-row ">
          <img src={PoxImg} alt="pox image" className="" />
          <p className="pl-2 font-bold">Pollux (POX )</p>
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
          <p className=" ml-2 px-2 py-1 text-light-mid-gray bg-text-bg-gray rounded-lg">PRC20</p>
        </div>
        <p className="pl-10 font-semibold">PSTv3ZweeCRHd5cmxoL3dTTbSKGgtYZ5cm</p>
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

const AccountDetailPage = () => {
  const addressId = useParams().id;
  const [isShow, setIsShow] = useState("Transactions");
  const [accountData, setAccountData] = useState({});
  const [poxPrice, setPoxPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const poxPrice = await getTrendingSearchGraphData();
        setPoxPrice(poxPrice?.price);
        const accountDataObj = await getAccountDetailsPageData(addressId);
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

  //  for tab switching in transactions and transfer
  const showItemComponent = () => {
    switch (isShow) {
      case "Transactions":
        return <TransactionTable />;

      case "Transfers":
        return <TransferTable  />;
    }
  };

  // For tab Switching in walllet
  const [isRender, setIsRender] = useState("Wallet (1)");

  const renderItemComponent = () => {
    switch (isRender) {
      case "Wallet (1)":
        return <Wallet value1=  {(
          (Number(accountData?.balance) / Math.pow(10, 6))
        ).toFixed(6)} value2={poxPrice} value3={""} />;

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
      <div>
        <SearchBarExpand />
      </div>

      <div>
        <p className="text-xl font-bold">Account</p>

        <div className="flex flex-row justify-between mb-1">
          <div className="flex flex-row items-center space-x-5">
            <p className="text-2xl font-bold text-dark-red">
              {accountData?.address}
            </p>
            <p className="text-xl p-2 bg-white rounded-2xl cursor-pointer">
              <BiSolidCopyAlt
                onClick={() => handleCopy(accountData?.address)}
              />
            </p>
            <p className="text-xl bg-white p-2 rounded-2xl cursor-pointer">
              <RiQrCodeFill />
            </p>
          </div>

          <div className="flex flex-row space-x-10">
            <div>
              <div className="flex flex-row space-x-2">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p className="text-light-gray"> Recent Activity (UTC)</p>
              </div>

              <p className="font-bold pt-1">{accountData?.updatedAt}</p>
            </div>

            <div>
              <div className="flex flex-row space-x-2">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p className="text-light-gray">Created on (UTC)</p>
              </div>

              <p className="font-bold pt-1">{accountData?.createdAt}</p>
            </div>
          </div>
        </div>

        <p className="bg-lightest-gray inline px-4 py-2 rounded-lg cursor-pointer text-light-gray">
          Add a Private tag
        </p>

        <div className="flex flex-row justify-between w-full space-x-5 pt-5">
          {/* First Div */}
          <div className="w-[50%] bg-white rounded-lg p-5">
            <div className="flex flex-row justify-between">
              <div className="">
                <div className="flex flex-row space-x-2">
                  <p className="text-lg font-bold">Total Assets</p>
                  <p className="pt-2 text-dark-red bg-lightest-brown rounded-md px-1">
                    <IoIosArrowForward />
                  </p>
                </div>

                <p className="text-2xl pt-2 font-bold">
                  $
                  {(
                    (Number(accountData?.balance) / Math.pow(10, 6)) *
                    poxPrice
                  ).toFixed(2)}
                </p>
                <p className="text-light-gray pt-2 font-semibold">
                  {Number(accountData?.balance / Math.pow(10, 6)).toFixed(2)}{" "}
                  POX
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
                  <span className="text-dark-red">
                    {accountData?.VotedVotes}
                  </span>{" "}
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

                <p>
                  {accountData?.ClaimableVotingRewards / Math.pow(10, 6)} POX
                </p>
              </div>
            </div>

            <div></div>
          </div>

          {/* Second Div */}
          <div className="w-[50%]  rounded-lg ">
            <div className="flex flex-row justify-between space-x-1 rounded-lg ">
              <p
                className={`cursor-pointer py-3 px-24 whitespace-nowrap  ${
                  isRender === "Wallet (1)"
                    ? "bg-white rounded-t-lg"
                    : "bg-lightest-gray text-black rounded-lg rounded-bl-none"
                }`}
                onClick={() => setIsRender("Wallet (1)")}
              >
                Wallet (1)
              </p>

              <p
                className={`cursor-pointer py-3 px-20 whitespace-nowrap  ${
                  isRender === "Portfolio (0)"
                    ? "bg-white rounded-t-lg"
                    : "bg-lightest-gray text-black rounded-lg"
                }`}
                onClick={() => setIsRender("Portfolio (0)")}
              >
                Portfolio (0)
              </p>

              <p
                className={`cursor-pointer py-3 px-20 whitespace-nowrap  ${
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
      </div>

      {/* For Table */}
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
      <div></div> 
    </div>
  );
};

export default AccountDetailPage;
