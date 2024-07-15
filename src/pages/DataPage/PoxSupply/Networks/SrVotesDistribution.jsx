


import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components";
import VerticalComposedChart from "../../../../components/VerticalComposedChart";
import { getSrVoteTableData } from "../../../../utils/axios/Data";
import {extractSiteName} from "../../../../utils/extractSiteName";
const SrVotesDistribution = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getSrVoteTableData();
        
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
        <p className=" text-2xl font-bold">SR Votes Distribution</p>
        <div className="flex flex-row justify-between mt-8">
          <div className="bg-white rounded-2xl w-[1300px]  h-[500px] mr-10 shadow-xl">
            <div className="h-[500px] p-8">
            <VerticalComposedChart value={data?.witnesses} xAxis="voteCount" yAxis="url"/>
            </div>
            
          </div>

          <div className="flex flex-col ">
            <div className="bg-white rounded-2xl shadow-2xl w-[450px] h-[180px] ">
            <p className="text-lg font-bold pt-7 pl-10 pr-8">About</p>
            <p className="pl-10 pt-1 text-light-gray leading-5 text-md">The SR Vote Distribution chart shows<br/>distribution votes on SRs in the latest
            <br/> round.</p>
            </div>

            <div className="bg-white rounded-2xl w-[450px] h-[280px] mt-10 shadow-xl">
              <p className="pt-4 pl-10 text-lg font-bold p-2">Highlights</p>
              <p className="pl-10 pt-1 text-light-gray text-sm">Untill now the top 3 SRs in this round and <br/>their votes share are:<br/> 
               Binance Staking(9.75%) <br/> Crypto Labs(3.87%) <br/> Luganodes(3.79%) <br/> Untill now, the top 27 SRs in this round are
               <br/> the same as that in the last round.</p>
              <p className="pl-10 pt-4 text-lg font-bold">You may be interested in</p>
              <p className="pl-10 pt-1 text-light-gray text-sm">Real-time Block Distribution Vote</p>
            </div>
          </div>
        </div>
      </div>

      
      <div >
        <p className=" text-xl font-bold mt-10">List</p>
        <div className="bg-white rounded-md shadow-lg p-10 mt-8">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%] text-center">Date(UTC)</p>
            <p className="w-[50%] text-center">Block</p>
          </div>
          
          {data?.witnesses?.map && data?.witnesses?.map((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%] text-center">{param?.url && extractSiteName(param?.url)}</p>
               <p className="w-[50%] text-center">{param?.voteCount}</p>
               
           </div>
          </>
        )
       })}

        
        </div>
      </div>
    </div>
  )
}

export default SrVotesDistribution;