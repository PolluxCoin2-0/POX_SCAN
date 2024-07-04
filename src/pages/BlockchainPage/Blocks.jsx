import { useEffect, useState } from "react";
import SearchBarExpand from "../../components/SearchBarExpand";
import { MdKeyboardArrowRight } from "react-icons/md";
import Pagination from "../../components/Pagination";
import { getBlockData,  getBlockTableData } from "../../utils/axios/Blockchain";
import { secondsAgo } from "../../utils/secondAgo";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";

const Blocks = () => {
   
  const [data, setData] = useState({});
  const [data1, setData1] =useState({});

  useEffect(()=>{
    const fetchData=async()=>{
    try {
      const data = await  getBlockTableData();
      const data1 = await getBlockData();
      

      setData(data?.message);
      setData1(data1);

      }
      catch (error) {
        console.log(error);
      }
    } 
    fetchData();
  },[])


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
      <p className="font-bold text-2xl pb-8">Blocks</p>
      <div className=" flex flex-col space-y-6 md:space-y-0 md:flex-row justify-around ">
        <div className="w-full md:w-[32%]  bg-white shadow-lg rounded-2xl p-5 ">
          <div className="pt-1">
            <p className="font-bold">Number of Blocks</p>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1 ">
            <div>
              <p className="text-dark-red font-bold text-xl">{formatNumberWithCommas(Number(data1?.totalBlocks ?? 0))}</p>
              <p className="pt-4 text-sm text-light-gray">Latest</p>
            </div>
            
            <div>
              <p className="text-xl font-bold">+{formatNumberWithCommas(Number(data1?.totalBlocks24H ))}</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">
                Yesterday
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[32%]  rounded-2xl p-5 bg-white shadow-md ">
          <div className=" flex flex-row pt-1 justify-between">
            <p className="font-bold">Block Rewards</p>
            <div className="flex flex-row">
              <p>More</p>
              <MdKeyboardArrowRight className="mt-1 text-xl" />
            </div>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1">
            <div>
              <p className="text-xl font-bold">{formatNumberWithCommas(Number(data1?.totalBlockReward ?? 0).toFixed(1))} POX</p>
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

        <div className="w-full md:w-[32%] rounded-2xl p-5 bg-white shadow-md ">
          <div className=" flex flex-row justify-between pt-1">
            <p className="font-bold">Stats on Burned POX</p>
            <div className="flex flex-row">
              <p>More</p>
              <MdKeyboardArrowRight className="mt-1 text-xl" />
            </div>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1">
            <div>
              <p className="text-xl font-bold">{formatNumberWithCommas(Number(data1?.burnedPOX ?? 0).toFixed(3))} POX</p>
              <p className=" text-xs">=$1,363,166,000.31</p>
              <p className="pt-4 text-sm text-light-gray flex ">Total</p>
            </div>

            <div>
              <p className="text-xl font-bold">{data1?.burnedPOX24H && data1?.burnedPOX24H.toFixed(3)} TRX</p>
              <p className="text-xs flex justify-end">=$1,363,912.13</p>
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
 
        <div className="flex flex-row justify-around p-2 pb-3 bg-lightest-gray rounded-lg min-w-[1500px] md:min-w-full">
          <p className=" w-[12%]  font-bold">Block</p>
          <p className=" w-[12%] font-bold">Age</p>
          <p className=" w-[12%] font-bold">Producer</p>
          <p className=" w-[12%] font-bold whitespace-nowrap">Pox Count</p>
          <p className=" w-[16%] font-bold whitespace-nowrap">
            Consumed Energy/Bandwidth
          </p>
          <p className=" w-[8%] font-bold whitespace-nowrap">Burned POX</p>
          <p className=" w-[12%] font-bold whitespace-nowrap">Block Reward</p>
          <p className=" w-[12%] font-bold whitespace-nowrap">Status</p>
        </div>

        {data?.apiResult && data?.apiResult.map((stablecoin, index) => {
          return (
            <>
              <div className="flex flex-row justify-around border-b-2 p-3 border-text-bg-gray min-w-[1500px] md:min-w-full">
                <p className="text-dark-red  w-[12%]">{stablecoin.Block}</p>
                <p className=" w-[12%]">{stablecoin.Age}</p>
                <p className="text-dark-red  w-[12%]">{stablecoin.Producer}</p>
                <p className=" w-[12%]">{stablecoin.PoxCount}</p>
                <p className=" w-[16%]">{stablecoin.ConsumedEnergy}</p>
                <p className=" w-[8%]">{stablecoin.BurnedPOX}</p>
                <p className=" w-[12%]">{stablecoin.BlockReward}</p>
                <p className=" w-[12%]">{stablecoin.Status}</p>
              </div>
            </>
          );
        })}
        
        <div className="flex justify-start md:justify-end min-w-[800px] overflow-x-auto">

        <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
        </div>
      
      </div>
    </div>
  );
};

export default Blocks;
