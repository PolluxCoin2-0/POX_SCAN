import { SearchBarExpand } from "../../../../components";
import BiaxialLineChart from "../../../../components/BiaxialLineChart";
import BarHashChart from "../../../../components/BarHashChart";
import BarHashChart1 from "../../../../components/BarHashChart1";
import VerticalComposedChart from "../../../../components/VerticalComposedChart";
import CustomPieChart from "../../../../components/CustomPieChart";

const Pox = () => {
  return (
    <div className="bg-light-sky-blue">
       
      <div>
        <SearchBarExpand />
      </div>

      <div className="flex flex-row justify-between m-12">
        <div>
          <p className="text-2xl font-bold">POX Price</p>
          <div className="bg-white rounded-2xl shadow-xl w-[880px] h-[400px] mt-5">
            <div className="h-96  pt-12 w-[850px]">
            <BiaxialLineChart width="500"/>
            </div>
          
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">POX Supply</p>
          <div className="bg-white rounded-2xl shadow-xl w-[880px] h-[400px] mt-5">
          <div className="h-96 pt-12 w-[850px]">
            <BarHashChart />
            </div>
          </div>
        </div>
      </div>


      
      <div className="flex flex-row justify-between m-12">
        <div>
          <p className="text-2xl font-bold">POX Market Cap</p>
          <div className="bg-white rounded-2xl shadow-xl w-[880px] h-[400px] mt-5">

          <div className="h-96 pl-5 pt-12 w-[850px]">
            <VerticalComposedChart/>
            </div>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">POX Generated / Burned</p>
          <div className="bg-white rounded-2xl shadow-xl w-[880px] h-[400px] mt-5">
          <div className="h-96 pl-5 pt-12 ">
            < CustomPieChart/>
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-row justify-between m-12">
        <div>
          <p className="text-2xl font-bold">POX Staked</p>
          <div className="bg-white rounded-2xl shadow-xl w-[880px] h-[400px] mt-5">
          <div className="h-96 pl-5 pt-12 w-[850px]">
            <BarHashChart1 />
            </div>
          </div>
        </div>

       
      </div>

    </div>
  )
}

export default Pox

