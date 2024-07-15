import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import SimpleComposedChart from "../../../../components/SimpleComposedChart";
import { getTotalAccountTableData } from "../../../../utils/axios/Data";

const TotalAccounts = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getTotalAccountTableData();
      
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
        <p className=" text-xl font-bold pb-7">Total Accounts</p>
        <div className="flex flex-row justify-between">
          <div className="bg-white rounded-2xl w-[1300px] p-10 h-[500px] mr-10 shadow-xl">
            <SimpleComposedChart />
          </div>

          <div className="flex flex-col  ">
            <div className="bg-white rounded-2xl shadow-2xl w-[450px] h-[180px] ">
            <p className="text-lg font-bold pt-7 pl-8 pr-8">About</p>
            <p className="pl-8 pt-2 text-light-gray leading-6 text-md">
            The Total Accounts chart shows the total <br/>number of accounts that have transfer <br/>records on TRON, including wallet <br/>accounts and contract accounts.
            </p>
            </div>

            <div className="bg-white rounded-2xl w-[450px] h-[280px] mt-10 shadow-xl">
              <p className="pt-7 pl-8 text-lg font-bold p-2">Highlights</p>
              <p className="pl-8 pt-1 text-light-gray text-md">TRON has over 199m accounts in total.</p>
              <p className="pl-8 pt-8 text-lg font-bold">You may be interested in</p>
              <p className="pl-8 pt-2 text-light-gray text-md">Active Accounts / New Accounts</p>
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

          {data?.TotalAccount?.map && data?.TotalAccount?.map((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%] text-center">{param?.date}</p>
               <p className="w-[50%] text-center">{param?.totalaccount}</p>
               
           </div>
          </>
        )
       })}

        
        </div>
      </div>
    </div>
  )
}

export default TotalAccounts;