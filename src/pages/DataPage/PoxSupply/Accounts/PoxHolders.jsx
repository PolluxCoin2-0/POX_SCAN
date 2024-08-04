

import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import BarChartNo from "../../../../components/BarChartNo";
import { getPoxHolderTableData } from "../../../../utils/axios/Data";

const PoxHolders = () => {


  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getPoxHolderTableData();
        
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
        <p className=" text-xl font-bold pb-7">Pox Holders</p>
        <div className="flex flex-row justify-between w-full">
          <div className="bg-white rounded-xl w-[70%] h-[450px] shadow-xl">
            <div className="w-[1000px] h-[450px] p-10">
            <BarChartNo 
            value={data} 
            xAxis="_id" 
            yAxis="count" />
            </div>
            
          </div>

          <div className="flex flex-col ml-7 w-[30%] h-[450px]">
            <div className="bg-white rounded-xl shadow-xl h-[200px]">
            <p className="text-lg font-bold pt-4 pl-8 pr-8">About</p>
            <p className="pl-8 pt-1 text-light-gray leading-6 text-md">
            The New Accounts chart shows the number <br/>of accounts whose first transfer record on <br/>TRON occurs during the specified period, <br/>including wallet accounts and contract <br/>accounts. </p>
            </div>

            <div className="bg-white rounded-xl  mt-5 shadow-xl h-[250px]">
              <p className="pt-7 pl-8 text-lg font-bold p-2">Highlight</p>
              <p className="pl-8  text-light-gray text-md">
              On average, 180k new accounts are <br/> recorded per day on TRON in the past 1 <br/>month</p>
              <p className="pl-8 pt-4 text-lg font-bold">You may be interested in</p>
              <p className="pl-8 pt-2 text-light-gray text-md">Active Accounts Pox Accounts </p>
            </div>
          </div>
        </div>
      </div>


      <div >
        <p className=" text-2xl font-bold mt-14 mb-8">List</p>
        <div className="bg-white rounded-md  shadow-lg p-10">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%] text-center">Date(UTC)</p>
            <p className="w-[50%] text-center">Pox Holders</p>
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

export default PoxHolders;