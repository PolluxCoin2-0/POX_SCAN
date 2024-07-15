import { SearchBarExpand } from "../../../../components";
import SimpleComposedChart from "../../../../components/SimpleComposedChart";
import MixBarChart from "../../../../components/MixBarChart";
import SimpleBarChart from "../../../../components/SimpleBarChart";
import BarChartNo from "../../../../components/BarChartNo";



const Account = () => {
  return (
    <div className="px-12 pb-20">
       
      <div>
        <SearchBarExpand />
      </div>

      <div className="flex flex-row justify-between space-x-8">
        <div >
          <p className="text-2xl font-bold ">Total Accounts</p>
          <div className="bg-white rounded-2xl shadow-xl w-[750px] h-[400px] mt-5 ">
            <div className="h-96  pt-12 w-[750px]">
            <SimpleComposedChart />
            </div>
          
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">Active Accounts</p>
          <div className="bg-white rounded-2xl shadow-xl w-[750px] h-[400px] mt-5">
          <div className="h-96 pt-12 w-[750px]">
            <MixBarChart />
            </div>
          </div>
        </div>
      </div>


      
      <div className="flex flex-row justify-between space-x-8">
        <div>
          <p className="text-2xl font-bold mt-20">New Accounts</p>
          <div className="bg-white rounded-2xl shadow-xl w-[750px] h-[400px] mt-5">

          <div className="h-96 pl-5 pt-12 w-[750px]">
            <SimpleBarChart/>
            </div>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold mt-20">Pox Holders</p>
          <div className="bg-white rounded-2xl shadow-xl w-[750px] h-[400px] mt-5">
          <div className="h-96 pl-5 pt-12 w-[750px]">
            < BarChartNo/>
            </div>
          </div>
        </div>
      </div>


   

    </div>
  )
}

export default Account

