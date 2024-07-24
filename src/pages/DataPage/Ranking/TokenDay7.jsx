import { useEffect, useState } from "react";
import { getRankingTokenDayOneData, getRankingTokenDaySevenData } from "../../../utils/axios/Data";
import { shortenString } from "../../../utils/shortenString";
import { Link } from "react-router-dom";

const HolderTable= ({title}) => {
    const [data, setData] = useState({});
    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const data = await getRankingTokenDaySevenData();
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
            <p className="text-light-gray  text-center w-[15%]">Rank</p>
            <p className="text-light-gray text-center  w-[60%]">Account</p>
            <p className="text-light-gray  text-center w-[25%]">Holder Count</p>
          </div>
      
          {data?.tokenHolders?.map && data?.tokenHolders?.map((param, index) => {
            // Calculate rank dynamically
            const rank = index + 1;
      
            return (
              <div key={index} className="flex flex-row justify-around p-5 border-b-2 border-b-lightest-gray">
                <p className="w-[15%] text-center pr-5">{rank}</p>
                <Link to={`/accountdetails/${param?._id}`} className="w-[60%] text-dark-red text-center ">
                <p >{param?._id && shortenString(param?._id, 10)}</p>
                </Link>
                
                <p className="w-[25%] text-center ">{param?.holderCount}</p>
              </div>
            );
          })}
        </div>
      </>
      
    )
  }


  const TransactionTable= ({title}) => {  
    const [data, setData] = useState({});
    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const data = await getRankingTokenDaySevenData();
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
            <p className="text-light-gray text-center w-[15%]">Rank</p>
            <p className="text-light-gray text-center w-[60%]">Account</p>
            <p className="text-light-gray text-center w-[25%]">Txn Count</p>
          </div>
      
          {data?.topTokensByTxnAccounts?.map && data?.topTokensByTxnAccounts?.map((param, index) => {
            // Calculate rank dynamically
            const rank = index + 1;
      
            return (
              <div key={index} className="flex flex-row justify-around p-5 border-b-2 border-b-lightest-gray">
                <p className="w-[15%] text-center ">{rank}</p>
                <Link to={`/accountdetails/${param?._id}`} className="w-[60%] text-center text-dark-red">
                <p >{param?._id && shortenString(param?._id, 10)}</p>
                </Link>
               
                <p className="w-[25%] text-center">{param?.txnAccountCount}</p>
              </div>
            );
          })}
        </div>
      </>
      
    )
  }


  const VolumeTable = ({title}) => {

    const [data1, setData1] = useState({});
  
    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const data1 = await getRankingTokenDaySevenData();
          
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
            <p className="text-light-gray  text-center w-[10%]">Rank</p>
            <p className="text-light-gray  text-center w-[60%]">Account</p>
            <p className="text-light-gray  text-center w-[15%]">Count</p>
            <p className="text-light-gray text-center  w-[15%]">Volume</p>
          </div>
      
          {data1?.topTokensbyVol?.map && data1?.topTokensbyVol?.map((param, index) => {
            // Calculate rank dynamically
            const rank = index + 1;
      
            return (
              <div key={index} className="flex flex-row justify-around p-5 border-b-2 border-b-lightest-gray">
                <p className="w-[10%]">{rank}</p>
                <Link to={`/accountdetails/${param?._id}`} className="w-[60%] text-center text-dark-red">
                <p >{param?._id && shortenString(param?._id, 10)}</p>
                </Link>
               
                <p className="w-[15%]">{param?.count}</p>
                <p className="w-[15%]">{param?.volume.toFixed(2)}%</p>
              </div>
            );
          })}
        </div>
      </>
     
    )
  }
const TokenDay7 = ({title}) => {
  return (
    <div>
       <div className="flex felx-row justify-between w-full">
        <div className="w-[49%]">
          <HolderTable
          title="Top Tokens by Holders"/>
        </div>

        <div className="w-[49%] ">
          <TransactionTable
          title="Top Tokens by Txn Accounts"/>
        </div>
      </div>


      <div className="flex flex-row justify-between w-full">
        <div className="w-[49%]">
          <VolumeTable
          title="Top Tokens by Txns"/>
        </div>

        
      </div>



    </div>
  )
}

export default TokenDay7;
