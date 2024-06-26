import { useState } from "react";
import {TokenData} from "../../data/Token";
import SearchBarExpand from "../../components/SearchBarExpand";
import {MdKeyboardArrowRight} from "react-icons/md";


const Blocks = () => {
  const [onSearch, setOnSearch] = useState("");
  return (
    <div className="bg-light-sky-blue px-12 pb-12">
      <div>
        <SearchBarExpand onSearch={setOnSearch} />
        
      </div>
      <p className="font-bold text-2xl pb-8">Blocks</p>
      <div className=" flex flex-row justify-around ">
        <div className=" w-[32%]  bg-white shadow-lg rounded-lg p-5 ">
          <div className="pt-1">
            <p className="font-bold">Number of Blocks</p>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1 ">
            <div>
              <p className="text-dark-red font-bold text-xl">60754103</p>
              <p className="pt-4 text-sm text-light-gray">Latest</p>
            </div>

            <div>
              <p className="text-xl font-bold">+28,793</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">Yesterday</p>
            </div>
          </div>
        </div>

        <div className=" w-[32%]  rounded-lg p-5 bg-white shadow-md ">
        <div className=" flex flex-row pt-1 justify-between"> 
          <p className="font-bold">Block Rewards</p>
          <div className="flex flex-row">
          <p>More</p>
          <MdKeyboardArrowRight className="mt-1 text-xl"/>
          </div>
          
        </div>
          
          <div className=" w-full flex flex-row justify-between pt-9 pl-1">
            <div>
              <p className="text-xl font-bold">8.87b POX</p>
              <p className="text-xs flex justify-end ">=$1,078,347,147.3</p>
              <p className="pt-4 text-sm text-light-gray">Total</p>
            </div>

            <div>
              <p className="text-xl font-bold">5067,392 TRX</p>
              <p className="text-xs flex justify-end">=$615,954.9</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">Yesterday</p>
            </div>
          </div>
        </div>

      
        <div className="w-[32%] rounded-lg p-5 bg-white shadow-md ">
          <div className=" flex flex-row justify-between pt-1">
            <p className="font-bold">Stats on Burned POX</p>
            <div className="flex flex-row">
            <p>More</p>
            <MdKeyboardArrowRight className="mt-1 text-xl"/>
            </div>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1">
            <div>
              <p className="text-xl font-bold">11.21b POX</p>
              <p className=" text-xs">=$1,363,166,000.31</p>
              <p className="pt-4 text-sm text-light-gray flex ">Total</p>
            </div>

            <div>
              <p className="text-xl font-bold">11,220,752 TRX</p>
              <p className="text-xs flex justify-end">=$1,363,912.13</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">Yesterday</p>
            </div>
          </div>
        </div>

      </div>
      


      <p className="font-bold text-2xl pb-10  pt-10">StableCoin</p>
      <div className="bg-white  rounded-xl p-7  "> 
      <p className="pb-5 font-medium text-light-gray">Only the first <span className="text-black font-semibold">10,000</span> records are displayed</p>

      <div className="flex flex-row justify-around p-2 pb-10 bg-lightest-gray rounded-lg">
        <p className=" w-[12%]">Block</p>
        <p className=" w-[12%]">Age</p>
        <p className=" w-[12%]">Producer</p>
        <p className=" w-[12%]">Pox Count</p>
        <p className=" w-[16%] whitespace-nowrap">Consumed Energy/Bandwidth</p>
        <p className=" w-[8%]">Burned POX</p>
        <p className=" w-[12%]">Block Reward</p>
        <p className=" w-[12%]">Status</p>
      </div>
     


      {TokenData.map((stablecoin, index) => {
        return (
          <>
            <div className="flex flex-row  justify-around border-b-2 p-3 border-text-bg-gray ">
                <p className="text-dark-red  w-[12%]">{stablecoin.Block}</p>
                <p className=" w-[12%]">{stablecoin.Age}</p>
                <p className="text-dark-red  w-[12%]">{stablecoin.Producer}</p>
                <p className=" w-[12%]">{stablecoin.PoxCount }</p>
                <p className=" w-[16%]">{stablecoin. ConsumedEnergy}</p>
                <p className=" w-[8%]">{stablecoin.BurnedPOX }</p>
                <p className=" w-[12%]">{stablecoin.BlockReward }</p>
                <p className=" w-[12%]">{stablecoin.Status}</p>

            </div>
      </>
        );
        })}
      </div>
      
    </div>
  );
};

export default Blocks;
