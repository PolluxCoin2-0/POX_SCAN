import { useState } from "react";
import {TokenData} from "../../data/Token";
import SearchBarExpand from "../../components/SearchBarExpand";
import {FaToggleOn} from "react-icons/fa";


const Accounts = () => {
  const [onSearch, setOnSearch] = useState("");
  

  return (
    <div className="bg-light-sky-blue">
      <div>
        <SearchBarExpand onSearch={setOnSearch} />
        
      </div>
      <p className="font-bold text-2xl m-12">Blocks</p>
      <div className=" flex flex-row justify-around ">
        <div className=" w-[25%]  bg-white shadow-lg rounded-lg p-5 m-12">
          <div className="pt-1">
            <p className="font-bold text-lg">Number of Accounts</p>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1 ">
            <div>
              <p className="font-bold text-xl">...................</p>
              <p className="pt-4 text-sm text-light-gray">Total</p>
            </div>

            <div>
              <p className="text-xl font-bold text-dark-green">+128,792</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">Last 24h</p>
            </div>
          </div>
        </div>

        <div className=" w-[25%]  rounded-lg p-5 bg-white shadow-md m-12">
        <div className="pt-1"> 
          <p className="font-bold text-lg">POX Holders</p>
        </div>
          
          <div className=" w-full flex flex-row justify-between pt-9 pl-1">
            <div>
              <p className="text-xl font-bold">4,51,421</p>
              <p className="pt-4 text-sm text-light-gray">Total holders</p>
            </div>

            <div>
              <p className="text-xl font-bold text-light-brown">55.51%</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">Percentage</p>
            </div>
          </div>
        </div>

      
        <div className="w-[25%] rounded-lg p-5 bg-white shadow-md m-12">
          <div className="pt-1">
            <p className="font-bold">POX Active Accounts</p>
          </div>

          <div className=" w-full flex flex-row justify-between pt-9 pl-1">
            <div>
              <p className="text-xl font-bold">1,65,541</p>
              <p className="pt-4 text-sm text-light-gray flex ">Daily Active Accounts</p>
            </div>

            <div>
              <p className="text-xl font-bold text-dark-red">-5.56%</p>
              <p className="pt-4 text-sm text-light-gray flex justify-end">24h Change</p>
            </div>
          </div>
        </div>

      </div>
      


    
      <div className="bg-white  rounded-xl p-7 m-12 "> 
      
      <div className="flex flex-row justify-start gap-5">
      <p className="pb-5 font-medium text-light-gray">The latest <span className="text-black font-semibold"> 10,000</span> 
      records are shown, sorted by decreasing POX balance by default  </p>
      <p className="text-light-gray text-3xl ">  <FaToggleOn/> </p >
      <p className="text-light-gray">Hide contract address</p>
      <div className="bg-lightest-gray p-1 rounded-md w-5 h-6">?</div>
      </div>
      
      
      

      <div className="flex flex-row justify-around p-2 bg-lightest-gray rounded-lg">
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

export default Accounts;
