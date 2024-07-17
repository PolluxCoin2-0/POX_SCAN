import { SearchBarExpand } from "../../../../components";
import BiaxialLineChart from "../../../../components/BiaxialLineChart";
import BarHashChart from "../../../../components/BarHashChart";
import VerticalComposedChart from "../../../../components/VerticalComposedChart";
import CustomPieChart from "../../../../components/CustomPieChart";
import BarChartNo from "../../../../components/BarChartNo";
import LineChart from "../../../../components/LineChart";

const Network = () => {
  return (
    <div className="px-12 pb-12">
       
      <div>
        <SearchBarExpand />
      </div>

      <div className="flex flex-row w-full space-x-10">
        <div className="w-[50%]">
          <p className="text-2xl font-bold">Protocol Revenue</p>
          <div className="bg-white rounded-2xl shadow-xl h-[400px] mt-5">
            <div className="w-[600px] h-[300px] ml-16 pt-10">
            <BiaxialLineChart width="500"/>
            </div>
          
          </div>
        </div>

        <div className="w-[50%]">
          <p className="text-2xl font-bold">Energy Consumption</p>
          <div className="bg-white rounded-2xl shadow-xl h-[400px] mt-5 ">
          <div className="w-[600px] h-[300px] ml-16 pt-10">
            <BarHashChart />
            </div>
          </div>
        </div>
      </div>


      
      <div className="flex flex-row w-full space-x-10">
        <div className="w-[50%]">
          <p className="text-2xl font-bold">Bandwidth Consumption</p>
          <div className="bg-white rounded-2xl shadow-xl  h-[400px] mt-5">

          <div className=" w-[600px] h-[300px] ml-16 pt-10">
            <VerticalComposedChart/>
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <p className="text-2xl font-bold">Resource Cost</p>
          <div className="bg-white rounded-2xl shadow-xl  h-[400px] mt-5">
          <div className="w-[600px] h-[300px] ml-16 pt-10">
            < CustomPieChart/>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-row w-full space-x-10 ">
      <div className="w-[50%]">
        <p className="text-2xl font-bold">Average Block Size</p>
        <div className="bg-white rounded-2xl shadow-xl h-[400px] mt-5">

        <div className="w-[600px] h-[300px] ml-16 pt-10">
          <BarChartNo color=""/>
          </div>
        </div>
      </div>

      <div className="w-[50%]">
        <p className="text-2xl font-bold">On-Chain Data Size</p>
        <div className="bg-white rounded-2xl shadow-xl w-[880px] h-[400px] mt-5">
        <div className="w-[600px] h-[300px] ml-16 pt-10 ">
          <LineChart />
          </div>
        </div>
      </div>
    </div>


    <div className="flex flex-row w-full space-x-10">
        <div className="w-[50%]">
          <p className="text-2xl font-bold">Real-Time Block Distribution</p>
          <div className="bg-white rounded-2xl shadow-xl w-[880px] h-[400px] mt-5">

          <div className="h-96 pl-5 pt-12 w-[850px]">
          < CustomPieChart/>
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <p className="text-2xl font-bold">SR Votes Distribution</p>
          <div className="bg-white rounded-2xl shadow-xl w-[880px] h-[400px] mt-5">
          <div className="h-96 pl-5 pt-12 ">
          <VerticalComposedChart/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Network

