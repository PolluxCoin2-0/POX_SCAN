import { SearchBarExpand } from "../../../../components";
import BiaxialLineChart from "../../../../components/BiaxialLineChart";
import MixBarChart from "../../../../components/MixBarChart";
import SimpleAreaChart from "../../../../components/SimpleAreaChart";


const Contract= () => {
  return (
    <div className="bg-light-sky-blue px-12 pb-80">
       
      <div>
        <SearchBarExpand />
      </div>

      <div className="flex flex-row justify-between ">
        <div>
          <p className="text-2xl font-bold">Contract Calls</p>
          <div className="bg-white rounded-2xl shadow-xl w-[880px] h-[400px] mt-5">
            <div className="h-96  pt-12 w-[850px]">
            <BiaxialLineChart width="500"/>
            </div>
          
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">Top Contracts</p>
          <div className="bg-white rounded-2xl shadow-xl w-[880px] h-[400px] mt-5">
          <div className="h-96 pt-12 w-[850px]">
            <SimpleAreaChart/>
            </div>
          </div>
        </div>
      </div>


      
     
   

    </div>
  )
}

export default Contract;

