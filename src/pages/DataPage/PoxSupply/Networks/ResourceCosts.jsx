


import { SearchBarExpand } from "../../../../components"
import AreaChartComp from "../../../../components/AreaChart";

const ResourceCosts = () => {
  return (
    <div className="px-12 pb-12">

      <div>
        <SearchBarExpand/>
      </div>

      <div >
        <p className="text-xl font-bold">Resource Costs</p>
        <div className="flex flex-row justify-between mt-8">
          <div className="bg-white rounded-2xl w-[1300px]  h-[500px]  shadow-xl">
        
          </div>

          <div className="flex flex-col  ml-10">
            <div className="bg-white rounded-2xl shadow-2xl w-[450px] h-[180px] ">
            <p className="text-lg font-bold pt-7 pl-10 pr-8">About</p>
            <p className="pl-10 pt-1 text-light-gray leading-5 text-md">The Resource Costs chart shows the unit<br/> cost for obtaining Energy or Bandwidth<br/>
            on TRON, which is amount of TRX<br/>that need to be staked or burned to get <br/> 1 energy or Bandwidth.</p>
            </div>

            <div className="bg-white rounded-2xl w-[450px] h-[280px] mt-10 shadow-xl">
              <p className="pt-5 pl-10 text-lg font-bold p-2">Highlights</p>
              <p className="pl-10 pt-1 text-light-gray text-md">On average the daily bandwidth <br/> consumption is 1.41b in the last 30 days.<br/> 
              Among the bandwidth consumed <br/>yesterday over 69.26% is from the user <br/> staked TRX or obtained for free</p>
              <p className="pl-10 pt-6 text-lg font-bold">You may be interested in</p>
              <p className="pl-10 pt-1 text-light-gray text-md">Energy Consumption TRX Generated/ Burned</p>
            </div>
          </div>
        </div>
      </div>

      
      <div >
        <p className=" text-xl font-bold mt-10">List</p>
        <div className="bg-white rounded-md  shadow-lg p-10 mt-8">
          <div className="flex flex-row justify-around bg-lightest-gray  pt-2 pb-2 rounded-md text-light-gray">
            <p>Date(UTC)</p>
            <p>Costs</p>
          </div>


          <div className="flex flex-row justify-around ">
            <div className="pt-8">
              
            <p className="pt-8 ">2024-05-11T00.07;8:35.519Z</p>
            <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
            <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
            <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
            <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
            <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
            <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
            <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
            <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
            <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
            <p className="pt-8">2024-05-11T00.07;8:35.519Z</p>
            
            </div>

            <div className="pt-8">
              
            <p className="pt-8">0.21365437442842399</p>
            <p className="pt-8">0.21365437442842399</p>
            <p className="pt-8">0.21365437442842399</p>
            <p className="pt-8">0.21365437442842399</p>
            <p className="pt-8">0.21365437442842399</p>
            <p className="pt-8">0.21365437442842399</p>
            <p className="pt-8">0.21365437442842399</p>
            <p className="pt-8">0.21365437442842399</p>
            <p className="pt-8">0.21365437442842399</p>
            <p className="pt-8">0.21365437442842399</p> 
            <p className="pt-8">0.21365437442842399</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourceCosts;