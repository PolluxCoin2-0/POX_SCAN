

import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import SimpleAreaChart from "../../../../components/SimpleAreaChart";
import { getTransactionTrendTableData } from "../../../../utils/axios/Data";

const TransactionTrend = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getTransactionTrendTableData();
        console.log(data);
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
        <p className=" text-xl font-bold pb-7">Transaction Trend</p>
        <div className="flex flex-row justify-between w-full">
          <div className="bg-white rounded-xl w-[70%] h-[450px] shadow-xl">
            <div className="w-[1000px] h-[450px] p-10 ">
            <SimpleAreaChart 
            value={data}
            xAxis="_id"
            yAxis="count"
            componentChartColor="#8884d8"/>
            </div>
           
          </div>

          <div className="flex flex-col ml-7 w-[30%] h-[450px] ">
            <div className="bg-white rounded-xl shadow-xl h-[200px] ">
            <p className="text-lg font-bold pt-4 pl-8 pr-8">About</p>
            <p className="pl-8 pt-2 text-light-gray leading-6 text-md">
            The Transaction Trend chart shows the <br/> number of daily transactions on TRON. <br/>This indicator reflects how busy and high- <br/> volume the blockchain service is. </p>
            </div>

            <div className="bg-white rounded-xl mt-5 shadow-xl h-[250px]">
              <p className="pt-7 pl-8 text-lg font-bold p-2">Highlight</p>
              <p className="pl-8  text-light-gray text-md">
          On average, the daily transactions on <br/>TRON are 4.73m in the last 30 days.<br/>
          The number of transactions decreased<br/>by 7.6% in the last 30 days.</p>
              <p className="pl-8 pt-2 text-lg font-bold">You may be interested in</p>
              <p className="pl-8 pt-1 text-light-gray text-md">Contract Calls Cumulative Transactions</p>
            </div>
          </div>
        </div>
      </div>


      <div >
        <p className=" text-2xl font-bold mt-14 mb-8">List</p>
        <div className="bg-white rounded-2xl  shadow-lg p-10">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%] text-center">Date(UTC)</p>
            <p className="w-[50%] text-center">Transaction Trend</p>
          </div>
          
          {data?.map && data?.slice(0, 10).map((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%] text-center">{param?._id}</p>
               <p className="w-[50%] text-center">{param?.count}</p>
               
           </div>
          </>
        )
       })}

          
        </div>
      </div>
    </div>
  )
}

export default TransactionTrend;