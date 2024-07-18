import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import SimpleAreaChart from "../../../../components/SimpleAreaChart"
import { getCommulativeTableData, getTransactionTrendTableData } from "../../../../utils/axios/Data";

const Transaction1 = () => {
  const [trenddata, setTrendData] = useState({});
  const [commulativedata, setCommulativeData] = useState({});
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const trenddata = await getTransactionTrendTableData();
        setTrendData(trenddata?.message);
        
        const commulativedata = await getCommulativeTableData();
        setCommulativeData(commulativedata?.message);
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, []);
  return (
    <div className="px-12 pb-96">
      
      <div>
        <SearchBarExpand/> 
      </div>

      <div className="flex flex-row justify-between space-x-4">
        <div>
          <p className="text-2xl font-bold">Total Accounts</p>
          <div className="bg-white rounded-2xl shadow-xl w-[750px] h-[400px] mt-5">
          <div className="w-[700px] h-[370px] pt-8 pl-10">
            <SimpleAreaChart 
            value={trenddata}
            xAxis="_id"
            yAxis="count"
            componentChartColor="#8884d8"/>
            </div>
          
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">Active Accounts</p>
          <div className="bg-white rounded-2xl shadow-xl w-[750px] h-[400px] mt-5">
          <div className="w-[700px] h-[370px] pt-8 pl-10">
            <SimpleAreaChart
            value={commulativedata} 
            xAxis="date"
            yAxis="cumulativeCount"
            componentChartColor="#C23631"
            />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Transaction1
