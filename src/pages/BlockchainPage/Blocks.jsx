import { useEffect, useState } from "react";
import SearchBarExpand from "../../components/SearchBarExpand";
import { MdKeyboardArrowRight } from "react-icons/md";
import Pagination from "../../components/Pagination";
import { getBlockData,  getBlockTableData } from "../../utils/axios/Blockchain";
import { secondsAgo } from "../../utils/secondAgo";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";
import { Link } from "react-router-dom";

const Blocks = () => {
   
  const [data, setData] = useState({});
  const [data1, setData1] =useState({});
  const [dataFromSearch, setDataFromSearch] = useState({});

  // For Pagination
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(()=>{
    const fetchData=async()=>{
    try {
      const data = await  getBlockTableData(currentPage);
      setData(data?.message);
      const data1 = await getBlockData();
      setData1(data1);
      }
      catch (error) {
        console.log(error);
      }
    } 
    fetchData();
  },[currentPage])

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-4 md:px-4 lg:px-4 xl:px-12 2xl:px-12">
      <div>
        <SearchBarExpand setDataFromSearch={setDataFromSearch} />
      </div>
      <p className="font-bold text-2xl pb-8">Blocks</p>
      <div className=" flex flex-col space-y-6 md:space-y-0 md:flex-row justify-around ">
        <div className="w-full md:w-[32%]  bg-white shadow-lg rounded-2xl p-5 ">
          <div className="pt-1">
            <p className="font-bold">Number of Blocks</p>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1 ">
            <div>
              <p className=" font-bold md:text-lg text-xl">{data1?.totalBlocks && formatNumberWithCommas(data1?.totalBlocks)}</p>
              <p className="pt-4 text-sm text-light-gray">Latest</p>
            </div>
            
            <div>
              <p className="md:text-lg text-xl font-bold text-dark-red">+{data1?.totalBlocks24H && data1?.totalBlocks24H}</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">
                Yesterday
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[32%]  rounded-2xl p-5 bg-white shadow-md ">
          <div className=" flex flex-row pt-1 justify-between">
            <p className="font-bold">Block Rewards</p>
            
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1">
            <div>
              <p className="md:text-lg text-xl font-bold">{formatNumberWithCommas(Number(data1?.totalBlockReward ?? 0).toFixed(1))} POX</p>
              <p className="text-xs flex justify-end ">=$1,078,347,147.3</p>
              <p className="pt-4 text-sm text-light-gray">Total</p>
            </div>

            <div>
              <p className="md:text-lg text-xl text-dark-red font-bold">{data1?.totalBlockRewards24h && data1?.totalBlockRewards24h}TRX</p>
              <p className="text-xs flex justify-end">=$615,954.9</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">
                Yesterday
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[32%] rounded-2xl p-5 bg-white shadow-md ">
          <div className=" flex flex-row justify-between pt-1">
            <p className="font-bold">Stats on Burned POX</p>
            
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1">
            <div>
              <p className="md:text-lg text-xl font-bold">{formatNumberWithCommas(Number(data1?.burnedPOX ?? 0).toFixed(3))} POX</p>
              <p className=" text-xs">=$1,363.31</p>
              <p className="pt-4 text-sm text-light-gray flex ">Total</p>
            </div>

            <div>
              <p className="md:text-lg text-xl text-dark-red font-bold">{data1?.burnedPOX24H && data1?.burnedPOX24H.toFixed(3)} TRX</p>
              <p className="text-xs flex justify-end">=$1,363.13</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">
                Yesterday
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="font-bold text-2xl pb-10  pt-10">StableCoin</p>
      <div className="bg-white  rounded-2xl p-2 md:p-7  overflow-x-auto ">
        <p className="pb-5 font-medium text-light-gray">
          Only the first{" "}
          <span className="text-black font-semibold">10,000</span> records are
          displayed
        </p>
 
        <div className="flex flex-row justify-evenly  p-2 pb-3 bg-lightest-gray rounded-lg min-w-[1500px] ">
          <p className=" w-[12%] font-bold text-center  ">Block</p>
          <p className=" w-[10%] font-bold text-center  ">Age</p>
          <p className=" w-[12%] font-bold text-center ">Producer</p>
          <p className=" w-[12%] font-bold text-center ">Pox Count</p>
          <p className=" w-[16%] font-bold text-center  whitespace-nowrap "> Consumed Energy/Bandwidth</p>
          <p className=" w-[12%] font-bold text-center  ">Burned POX</p>
          <p className=" w-[12%] font-bold text-center  ">Block Reward</p>
          <p className=" w-[14%] font-bold text-center  ">Status</p>
        </div>

        {data?.apiResult && data?.apiResult.map((stablecoin, index) => {
          return (
            <>
              <div className="flex flex-row justify-between border-b-2 p-4 border-text-bg-gray min-w-[1500px]" key={index}>
                <Link to={`/blockdetailpage/${stablecoin?.number}`} className="w-[12%] text-dark-red pl-6 ">
                <p >
                {stablecoin?.number && stablecoin?.number}
                </p>
                </Link>
             
                <p className="w-[10%] text-center">{stablecoin?.timestamp && secondsAgo(stablecoin?.timestamp && stablecoin?.timestamp)}</p>
                
                <Link to={`/producerdetailpage/${stablecoin?.witnessAddress}`} className="w-[12%] text-center text-dark-red">
                 <p >{stablecoin?.witnessName && stablecoin?.witnessName}</p>
                </Link>
               
                <p className="w-[12%] text-center">{stablecoin?.nrOfTrx && stablecoin?.nrOfTrx}</p>
                <p className="w-[16%] text-center ">{stablecoin?.energyUsage && stablecoin?.energyUsage}</p>
                <p className="w-[12%] text-center ">{stablecoin?.netUsage && stablecoin?.netUsage}</p>
                <p className="w-[12%] text-center  ">{stablecoin?.blockReward && stablecoin?.blockReward} POX</p>
                <p className="w-[14%] text-center text-dark-green">{stablecoin?.confirmed && stablecoin?.confirmed ? "CONFIRMED" : "UNCONFIRMED"}</p>

             </div>
            </>
          );
        })}
        
        <div className="flex justify-start md:justify-end min-w-[800px] overflow-x-auto">

        <Pagination
        
        totalPages={data?.totalPages}
        onPageChange={handlePageChange}
      />
        </div>
      
      </div>
    </div>
  );
};

export default Blocks;
