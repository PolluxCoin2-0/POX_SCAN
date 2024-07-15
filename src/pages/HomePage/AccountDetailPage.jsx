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
import { getTransactionDetailsData, getTransferDetailData } from "../../utils/axios/TransactionDetails";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";
import { shortenString } from "../../utils/shortenString";
import { secondsAgo } from "../../utils/secondAgo";


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
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto md:overflow-hidden">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold text-light-gray">A total of 10 transaction(s)</p>
      </div>

      <div className="min-w-[1500px] flex flex-row justify-evenly text-center bg-lightest-gray p-4 m-3 rounded-xl">
        <p className="w-[4%]"><IoMdEye /></p>
        <p className="w-[16%]">Hash</p>
        <p className="w-[10%]">Block</p>
        <p className="w-[10%]">Time</p>
        <p className="w-[14%]">Transaction Type</p>
        <p className="w-[12%]">From</p>
        <p className="w-[12%]">To</p>
        <p className="w-[14%]">Token</p>
        <p className="w-[8%]">Result</p>
      </div>

      {data?.transactions && data?.transactions.map((transaction, index) => (
        <div key={index} className="min-w-[1500px] flex flex-row justify-evenly p-4 m-3 border-b-2 border-lightest-gray rounded-xl">
          <p className="w-[4%]"><IoMdEye /></p>
          <p className="w-[16%] text-center">{transaction?.transactionId && shortenString(transaction?.transactionId, 8)}</p>
          <p className="w-[10%] text-center">{transaction?.blockNumber}</p>
          <p className="w-[10%] text-center">{transaction?.timeStamp && secondsAgo(transaction?.timeStamp)}</p>
          <p className="w-[14%] text-center">{transaction?.type && transaction?.type}</p>
          <p className="w-[12%] text-center">{transaction?.fromAddress && shortenString(transaction?.fromAddress, 5)}</p>
          <p className="w-[12%] text-center">{transaction?.toAddress && shortenString(transaction?.toAddress, 5)}</p>
          <p className="w-[14%] text-center">{transaction?.type && transaction?.type}</p>
          <p className="w-[8%] flex justify-center">{transaction?.result === "SUCCESS" ? <IoIosCheckmarkCircleOutline size={24} color="green"/> : <RxCrossCircled size={24} color="red"/>}</p>
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
}


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
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-2xl p-4 md:p-10 overflow-x-auto md:overflow-hidden">
      <div className="flex flex-row items-center justify-between">
        <p className="font-bold text-light-gray">A total of 484 PRC20 Transfers</p>
      </div>

      <div className="min-w-[1500px] flex flex-row justify-evenly text-center bg-lightest-gray p-4 m-3 rounded-xl">
        <p className="w-[22%]">Token</p>
        <p className="w-[22%]">Amount/Function</p>
        <p className="w-[5%]">Result	</p>
        <p className="w-[10%]">Time</p>
        <p className="w-[8%]">From</p>
        <p className="w-[8%]">To</p>
        <p className="w-[10%]">Hash</p>
        <p className="w-[5%]">Block</p>
        
      </div>

       {data1?.transactions && data1?.transactions.map((transaction, index) => (
        <div key={index} className="min-w-[1500px] flex flex-row justify-evenly p-4 m-3 border-b-2 border-lightest-gray rounded-xl">
          <p className="w-[22%] text-center">{transaction?.multipleDecodedData?.decodedDataResult?.contractAddress && transaction?.multipleDecodedData?.decodedDataResult?.contractAddress ?
          transaction?.multipleDecodedData?.decodedDataResult?.contractAddress :
          transaction?.contractAddress}</p>

          <p className="w-[22%] text-center">{transaction?.multipleDecodedData?.decodedDataResult?.value && transaction?.multipleDecodedData?.decodedDataResult?.value ?
          transaction?.multipleDecodedData?.decodedDataResult?.value:
          0}
          /{transaction?.functionSelector}
          </p>

          <p className="w-[5%] text-center">
            {transaction?.result === "SUCCESS" ? <IoIosCheckmarkCircleOutline size={24} color="green"/> : <RxCrossCircled size={24} color="red"/>} 
          </p>

          <p className="w-[10%] text-center">{transaction?.timeStamp && secondsAgo(transaction?.timeStamp)}</p>

          <p className="w-[8%] text-center">{transaction?.multipleDecodedData?.decodedDataResult?.from && transaction?.multipleDecodedData?.decodedDataResult?.from ?
          shortenString(transaction?.multipleDecodedData?.decodedDataResult?.from, 5) :
          shortenString(transaction?.fromAddress, 5)}</p>

          <p className="w-[8%] text-center">{transaction?.multipleDecodedData?.decodedDataResult?.to && transaction?.multipleDecodedData?.decodedDataResult?.to ?
          shortenString(transaction?.multipleDecodedData?.decodedDataResult?.to, 5) :
          shortenString(transaction?.toAddress, 5)}</p>

          <p className="w-[10%] text-center">{transaction?.transactionId && shortenString(transaction?.transactionId, 8)}</p>

          <p className="w-[5%] flex justify-center">{transaction?.blockNumber && transaction?.blockNumber}</p>
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
}


const Wallet = () => {
  return (
    <div className="bg-white h-[600px] rounded-lg p-5">
      <div>
        <SearchBarExpand />
      </div>

      <div className="flex flex-row justify-between  p-7 border-b-[1px] border-text-bg-gray pt-4 pb-4">
        <div className="flex flex-row ">
          <img src={PoxImg} alt="pox image" className="" />
          <p className="pl-2 font-bold">POX (POX )</p>
        </div>

        <p className="font-bold">966196.431313</p>
      </div>

      <div className="flex flex-row justify-between  p-7 border-b-[1px] border-text-bg-gray pt-4 pb-4">
        <div className="flex flex-row">
          <img src={PoxImg} alt="pox image" className="" />
          <p className="pl-2 font-bold">Pollux USD (USDX)</p>
        </div>

        <p className="font-bold">10135081.72</p>
      </div>

      <div className="flex flex-row justify-center items-end pt-64">
        <p className="text-dark-yellow">More</p>
        <p className="text-dark-yellow pb-1">
          <IoIosArrowForward />
        </p>
      </div>
    </div>
  );
};

const AccountDetailPage = () => {
  const [isShow, setIsShow] = useState("Transactions");

  //  for tab switching in transactions and transfer
  const showItemComponent = () => {
    switch (isShow) {
      case "Transactions":
        return <TransactionTable />;

      case "Transfers":
        return <TransferTable />;
    }
  };

  // For tab Switching in walllet
  const [isRender, setIsRender] = useState("Wallet (1)");

  const renderItemComponent = () => {
    switch (isRender) {
      case "Wallet (1)":
        return <Wallet />;

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

        <div className="flex flex-row justify-between">
          <div className="flex flex-row space-x-5">
            <p className="text-2xl font-bold pt-4 text-dark-red">
              plkhdhsjdsiordbasdkkdowedwhhkjodokdfr
            </p>
            <p className=" pt-5 text-xl bg-white px-2 rounded-2xl">
              <BiSolidCopyAlt />
            </p>
            <p className=" pt-5 text-xl bg-white px-2 rounded-2xl">
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

              <p className="font-bold pt-1">2024-07-09 04:54:18</p>
            </div>

            <div>
              <div className="flex flex-row space-x-2">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p className="text-light-gray">Created on (UTC)</p>
              </div>

              <p className="font-bold pt-1">2024-07-06 15:20:45</p>
            </div>
          </div>
        </div>

        <p className="pt-5">Add a Private name</p>

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

                <p className="text-2xl pt-2 font-bold">$10,500,016.043</p>
                <p className="text-light-gray pt-2">≈ 0.009312POX</p>
              </div>

              <div>
                <div className="flex flex-row space-x-12">
                  <p className="">Wallet</p>
                  <p className="font-bold">100.00%</p>
                </div>

                <div className="flex flex-row space-x-8   pt-5">
                  <p>Portfolio</p>
                  <p className="font-bold">0%</p>
                </div>
              </div>
            </div>

            <div className="pt-10">
              <div className="flex flex-row justify-between border-b-[1px] border-t-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2 ">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />
                  </p>
                  <p className=" font-bold ">POX Staked / Balance:</p>
                </div>

                <p className=" font-bold">
                  {" "}
                  <span className="text-dark-red">0POX</span> / 0.009 POX
                </p>
              </div>

              <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2 ">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />
                  </p>
                  <p className=" font-bold ">Transactions:</p>
                </div>

                <p className=" text-dark-red font-bold">589</p>
              </div>

              <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2 ">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />
                  </p>
                  <p className=" font-bold">Transfers:</p>
                </div>

                <div className="flex flex-row text-lg font-bold">
                  <p className="text-dark-red">589 </p> <p>(</p>{" "}
                  <p className="pt-1 text-dark-green">
                    <LuArrowDownToLine />
                  </p>{" "}
                  <p> 583 </p>{" "}
                  <p className="pt-1 text-dark-red">
                    <LuArrowUpToLine />
                  </p>{" "}
                  <p>)</p>{" "}
                </div>
              </div>

              <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2 ">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />
                  </p>
                  <p className=" font-bold">Bandwidth:</p>
                </div>
                <p className=" font-bold ">
                  Available: 74 / <span className="text-dark-red">600</span>
                </p>
              </div>

              <div className="flex flex-row justify-between border-b-[1px]  border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2 ">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />
                  </p>
                  <p className=" font-bold">Energy:</p>
                </div>
                <p className=" font-bold">
                  Available: 0 / <span className="text-dark-red">0</span>
                </p>
              </div>

              <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2 ">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />
                  </p>
                  <p className=" font-bold ">Votes:</p>
                </div>

                <p className=" font-bold">
                  Voted: <span className="text-dark-red">0</span> / 0
                </p>
              </div>

              <div className="flex flex-row justify-between  pt-4 ">
                <div className="flex flex-row space-x-2 ">
                  <p className="bg-lightest-gray rounded-md pt-1 px-1">
                    <AiOutlineQuestion />
                  </p>
                  <p className=" font-bold">Claimable Voting Rewards:</p>
                </div>

                <p className=" font-bold">0 POX</p>
              </div>
            </div>

            <div></div>
          </div>

          {/* Second Div */}
          <div className="w-[50%]  rounded-lg ">
            <div className="flex flex-row justify-around space-x-1 rounded-lg ">
              <p
                className={`cursor-pointer py-3 px-24 whitespace-nowrap  ${
                  isRender === "Wallet (1)"
                    ? "bg-white rounded-t-lg"
                    : "bg-lightest-gray text-black rounded-lg"
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
            isShow === "Transactions"
            ? "bg-dark-yellow shadow-lg"
            : "bg-white"
          }`}
          onClick={() => setIsShow("Transactions")}
        >
          Transactions
        </button>
        <button
         className={` py-2 md:py-3 px-5 md:px-9 font-bold text-base md:text-xl rounded-lg text-black cursor-pointer whitespace-nowrap ${
          isShow === "Transfers"
          ? "bg-dark-yellow shadow-lg"
          : "bg-white"
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
