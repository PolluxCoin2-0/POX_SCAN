import { useEffect, useState } from "react"
import { SearchBarExpand } from "../../../../components"
import { getProtocolRevenueTableData } from "../../../../utils/axios/Data";

const ProtocolRevenue = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getProtocolRevenueTableData();
        
        setData(data);
        
        
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
        <p className="text-xl font-bold">Protocol Revenue</p>
        <div className="flex flex-row mt-8 justify-between">
          <div className="bg-white rounded-2xl w-[1300px]  h-[500px]  shadow-xl">
            
          </div>

          <div className="flex flex-col ml-10">
            <div className="bg-white rounded-2xl shadow-2xl w-[450px] h-[180px] ">
            <p className="text-lg font-bold pt-7 pl-8 pr-8">About</p>
            <p className="pl-8 pt-2 text-light-gray leading-6 text-md">The Protocol Revenue Chart shows the revenue <br/> trend of TRON consisting of users TRX burned to <br/>get resources and pay for <br/>transactions.</p>
            </div>

            <div className="bg-white rounded-2xl w-[450px] h-[280px] mt-10 shadow-xl">
              <p className="pt-7 pl-8 text-lg font-bold p-2">Highlights</p>
              <p className="pl-8 pt-1 text-light-gray text-md">The Protocol revenue of yesterday is <br/>$1.01m <br/> 
              The protocol revenue in the last 365 days is <br/>$405m</p>
              <p className="pl-8 pt-8 text-lg font-bold">You may be interested in</p>
              <p className="pl-8 pt-2 text-light-gray text-md">TRX Generated /Burned Top Contracts</p>
            </div>
          </div>
        </div>
      </div>


      <div >
        <p className="text-xl font-bold mt-10">List</p>
        <div className="bg-white rounded-md mt-8 hadow-lg p-10">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%] text-center">Date(UTC)</p>
            <p className="w-[50%] text-center">Pox Price</p>
          </div>
         
          {data?.tvlGraph && data?.tvlGraph?.map  ((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%] text-center">{param?.date}</p>
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

export default ProtocolRevenue