import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../components";
import { getRankingAccountData } from "../../../utils/axios/Data";
import {shortenString} from "../../../utils/shortenString";

const CardForAccounts1 = ({title, fromAddress }) => {

  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getRankingAccountData();
        
        setData(data?.message);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, []);
  return (
      <>
      <p className="text-2xl font-bold pb-8 pt-8">{title}</p>
      <div className="bg-white rounded-xl pt-6 pl-10 pr-10 pb-10">
        <div className="flex flex-row justify-around bg-lightest-gray p-2 rounded-lg">
          <p className="text-light-gray w-[10%]">Rank</p>
          <p className="text-light-gray w-[40%]">Account</p>
          <p className="text-light-gray w-[25%]">Amount</p>
          <p className="text-light-gray w-[25%]">Percentage</p>
        </div>

        {data?.topAccounts?.map && data?.topAccounts?.map((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-around p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[10%]">1</p>
               <p className="w-[35%]">{param?.fromAddress && shortenString(param?.fromAddress)}</p>
               <p className="w-[30%]">{param?.totalAssetAmount}</p>
               <p className="w-[25%]">{param?.percentage.toFixed(2)}%</p>
               
           </div>
          </>
        )
       })}
      
      </div>
    </>
  )
}

const Accounts = () => {
  return (
    <div className="px-12 pb-12">

      <div>
        <SearchBarExpand />
      </div>
        
        <div className="flex flex-row space-x-8">
          <p className="bg-light-mid-gray px-6 py-1 rounded-lg">1 Day </p>
          <p className="bg-light-mid-gray px-6 py-1 rounded-lg"> 3 Day </p>
          <p className="bg-light-mid-gray px-6 py-1 rounded-lg">7 Day</p>
        </div>
      <div className="flex felx-row justify-between w-full">
        <div className="w-[49%]">
          <CardForAccounts1 
          title="Top Accounts sent by POX Transfer Volume"/>
        </div>

        <div className="w-[49%] ">
          <CardForAccounts1
          title="Top Accounts Received by POX Transfer Volume"
          />
        </div>
      </div>



      <div className="flex flex-row justify-between w-full">
        <div className="w-[49%]">
          <CardForAccounts1 
          title="Top Accounts sent by POX Transfer Countt"/>
        </div>

        <div className="w-[49%]">
           <CardForAccounts1 
           title="Top Accounts Received by POX Transfer Count"/>
        </div>
      </div>
    </div>
  )
}

export default Accounts