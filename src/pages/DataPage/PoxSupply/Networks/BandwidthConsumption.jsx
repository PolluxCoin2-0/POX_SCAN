import { useEffect, useState } from "react"
import { SearchBarExpand } from "../../../../components"
import { getBandwidthConsumptionTableData } from "../../../../utils/axios/Data";
import VerticalComposedChart from "../../../../components/VerticalComposedChart";

const BandwidthConsumption = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getBandwidthConsumptionTableData();
        
        setData(data?.message);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, []);

  return (
    <div className="px-12 pb-12">

      <div>
        <SearchBarExpand/>
      </div>

      <div >
        <p className=" text-xl font-bold">Bandwidth Consumption</p>
        <div className="flex flex-row mt-8 justify-between w-full">
          <div className="bg-white rounded-2xl w-[70%] h-auto shadow-xl">
          <div className="pt-5 pb-5 pl-20 pr-20  h-[400px] w-[1000px] ">
            <VerticalComposedChart 
            value={data}
            xAxis="_id"
            yAxis="bandwidth"/>
            </div>
          </div>

          <div className="flex flex-col  ml-7 w-[30%] h-auto">
            <div className="bg-white rounded-xl shadow-xl  ">
            <p className="text-lg font-bold pt-5 pl-8 pr-8">About</p>
            <p className="pl-8 pt-1 pb-2 text-light-gray leading-5 text-md">The Bandwidth Consumption chart shows<br/> total bandwidth consumed on TRON per day. <br/>
            The higher the number is, the more<br/>transactions are on the blockchain.</p>
            </div>

            <div className="bg-white rounded-xl  mt-5 shadow-xl">
              <p className="pt-7 pl-8 text-lg font-bold p-2">Highlights</p>
              <p className="pl-8 pt-1 text-light-gray leading-5 text-md">On average the daily bandwidth <br/> consumption is 1.41b in the last 30 days.<br/> 
              Among the bandwidth consumed <br/>yesterday over 69.26% is from the user <br/> staked TRX or obtained for free</p>
              <p className="pl-8 pt-5 text-lg font-bold">You may be interested in</p>
              <p className="pl-8 pt-1 pb-2 text-light-gray text-md">Energy Consumption TRX Generated/ Burned</p>
            </div>
          </div>
        </div>
      </div>

      
      <div >
        <p className=" text-xl mt-10 font-bold">List</p>
        <div className="bg-white rounded-md  mt-8 shadow-lg p-10">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%] text-center">Date(UTC)</p>
            <p className="w-[50%] text-center">Bandwidth Consumption</p>
          </div>

          {data?.map && data?.slice(0, 10).map ((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%] text-center">{param?._id}</p>
               <p className="w-[50%] text-center">{param?.bandwidth}</p>
               
           </div>
          </>
        )
       })}

        
        </div>
      </div>
    </div>
  )
}

export default BandwidthConsumption