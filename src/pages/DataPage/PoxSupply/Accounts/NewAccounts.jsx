

import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import SimpleBarChart from "../../../../components/SimpleBarChart";
import { getNewAccountTableData } from "../../../../utils/axios/Data";

const NewAccounts = () => {

   const [data, setData] = useState({});

   useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getNewAccountTableData();
        
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
        <p className=" text-xl font-bold pb-7">New Accounts</p>
        <div className="flex flex-row justify-between">
          <div className="bg-white rounded-2xl w-[1300px] p-20 h-[500px]  pt-28 shadow-xl">
            <SimpleBarChart className="" />
          </div>

          <div className="flex flex-col ml-10 ">
            <div className="bg-white rounded-2xl shadow-2xl w-[450px] h-[180px] ">
            <p className="text-lg font-bold pt-4 pl-8 pr-8">About</p>
            <p className="pl-8 pt-1 text-light-gray leading-6 text-md">
            The New Accounts chart shows the <br/> number of accounts whose first transfer <br/>record on TRON occurs during the <br/>specified period, including wallet <br/>accounts and contract accounts.. </p>
            </div>

            <div className="bg-white rounded-2xl w-[450px] h-[280px] mt-10 shadow-xl">
              <p className="pt-7 pl-8 text-lg font-bold p-2">Highlight</p>
              <p className="pl-8  text-light-gray text-md">
              On average, 180k new accounts are <br/>recorded per day on TRON in the past 1 <br/>month</p>
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
            <p className="w-[50%] text-center">Pox Price</p>
          </div>

          {data?.NewAccounts?.map && data?.NewAccounts?.map((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%] text-center">{param?._id}</p>
               <p className="w-[50%] text-center">{param?.newaddress}</p>
               
           </div>
          </>
        )
       })}

          
        </div>
      </div>
    </div>
  )
}

export default NewAccounts;