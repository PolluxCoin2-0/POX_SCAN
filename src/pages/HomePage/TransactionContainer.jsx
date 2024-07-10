// import { IoIosArrowForward } from "react-icons/io";
// import { Transactions } from "../../data/HomePageData";
import AreaChartComp from "../../components/AreaChart";
import { useEffect, useState } from "react";
import { getTransactionGraphData, getTransactionTableData } from "../../utils/axios/Home";
import { secondsAgo } from "../../utils/secondAgo";

const TransactionContainer = () => {

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getTransactionGraphData();
        const data1= await getTransactionTableData();
        setData(data?.message);
        setData1(data1?.message);
      } catch (error) {
        console.error('error', error);
      } 
    };

    fetchData();

  }, []);
  return (
    <>
      <div className="flex justify-between my-6 w-[75%]">
        <p className="font-bold text-xl">Transactions</p>
        {/* <p className="flex items-center cursor-pointer">
          More <IoIosArrowForward />
        </p> */}
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between">
      <div className="w-full md:w-[75%] overflow-x-auto">
      <div className="min-w-[900px]"> {/* Adjust min-width as needed */}
    {data1?.transactions && data1?.transactions.slice(0, 5).map((transaction, idx) => {
      return (
        <div
          className={`flex flex-row justify-between ${
            idx % 2 !== 0 ? "bg-text-bg-gray" : "bg-white"
          } py-6 px-12
          ${idx === 0 ? "rounded-t-2xl" : "rounded-none"} ${
            idx === data1?.transactions.slice(0, 5).length - 1
              ? "rounded-b-2xl"
              : "rounded-none"
          }`}
          key={idx}
        >
          {/* First column */}
          <div>
            <p className="font-semibold pb-3 mr-6 md:mr-0">
              {transaction?.transactionId && transaction?.transactionId}
            </p>
            <p className="text-light-gray">
              {transaction?.timeStamp && secondsAgo(transaction?.timeStamp)} secs ago
            </p>
          </div>

          {/* Second column */}
          <div className="flex space-x-8">
            <div>
              <p className="text-light-gray pb-3">From</p>
              <p className="text-light-gray">To</p>
            </div>

            <div>
              <p className="font-semibold pb-3">{transaction?.fromAddress && transaction?.fromAddress}</p>
              <p className="font-semibold">{transaction?.toAddress && transaction?.toAddress}</p>
            </div>

            <div className="flex items-center space-x-4 whitespace-nowrap">
              {data1?.transaction?.tags.map((tag, index) => {
                return (
                  <p
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-text-bg-gray"
                    } text-light-gray px-2 py-1 rounded-lg h-8`}
                    key={index}
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Third column */}
          <div className="ml-6 text-right md:ml-0">
            <p className="pb-3 font-semibold">{transaction?.assetAmount && transaction?.assetAmount} {transaction?.assetName && transaction?.assetName}</p>
            <span className="bg-green text-dark-green font-medium px-2 py-1 rounded-md">
              Transfer
            </span>
          </div>
        </div>
      );
    })}
  </div>
</div>


        {/* Charts */}
        <div className="w-full md:w-[23%] mt-6 md:mt-0">
          <div className="shadow-lg bg-white rounded-xl p-4">
            <p className="font-semibold">Daily Txns (15 Days)</p>
            <AreaChartComp
            value={data}
            xDataKey="date"
            yDataKey="count"
            componentChartColor="#5D3FD3"/>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default TransactionContainer;
