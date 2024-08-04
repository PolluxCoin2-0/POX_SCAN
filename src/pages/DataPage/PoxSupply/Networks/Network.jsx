import { SearchBarExpand } from "../../../../components";
import BiaxialLineChart from "../../../../components/BiaxialLineChart";
import BarHashChart from "../../../../components/BarHashChart";
import VerticalComposedChart from "../../../../components/VerticalComposedChart";
import CustomPieChart from "../../../../components/CustomPieChart";
import BarChartNo from "../../../../components/BarChartNo";
import LineChart from "../../../../components/LineChart";
import AreaChartComp from "../../../../components/AreaChart";
import { getAvgBlockSizeTableData, getBandwidthConsumptionTableData, getEnergyConsumptionTableData, getOnChainSizeTableData, getProtocolRevenueTableData, getSrVoteTableData } from "../../../../utils/axios/Data";
import { useEffect, useState } from "react";
import DistributionGraph from "../../../GovernancePage/DistributionGraph";

const Network = () => {


  const [protocoldata, setProtocolData] = useState({});
  const [energydata, setEnergyData] = useState({});
  const [bandwidthdata, setBandwidthData] = useState({});
  const [blockdata, setBlockData] = useState({});
  const [chaindata, setChainData] = useState({});
  const [votesdata, setVotesData] = useState({})
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const protocoldata = await getProtocolRevenueTableData();
        setProtocolData(protocoldata);

        const energydata = await getEnergyConsumptionTableData();
        setEnergyData(energydata?.message);

        const bandwidthdata = await getBandwidthConsumptionTableData();
        setBandwidthData(bandwidthdata?.message);

        const blockdata = await getAvgBlockSizeTableData();
        setBlockData(blockdata?.message);

        const chaindata = await getOnChainSizeTableData();
        setChainData(chaindata?.message);

        const votesdata = await getSrVoteTableData();
        setVotesData(votesdata?.message);
        
        
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, []);
  return (
    <div className="px-12 pb-12">
       
      <div>
        <SearchBarExpand />
      </div>

      <div className="flex flex-row w-full space-x-10">
        <div className="w-[50%]">
          <p className="text-2xl font-bold">Protocol Revenue</p>
          <div className="bg-white rounded-2xl shadow-xl h-[400px] mt-5">
          
            <div className="w-[700px] h-[300px] pl-16 pt-10">
            <AreaChartComp 
            value={protocoldata?.tvlGraph}  
            xDataKey="date"
            yDataKey="count"
            componentChartColor="#C23631"/>
            </div>
            
          
          </div>
        </div>

        <div className="w-[50%]">
          <p className="text-2xl font-bold">Energy Consumption</p>
          <div className="bg-white rounded-2xl shadow-xl h-[400px] mt-5 ">
          <div className="w-[700px] pl-16 pb-10 pt-14">
          <BarHashChart  
            value={energydata}
            xAxis="_id"
            yAxis="energy"/>
          </div>
          </div>
        </div>
      </div>


      
      <div className="flex flex-row w-full space-x-10 mt-10">
        <div className="w-[50%]">
          <p className="text-2xl font-bold">Bandwidth Consumption</p>
          <div className="bg-white rounded-2xl shadow-xl  h-[400px] mt-5">
          <div className=" p-10 h-[400px] w-[700px] ">
            <VerticalComposedChart 
            value={bandwidthdata}
            xAxis="_id"
            yAxis="bandwidth"/>
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <p className="text-2xl font-bold">Resource Cost</p>
          <div className="bg-white rounded-2xl shadow-xl  h-[400px] mt-5">
          <div className="w-[700px] h-[300px] ml-16 pt-10">
            < CustomPieChart/>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-row w-full space-x-10 mt-10">
      <div className="w-[50%]">
        <p className="text-2xl font-bold">Average Block Size</p>
        <div className="bg-white rounded-2xl shadow-xl h-[400px] mt-5">

        <div className="w-[700px] h-[350px] pt-16 pl-10">
            <BarChartNo 
            value={blockdata}
             xAxis="date" 
             yAxis="value"/>
            </div>
          
        </div>
      </div>

      <div className="w-[50%]">
        <p className="text-2xl font-bold">On-Chain Data Size</p>
        <div className="bg-white rounded-2xl shadow-xl  h-[400px] mt-5">
        <div className=" w-[900px] p-10 pl-16 ">
          <LineChart 
          value={chaindata} 
          xAxis="date"
          yAxis="value"
          componentChartColor="#3A5AFE"/>
          </div>
        </div>
      </div>
    </div>


    <div className="flex flex-row w-full space-x-10 mt-10">
        <div className="w-[50%]">
          <p className="text-2xl font-bold">Real-Time Block Distribution</p>
          <div className="bg-white rounded-2xl shadow-xl h-[400px] mt-5">

          <div className="pt-10 pb-0 w-[90%] flex items-center">
          <DistributionGraph />
          </div>
          </div>
        </div>

        <div className="w-[50%]">
          <p className="text-2xl font-bold">SR Votes Distribution</p>
          <div className="bg-white rounded-2xl shadow-xl h-[400px] mt-5">
          <div className=" p-10 pl-14 w-[700px] h-[400px]">
            <VerticalComposedChart 
            width="1000"
            value={votesdata?.witnesses} 
            xAxis="url"
            yAxis="voteCount"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Network

