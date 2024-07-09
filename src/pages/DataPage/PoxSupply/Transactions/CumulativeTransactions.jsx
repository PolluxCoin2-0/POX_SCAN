

import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import SimpleAreaChart from "../../../../components/SimpleAreaChart";
import { getCommulativeTableData } from "../../../../utils/axios/Data";

const CumulativeTransactions = () => {

  const [data, setData] = useState({});
  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getCommulativeTableData();
        
        setData(data?.message);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, []);

  return (
    <div className="px-12 pb-12">

      <div><SearchBarExpand/> </div>

      <div >
        <p className=" text-xl font-bold pb-7">Cummulative Transactions</p>
        <div className="flex flex-row justify-between">
          <div className="bg-white rounded-2xl w-[1300px] p-20 h-[500px]  pt-28 shadow-xl">
            <SimpleAreaChart className="" />
          </div>

          <div className="flex flex-col  ">
            <div className="bg-white rounded-2xl shadow-2xl w-[450px] h-[180px] ">
            <p className="text-lg font-bold pt-4 pl-8 pr-8">About</p>
            <p className="pl-8 pt-4 text-light-gray leading-6 text-md">
            The Cumulative Transactions chart shows <br/>the total number of transactions on TRON <br/>since beginning of its operation.</p>
            </div>

            <div className="bg-white rounded-2xl w-[450px] h-[280px] mt-10 shadow-xl">
              <p className="pt-7 pl-8 text-lg font-bold p-2">Highlight</p>
              <p className="pl-8  text-light-gray text-md">
                 TRON records over 6.80b transactions in total.<br/>
                 The transaction growth in the last 30 days <br/>is mainly driven by the increase in <br/>Smart Contracts Triggered (39%).</p>
              <p className="pl-8 pt-4 text-lg font-bold">You may be interested in</p>
              <p className="pl-8 pt-2 text-light-gray text-md">Transaction Trend On-Chain Data Size</p>
            </div>
          </div>
        </div>
      </div>


      <div >
        <p className=" text-2xl font-bold mt-14 mb-8">List</p>
        <div className="bg-white rounded-2xl  shadow-lg p-10">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%]">Date(UTC)</p>
            <p className="w-[50%]">Pox Price</p>
          </div>
          
          {data?.map && data?.map((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%]">{param?.date}</p>
               <p className="w-[50%]">{param?. cumulativeCount}</p>
               
           </div>
          </>
        )
       })}


         
        </div>
      </div>
    </div>
  )
}

export default CumulativeTransactions;