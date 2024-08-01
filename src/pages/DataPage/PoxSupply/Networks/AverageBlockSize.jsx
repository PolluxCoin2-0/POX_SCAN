


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
        <div className="flex flex-row justify-between mt-8  w-full">
          <div className="bg-white rounded-2xl  mr-10 p-10 shadow-xl w-[70%] h-[450px] ">
            <div className="w-[1000px] h-[400px] pt-5">
            <BarChartNo value={data} xAxis="date" yAxis="value"/>
            </div>
           
          </div>

          <div className="flex flex-col w-[30%] h-[450px]">
            <div className="bg-white rounded-xl shadow-xl h-[150px]">
            <p className="text-lg font-bold pt-7 pl-10 pr-8">About</p>
            <p className="pl-10 pt-2 pb-5 text-light-gray leading-5 text-md">The average Block size chart shows the <br/>average size of blocks on TRON, in bytes.</p>
            </div>

            <div className="bg-white rounded-xl mt-5 h-[300px]">
              <p className="pt-5 pl-10 text-lg font-bold p-2">Highlights</p>
              <p className="pl-10 pt-1 text-light-gray text-md">The average block size was 44.7k bytes<br/> yesterday.</p>
              <p className="pl-10 pt-8 text-lg font-bold">You may be interested in</p>
              <p className="pl-10 pt-1 pb-5 text-light-gray text-md">On-chain Data Size</p>
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
         
          {data?.map && data?.slice(0, 10).map ((param, index) => {
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