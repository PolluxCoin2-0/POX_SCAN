import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../components";
import { getRankingTokenData } from "../../../utils/axios/Data";
import { shortenString } from "../../../utils/shortenString";



const CardForTokens2 = ({title}) => {

  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getRankingTokenData();
        console.log(data);
        setData(data);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, []);


   return (
      <>
      <p className="text-2xl font-bold pb-8 pt-8">{title}</p>
      <div className="bg-white rounded-xl py-8 pl-10 pr-10 pb-10">
        <div className="flex flex-row justify-around bg-lightest-gray p-2 rounded-lg">
          <p className="text-light-gray w-[25%]">Rank</p>
          <p className="text-light-gray w-[50%]">Account</p>
          <p className="text-light-gray w-[25%]">Holder Count</p>
          
        </div>

        {data?.tokenHolders?.map && data?.tokenHolders?.map((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-around p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[15%]">1</p>
               <p className="w-[60%]">{param?._id && shortenString(param?._id,10)}</p>
               <p className="w-[25%]">{param?.holderCount}</p>
               
           </div>
          </>
        )
       })}

      
      </div>
    </>
  )
}



const CardForAccounts1 = ({title}) => {

  const [data1, setData1] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data1 = await getRankingTokenData();
        
        setData1(data1);
        
        
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
          <p className="text-light-gray w-[60%]">Account</p>
          <p className="text-light-gray w-[15%]">Amount</p>
          <p className="text-light-gray w-[15%]">Percentage</p>
        </div>

        {data1?.topTokensbyVol?.map && data1?.topTokensbyVol?.map((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-around p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[10%]">1</p>
               <p className="w-[60%]">{param?._id && shortenString(param?._id, 10)}</p>
               <p className="w-[15%]">{param?. count}</p>
               <p className="w-[15%]">{param?.volume.toFixed(2)}%</p>
               
           </div>
          </>
        )
       })}
      
      </div>
    </>
  )
}

const Tokens2 = () => {
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
          <CardForTokens2
          title="Top Tokens by Holders"/>
        </div>

        <div className="w-[49%] ">
          <CardForTokens2
          title="Top Tokens by Txn Accounts"/>
        </div>
      </div>



      <div className="flex flex-row justify-between w-full">
        <div className="w-[49%]">
          <CardForAccounts1
          title="Top Tokens by Txns"/>
        </div>

        
      </div>
    </div>
  )
}

export default Tokens2;