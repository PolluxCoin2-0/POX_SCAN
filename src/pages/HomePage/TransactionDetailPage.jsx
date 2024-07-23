import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../components";
import { AiOutlineQuestion } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa6";
import UsdxImg from "../../assets/UsdxImg.png";
import { getAccountDetailData } from "../../utils/axios/TransactionDetails";
import { useParams } from "react-router-dom";
import { secondsAgo } from "../../utils/secondAgo";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineContentCopy } from "react-icons/md";
import { toast } from "react-toastify";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";

const OverviewData = ({ data,handleCopy }) => {
  return (
    <div className="bg-white p-10 rounded-tl-none rounded-xl shadow-lg">
      <div className="flex flex-row space-x-48 pt-4 pb-4">
        <div className="flex flex-row ">
          <p className="bg-text-bg-gray pt-1  rounded-md px-1 ">
            <AiOutlineQuestion />
          </p>
          <p className="font-bold pl-2 ">Value</p>
        </div>

        <div className="space-x-40 bg-text-bg-gray rounded-md px-2">
          <p className="">17</p>
        </div>
      </div>

      <div className="flex flex-row space-x-28 pt-4 pb-4">
        <div className="flex flex-row ">
          <p className="bg-text-bg-gray pt-1 rounded-md px-1 ">
            <AiOutlineQuestion />
          </p>
          <p className="font-bold pl-2">Contract Address</p>
        </div>

        <div className="flex flex-row space-x-5 bg-text-bg-gray rounded-md pl-2 pr-2 py-0">
          <p className="">
            {" "}
            {data?.transactions?.[0]?.contractAddress &&
              data?.transactions?.[0]?.contractAddress}
          </p>
          <p className="pt-1">
            <FaRegCopy className="cursor-pointer" onClick={()=>handleCopy(data?.transactions?.[0]?.contractAddress)}/>
          </p>
        </div>
      </div>

      <div className="flex flex-row space-x-32 pt-4 pb-4">
        <div className="flex flex-row ">
          <p className="bg-text-bg-gray pt-1 rounded-md px-1 ">
            <AiOutlineQuestion />
          </p>
          <p className="font-bold pl-2">Method Calling </p>
        </div>

        <div className="space-x-56 bg-text-bg-gray rounded-md px-2">
          <p className="">
            {" "}
            {data?.transactions?.[0]?.functionSelector &&
              data?.transactions?.[0]?.functionSelector}
          </p>
        </div>
      </div>

      <div className="flex flex-row space-x-20 pt-4 pb-4">
        <div className="flex flex-row ">
          <p className="bg-text-bg-gray pt-1 rounded-md px-1 ">
            <AiOutlineQuestion />
          </p>
          <p className="font-bold pl-2">Trigger Smart Contract</p>
        </div>

        <div className="flex flex-row space-x-2">
          <p>From </p>
          <div className="flex flex-row space-x-4 pl-2 pr-2 bg-text-bg-gray rounded-md">
            <p>
              {data?.transactions?.[0]?.fromAddress &&
                data?.transactions?.[0]?.fromAddress}
            </p>
            <p className="pt-1">
              <FaRegCopy className="cursor-pointer" onClick={()=>handleCopy( data?.transactions?.[0]?.fromAddress)} />
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-2">
          <p>TO</p>
          <div className="flex flex-row space-x-4 pl-2 pr-2 bg-text-bg-gray rounded-md">
            <p>
              {data?.transactions?.[0]?.toAddress &&
                data?.transactions?.[0]?.toAddress}
            </p>
            <p className="pt-1">
              <FaRegCopy  className="cursor-pointer" onClick={()=>handleCopy( data?.transactions?.[0]?.toAddress)} />
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row space-x-16 pt-4 pb-4">
        <div className="flex flex-row ">
        <span className=" ">
            <AiOutlineQuestion size={24} className="bg-text-bg-gray pt-1 inline rounded-md px-1 " />
          </span>
          <p className="font-bold pl-2 inline">All Transfer</p>
        </div>
        <div>
          {data?.transactions?.[0]?.multipleDecodedData &&
            data?.transactions?.[0]?.multipleDecodedData?.map((data) => {
              return (
                <>
                  {data?.decodedDataResult !== null && (
                    <div className="flex flex-row items-center mb-6 space-x-2">
                      <div className="flex flex-row space-x-2">
                        <p className="pl-24">From </p>
                        <div className="space-x-16 px-2 bg-text-bg-gray rounded-md">
                          <p>{data?.decodedDataResult?.from}</p>
                        </div>
                      </div>

                      <div className="flex flex-row space-x-2">
                        <p className="pl-5">TO</p>
                        <div className=" space-x-9 px-2 bg-text-bg-gray rounded-md">
                          <p>{data?.decodedDataResult?.to}</p>
                        </div>
                      </div>

                      <div className="flex flex-rowm items-center">
                        <p className="pl-6">Value:</p>
                        <p className="bg-text-bg-gray rounded-md pl-2 pr-2 ml-2">
                          {" "}
                          {data?.decodedDataResult?.to}
                        </p>
                        <p className="pl-2"> Name:</p>
                        <p className="bg-text-bg-gray rounded-md pl-2 pr-2 mr-2">
                          {" "}
                          USDX
                        </p>
                        <img src={UsdxImg} alt="" className="" />
                      </div>
                    </div>
                  )}
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const EventLogData = ({ data }) => {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-lg">
      <div className="flex flex-row space-x-10 w-full">
        <div className="flex flex-row space-x-2 w-[10%]">
          <p >
            <AiOutlineQuestion size={24} className="bg-text-bg-gray px-1 pt-1 mb-72 rounded-md "/>
          </p>
          <p className="text-lg font-bold">All Logs</p>
        </div>

        <div className="bg-text-bg-gray p-4 rounded-md w-[90%]">
          <div className="flex flex-row space-x-10">
            <p className="bg-mid-light-gray font-bold text-lg pl-3 pr-4 rounded-md">
              Loglist:
            </p>
            <p className="font-bold bg-mid-light-gray pl-2 pr-2 rounded-full">
              0
            </p>
          </div>

          <div className="flex flex-row space-x-7 pt-4">
            <p className="bg-mid-light-gray font-bold text-lg pl-3 pr-3 rounded-md">
              Address:
            </p>
            <p className="text-lg text-dark-yellow">
              {data?.transactions?.[0]?.logList?.[0]?.address}
            </p>
          </div>

          <div className="flex flex-row space-x-14 pt-4">
            <p className="bg-mid-light-gray font-bold text-lg pl-3 pr-3 rounded-md">
              Data:
            </p>
            <p className="text-lg text-darker-blue">
              {data?.transactions?.[0]?.logList?.[0]?.data}
            </p>
          </div>

          <div className="pt-4">
            <p className="bg-mid-light-gray font-bold text-lg px-2 inline-block rounded-md">
              Topics:{" "}
            </p>
            <div>
              {data?.transactions?.[0]?.logList?.[0]?.topics.map(
                (topic, idx) => (
                  <>
                    <div className="flex flex-row space-x-5 pt-5">
                      <p className="bg-mid-light-gray px-3 rounded-md text-lg font-bold">
                        {idx}.
                      </p>
                      <p>{topic}</p>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TransactionDetailPage = () => {
  const transActionId = useParams().id;
  const transactionId = useParams().id;
  const [data, setData] = useState({});
  const [isRender, setIsRender] = useState("Overview");
  const [inputValue, setInputValue] = useState("");
  const [showResoucrcesConsumed, setShowResoucrcesConsumed] = useState(false);
  const [showConfirmedSrs, setShowConfirmedSrs] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAccountDetailData({transActionId, transactionId});
        setData(data?.message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const renderItemComponent = () => {
    switch (isRender) {
      case "Overview":
        return <OverviewData data={data} handleCopy={handleCopy} />;
      case "Event Logs":
        return <EventLogData data={data} />;
      default:
        return null; // or any fallback component or message
    }
  };

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address);
    toast.success("Hash copied successfully!");
  };

  return (
    <div className="px-12 pb-12">
      {/* First Div */}
      <div>
        <SearchBarExpand />
      </div>

      {/* Second Div */}
      <div className="bg-white rounded-2xl shadow-lg p-10">
        <p className="text-lg font-bold">Transaction Details</p>
        <div className="flex flex-row space-x-4 pt-3">
          <p className=" font-bold ">Account</p>
          <p className="text-dark-yellow font-bold">
            {data?.transactions?.[0]?.fromAddress &&
              data?.transactions?.[0]?.fromAddress}
          </p>
          <p className="font-bold">Contract Interaction</p>
          <p className="font-bold bg-lightest-gray p-1 pl-2 pr-2 rounded-lg">
            18
          </p>
          <p className="font-bold">to</p>
          <p className="font-bold text-dark-yellow">
            {data?.transactions?.[0]?.toAddress &&
              data?.transactions?.[0]?.toAddress}
          </p>
        </div>

        <div>
          <div className="flex flex-row items-center space-x-52 pt-10 pb-5  border-b-[1px] border-lightest-gray">
            <div className="flex flex-row">
              <p className="bg-lightest-gray pt-1 rounded-md px-1 ">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold pl-2">Hash:</p>
            </div>
            <p className="font-bold">
              {data?.transactions?.[0]?.transactionId &&
                data?.transactions?.[0]?.transactionId}
            </p>
            <MdOutlineContentCopy
              className="cursor-pointer"
              onClick={() => handleCopy(data?.transactions?.[0]?.transactionId)}
            />
          </div>

          <div className="flex flex-row items-center space-x-36 border-b-[1px] pb-5 pt-5 border-lightest-gray relative">
            <div className="flex flex-row">
              <p className="bg-lightest-gray pt-1 rounded-md px-1 ">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold pl-2">Confirmed SRs:</p>
            </div>

            <div className="flex flex-row space-x-5 ">
              <p>{data?.witness && data?.witness?.length}</p>
              {data?.witness &&
                data?.witness
                  .slice(0, 5)
                  .map((witness, index) => <p key={index}>{witness}</p>)}
            </div>
            <MdKeyboardArrowDown
              className="cursor-pointer"
              onClick={() => setShowConfirmedSrs(!showConfirmedSrs)}
            />
          </div>
          {showConfirmedSrs && (
            <div className="bg-text-bg-gray py-4 px-6 rounded-xl absolute left-80 z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data?.witness &&
                  data.witness.map((witness, idx) => (
                    <span
                      className="font-semibold bg-white p-2 rounded-lg shadow-md"
                      key={idx}
                    >
                      {witness}
                    </span>
                  ))}
              </div>
            </div>
          )}

          <div className="flex flex-row space-x-52 border-b-[1px] pb-5 pt-5 border-lightest-gray">
            <div className="flex flex-row">
              <p className="bg-lightest-gray pt-1 rounded-md px-1 ">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold pl-2">Result</p>
            </div>

            <p className=" text-dark-green bg-light-green pl-2 pr-2 rounded-md">
              {data?.transactions?.[0]?.result &&
                data?.transactions?.[0]?.result}
            </p>
          </div>

          <div className="flex flex-row space-x-52 border-b-[1px] pt-5 pb-5 border-lightest-gray">
            <div className="flex flex-row">
              <p className="bg-lightest-gray pt-1 rounded-md px-1 ">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold pl-2">Block:</p>
            </div>

            <p className="font-bold">
              {data?.transactions?.[0]?.blockNumber &&
                data?.transactions?.[0]?.blockNumber}
            </p>
          </div>

          <div className="flex flex-row space-x-52 border-b-[1px] pt-5 pb-5 border-lightest-gray">
            <div className="flex flex-row">
              <p className="bg-lightest-gray pt-1 rounded-md px-1 ">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold pl-2">Status:</p>
            </div>

            <div className="flex flex-row space-x-8">
              <p className="text-dark-orange bg-light-red pl-2 pr-2 rounded-md">
                UNCONFIRMED
              </p>
              <p className="font-bold">
                Confirmed by {data?.witness && data?.witness?.length} blocks
              </p>
              <p></p>
            </div>
          </div>

          <div className="flex flex-row space-x-52 border-b-[1px] pt-5 pb-5 border-lightest-gray">
            <div className="flex flex-row">
              <p className="bg-lightest-gray pt-1 rounded-md px-1 ">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold pl-2">Time:</p>
            </div>

            <p className="font-bold">
              {data?.transactions?.[0]?.timeStamp &&
                secondsAgo(data?.transactions?.[0]?.timeStamp)}{" "}
              |{" "}
              {data?.transactions?.[0]?.createdAt &&
                data?.transactions?.[0]?.createdAt}{" "}
              (UTC)
            </p>
          </div>

          <div className="flex flex-row items-center space-x-12 border-b-[1px] pt-5  pb-5 border-lightest-gray relative">
            <div className="flex flex-row items-center">
              <p className="bg-lightest-gray pt-1 rounded-md px-1 ">
                <AiOutlineQuestion />
              </p>
              <p className="font-bold">Resources Consumed & Fee:</p>
            </div>

            <p className=" font-bold bg-lightest-gray pl-2 pr-2 rounded-md">
              265 Bandwidth{" "}
            </p>
            <MdKeyboardArrowDown
              className="cursor-pointer"
              onClick={() => setShowResoucrcesConsumed(!showResoucrcesConsumed)}
            />
            {showResoucrcesConsumed && (
              <div className="absolute top-14 left-56  bg-text-bg-gray py-4 px-6 rounded-xl">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-mid-light-gray pb-4 font-semibold">
                    <p className="text-sm">ENERGY_USAGE</p>
                    <div className="flex flex-row items-center space-x-2">
                      <p className="text-sm">{data?.resources?.energy_usage}</p>
                      <p className="text-light-gray text-sm">
                        (The Amount Of Energy Consumed In The {"Caller's"}{" "}
                        Account)
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-mid-light-gray pb-4 font-semibold">
                    <p className="text-sm">ENERGY_FEE</p>
                    <div className="flex flex-row items-center space-x-2">
                      <p className="text-sm">
                        {formatNumberWithCommas(data?.resources?.energy_fee)}
                      </p>
                      <p className="text-light-gray text-sm">
                        (Energy) (
                        {data?.resources?.pox_consumed / Math.pow(10, 6)} POX
                        Burned For Energy)
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-mid-light-gray pb-4 font-semibold">
                    <p className="text-sm">ENERGY_USAGE_TOTAL</p>
                    <div className="flex flex-row items-center space-x-2">
                      <p className="text-sm">
                        {formatNumberWithCommas(
                          data?.resources?.energy_usage_total
                        )}
                      </p>
                      <p className="text-light-gray text-sm">
                        (The Total Amount Of Energy Consumed By The Transaction)
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-mid-light-gray pb-4 font-semibold">
                    <p className="text-sm">POX_CONSUMED</p>
                    <div className="flex flex-row items-center space-x-2">
                      <p className="text-sm">
                        {data?.resources?.pox_consumed / Math.pow(10, 6)}
                      </p>
                      <p className="text-light-gray text-sm">
                        (POX Burned For Resources)
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-mid-light-gray pb-4 font-semibold">
                    <p className="text-sm">BANDWIDTH_CONSUMED_TOTAL</p>
                    <div className="flex flex-row items-center space-x-2">
                      <p className="text-sm">
                        {data?.resources?.Bandwidth_consumed_total}
                      </p>
                      <p className="text-light-gray text-sm">
                        (Total Bandwidth Consumed In Transaction)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Third Div */}
      <div className="pt-10">
        <div className="flex flex-row">
          <p
            className={`cursor-pointer py-3 px-12 whitespace-nowrap  ${
              isRender === "Overview"
                ? "bg-white rounded-t-xl"
                : " text-black rounded-xl"
            }`}
            onClick={() => setIsRender("Overview")}
          >
            Overview
          </p>

          <p
            className={`cursor-pointer py-3 px-12 whitespace-nowrap  ${
              isRender === "Event Logs"
                ? "bg-white rounded-t-xl"
                : " text-black rounded-t-xl"
            }`}
            onClick={() => setIsRender("Event Logs")}
          >
            Event Logs
          </p>
        </div>

        <div>{renderItemComponent()}</div>
      </div>

      {/* Fourth Div */}
      <div className="bg-white mt-10 rounded-lg w-full flex flex-col md:flex-row p-8">
  <div className="flex flex-row items-start md:w-[20%] mb-4 md:mb-0">
    <p className="bg-mid-light-gray p-2 rounded-md mr-2 flex items-center">
      <AiOutlineQuestion />
    </p>
    <p className="font-semibold">Private Note:</p>
  </div>

  <div className="md:w-[80%] flex flex-col">
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder="Enter the transaction note and press the “Enter Key” or click the blank space to save"
      className="w-full my-4 p-3 bg-text-bg-gray focus:bg-white focus:border rounded-md outline-none"
    />
    <button className="bg-dark-yellow py-2 px-8 font-bold rounded-lg text-black cursor-pointer self-start mb-4">
      Submit
    </button>
    <p className="text-sm text-gray-600">
      Although this is only viewable to you, do not store any sensitive data including your password, mnemonic, or private key here.
    </p>
  </div>
</div>

    </div>
  );
};

export default TransactionDetailPage;
