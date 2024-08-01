


import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import { getOnChainSizeTableData } from "../../../../utils/axios/Data";
import LineChart from "../../../../components/LineChart";

const OnchainDataSize = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getOnChainSizeTableData();
        
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
        <p className=" text-xl font-bold">On-Chain Data Size</p>
        <div className="flex flex-row justify-between  mt-8 w-full">
          <div className="bg-white rounded-2xl p-10 shadow-xl w-[70%] h-[450px]">
          <div className=" w-[1200px] h-[400px] pl-5 pt-8 ">
          <LineChart 
          value={data} 
          xAxis="date"
          yAxis="value"
          componentChartColor="#3A5AFE"/>
          </div>
          </div>

          <div className="flex flex-col ml-7 w-[30%] h-[450px]">
            <div className="bg-white rounded-xl shadow-xl h-[200px] ">
            <p className="text-lg font-bold pt-7 pl-10 pr-8">About</p>
            <p className="pl-10 pt-1 text-light-gray leading-5 text-md">The On-Chain data size chart shows the <br/>total size of data on TRON, in bytes. A<br/>
            higher on-chain data size requires a <br/> a higher node storgae volume.</p>
            </div>

            <div className="bg-white rounded-xl  mt-5 shadow-xl h-[250px]">
              <p className="pt-8 pl-10 text-lg font-bold p-2">Highlights</p>
              <p className="pl-10 pt-1 text-light-gray text-md">The current data size is 1.90t bytes.</p>
              <p className="pl-10 pt-14 text-lg font-bold">You may be interested in</p>
              <p className="pl-10 pt-1 text-light-gray text-md">Average Block Size</p>
            </div>
          </div>
        </div>
      </div>

      
      <div >
        <p className="text-xl font-bold mt-10">List</p>
        <div className="bg-white rounded-2xl  shadow-lg p-10 mt-8">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%] text-center">Date(UTC)</p>
            <p className="w-[50%] text-center">Chain</p>
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

export default OnchainDataSize;