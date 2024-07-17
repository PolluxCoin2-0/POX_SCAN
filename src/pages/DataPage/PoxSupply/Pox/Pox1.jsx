import { SearchBarExpand } from "../../../../components";
import BiaxialLineChart from "../../../../components/BiaxialLineChart";
import BarHashChart from "../../../../components/BarHashChart";
import BarHashChart1 from "../../../../components/BarHashChart1";
import VerticalComposedChart from "../../../../components/VerticalComposedChart";
import CustomPieChart from "../../../../components/CustomPieChart";
import AreaChartComp from "../../../../components/AreaChart";
import { useEffect, useState } from "react";
import { getMarketCapTableData, getPoxGeneratedTableData, getPoxPriceTableData, getPoxStakedTableData, getPoxSupplyTableData } from "../../../../utils/axios/Data";

const Pox = () => {
  const [poxdata, setPoxData] = useState({});
  const [supplydata, setSupplyData] = useState({});
  const [marketdata, setMarketData] = useState({});
  const [generateddata, setGeneratedData] = useState({});
  const [stakeddata, setStakedData] = useState({});
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const poxdata = await getPoxPriceTableData();
         setPoxData(poxdata?.message);

        const supplydata = await getPoxSupplyTableData();
       setSupplyData(supplydata?.message);

       const marketdata = await getMarketCapTableData();
        setMarketData(marketdata?.message);
       
        const generateddatadata = await getPoxGeneratedTableData();
        setGeneratedData(generateddatadata?.message);
        
        const stakeddata = await getPoxStakedTableData();
        setStakedData(stakeddata);

      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, []);
  return (
    <div className="px-12 pb-12 ">
       
      <div>
        <SearchBarExpand />
      </div>

      <div className="w-full flex flex-row space-x-10">
        <div className="w-[50%]">
          <p className="text-2xl font-bold">POX Price</p>
          <div className="bg-white rounded-2xl shadow-xl h-[400px] mt-5">
          <div className="w-[600px] h-[300px] ml-16 pt-10 ">
            <AreaChartComp 
            value={poxdata}  
            xDataKey="date"
            yDataKey="value"
            componentChartColor="#C23631"/>
            </div>
          
          </div>
        </div>

        <div className="w-[50%]">
          <p className="text-2xl font-bold">POX Supply</p>
          <div className="bg-white rounded-2xl shadow-xl h-[400px] mt-5">
          <div className="w-[600px] h-[40%] ml-16 pb-10 pt-14">
          <BarHashChart  
            value={supplydata}
            xAxis="_id"
            yAxis="supply"/>
          </div>
          </div>
        </div>
      </div>


      
      <div className="w-full flex flex-row space-x-10 pt-10">
        <div className="w-[50%]">
          <p className="text-2xl font-bold">POX Market Cap</p>
          <div className="bg-white rounded-2xl shadow-xl  h-[400px] mt-5">

          <div className="pt-10 pl-14 pr-10 h-[350px] w-[700px]">
            <VerticalComposedChart  width="1000"
            value={marketdata}
            xAxis="_id"
            yAxis="marketCap"/>
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <p className="text-2xl font-bold">POX Generated / Burned</p>
          <div className="bg-white rounded-2xl shadow-xl  h-[400px] mt-5">
          
          <div className="pt-10 pl-10 pr-10 h-[300px]">
           <AreaChartComp 
           value={generateddata}
           xDataKey="date"
           yDataKey="value"
           componentChartColor="#493808"/>
           </div>
          </div>
        </div>
      </div>


      <div className="w-full  flex flex-row space-x-10 mt-10">
        <div className="w-[49%]">
          <p className="text-2xl font-bold">POX Staked</p>
          <div className="bg-white rounded-2xl shadow-xl h-[400px] mt-5">
          <div className="h-96 pl-10 pt-12 w-[650px]">
        <BarHashChart1 
        value={stakeddata?.tvlGraph} 
        xAxis="date" 
        yAxis="count"/>
        </div>
          </div>
        </div>

       
      </div>

    </div>
  )
}

export default Pox

