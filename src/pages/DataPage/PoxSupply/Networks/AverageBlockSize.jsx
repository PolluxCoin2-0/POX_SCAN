


import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import { getAvgBlockSizeTableData } from "../../../../utils/axios/Data";
import BarChartNo from "../../../../components/BarChartNo";
const AverageBlockSize = () => {


  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getAvgBlockSizeTableData();
        
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
        <p className=" text-xl font-bold">Average Block Size</p>
        <div className="flex flex-row justify-between mt-8 sapce-x-10">
          <div className="bg-white rounded-2xl w-[1300px]  h-[500px]  mr-10 p-10 shadow-xl">
            <BarChartNo value={data} xAxis="date" yAxis="value"/>
          </div>

          <div className="flex flex-col  ">
            <div className="bg-white rounded-2xl shadow-2xl w-[450px] h-[180px] ">
            <p className="text-lg font-bold pt-7 pl-10 pr-8">About</p>
            <p className="pl-10 pt-1 text-light-gray leading-5 text-md">The average Block size chart shows the <br/>average size of blocks on TRON, in bytes.</p>
            </div>

            <div className="bg-white rounded-2xl w-[450px] h-[280px] mt-10 shadow-xl">
              <p className="pt-5 pl-10 text-lg font-bold p-2">Highlights</p>
              <p className="pl-10 pt-1 text-light-gray text-md">The average block size was 44.7k bytes<br/> yesterday.</p>
              <p className="pl-10 pt-8 text-lg font-bold">You may be interested in</p>
              <p className="pl-10 pt-1 text-light-gray text-md">On-chain Data Size</p>
            </div>
          </div>
        </div>
      </div>

      
      <div >
        <p className=" text-xl font-bold mt-10">List</p>
        <div className="bg-white rounded-md  shadow-lg p-10 mt-8">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%] text-center">Date(UTC)</p>
            <p className="w-[50%] text-center">Block</p>
          </div>
         
          {data?.map && data?.map ((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%] text-center">{param?.date}</p>
               <p className="w-[50%] text-center">{param?.value}</p>
               
           </div>
          </>
        )
       })}

        
        </div>
      </div>
    </div>
  )
}

export default AverageBlockSize;