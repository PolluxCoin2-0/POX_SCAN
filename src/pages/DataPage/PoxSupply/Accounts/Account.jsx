import { SearchBarExpand } from "../../../../components";
import SimpleComposedChart from "../../../../components/SimpleComposedChart";
import MixBarChart from "../../../../components/MixBarChart";
import SimpleBarChart from "../../../../components/SimpleBarChart";
import BarChartNo from "../../../../components/BarChartNo";
import { useEffect, useState } from "react";
import { getActiveAccountTableData, getNewAccountTableData, getPoxHolderTableData, getTotalAccountTableData } from "../../../../utils/axios/Data";



const Account = () => {

  const [totaldata, setTotalData] = useState({});
  const [activedata, setActiveData] = useState({});
  const [newdata, setNewData] = useState({});
  const [poxdata, setPoxData] = useState({});
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const totaldata = await getTotalAccountTableData();
        setTotalData(totaldata?.message);

        const activedata = await getActiveAccountTableData();
        setActiveData(activedata?.message);
        
        const newdata = await getNewAccountTableData();
        setNewData(newdata?.message);


        const poxdata = await getPoxHolderTableData();
        setPoxData(poxdata?.message);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, []);
  return (
    <div className="px-12 pb-20">
       
      <div>
        <SearchBarExpand />
      </div>

      <div className="flex flex-row justify-between space-x-8">
        <div >
          <p className="text-2xl font-bold ">Total Accounts</p>
          <div className="bg-white rounded-2xl shadow-xl w-[750px] h-[400px] mt-5 ">
          <div className="w-[700px] h-[380px] pt-5 pl-3">
            <SimpleComposedChart
            value={totaldata?.TotalAccount} 
            xAxis="date"
            yAxis="totalaccount"/>
            </div>
          
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">Active Accounts</p>
          <div className="bg-white rounded-2xl shadow-xl w-[750px] h-[400px] mt-5">
          <div className="w-[700px] h-[370px] pt-5 pl-3">
            <MixBarChart 
            value={activedata?.activeAccounts}
            xAxis="_id"
            yAxis="activeaddress"/>
            </div>
          </div>
        </div>
      </div>


      
      <div className="flex flex-row justify-between space-x-8">
        <div>
          <p className="text-2xl font-bold mt-20">New Accounts</p>
          <div className="bg-white rounded-2xl shadow-xl w-[750px] h-[400px] mt-5">

          <div className="w-[700px] h-[360px] pt-12 pl-4">
            <SimpleBarChart 
            value={newdata?.NewAccounts}
            xAxis="_id"
            yAxis="newaddress"/>
            </div>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold mt-20">Pox Holders</p>
          <div className="bg-white rounded-2xl shadow-xl w-[750px] h-[400px] mt-5">
          <div className="w-[700px] h-[360px] pt-12 pl-4">
            <BarChartNo 
            value={poxdata} 
            xAxis="_id" 
            yAxis="count" />
            </div>
          </div>
        </div>
      </div>


   

    </div>
  )
}

export default Account

