import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components";
import BiaxialLineChart from "../../../../components/BiaxialLineChart";
import SimpleAreaChart from "../../../../components/SimpleAreaChart";
import { getTopContractTableData } from "../../../../utils/axios/Data";
import VerticalComposedChart from "../../../../components/VerticalComposedChart";


const Contract= () => {

  const [topdata, setTopData] = useState({});
   useEffect(() => {
    
    const fetchData = async () => {
      try {
        const topdata = await getTopContractTableData();
        setTopData(topdata);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, []);
  return (
    <div className="px-12 pb-80">
       
      <div>
        <SearchBarExpand />
      </div>

      <div className="flex flex-row justify-between space-x-5">
        <div>
          <p className="text-2xl font-bold">Contract Calls</p>
          <div className="bg-white rounded-2xl shadow-xl w-[750px] h-[400px] mt-5">
            <div className="h-96  pt-12 w-[750px]">
            <BiaxialLineChart width="500"/>
            </div>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">Top Contracts</p>
          <div className="bg-white rounded-2xl shadow-xl w-[750px] h-[400px] mt-5">
          <div className="w-[700px] h-[380px] pl-14 pt-8">
          <VerticalComposedChart 
          value={topdata?.calls} 
          yAxis="totalCount" 
          xAxis="contractAddress"/>
            </div>
          </div>
        </div>
      </div>


      
     
   

    </div>
  )
}

export default Contract;

