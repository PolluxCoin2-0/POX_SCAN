

import { SearchBarExpand } from "../../../../components"
import SimpleAreaChart from "../../../../components/SimpleAreaChart";

const ContractCalls = () => {
  return (
    <div className="px-12 pb-12">

      <div><SearchBarExpand/> </div>

      <div >
        <p className=" text-xl font-bold pb-7">Contract Call</p>
        <div className="flex flex-row justify-between">
          <div className="bg-white rounded-2xl w-[1300px] p-20 h-[500px]  pt-28 shadow-xl">
            <SimpleAreaChart className="" />
          </div>

          <div className="flex flex-col  ">
            <div className="bg-white rounded-2xl shadow-2xl w-[450px] h-[180px] ">
            <p className="text-lg font-bold pt-4 pl-8 pr-8">About</p>
            <p className="pl-8 pt-1 text-light-gray leading-6 text-md">
            The Contract Calls chart shows the <br/> number of daily contract calls on TRON. </p>
            </div>

            <div className="bg-white rounded-2xl w-[450px] h-[280px] mt-10 shadow-xl">
              <p className="pt-7 pl-8 text-lg font-bold p-2">Highlight</p>
              <p className="pl-8  text-light-gray text-md">
              On average, the daily contract calls on <br/>TRON surpass 1.83m in the last 30 days, <br/>accounting for 38.80% of the total <br/>transactions. total.</p>
              <p className="pl-8 pt-4 text-lg font-bold">You may be interested in</p>
              <p className="pl-8 pt-2 text-light-gray text-md">Top Contracts Transaction Trend</p>
            </div>
          </div>
        </div>
      </div>


      <div >
        <p className=" text-2xl font-bold mt-14 mb-8">List</p>
        <div className="bg-white rounded-2xl  shadow-lg p-10">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p>Address</p>
            <p>Count</p>
          </div>


          <div className="flex flex-row justify-around  border-b-2 border-b-lightest-gray">
            <div className="pt-8">
              
            <p className="pt-8 ">2024-05-11</p>
            <p className="pt-8">2024-05-11</p>
            <p className="pt-8">2024-05-11</p>
            <p className="pt-8">2024-05-11</p>
            <p className="pt-8">2024-05-11</p>
            <p className="pt-8">2024-05-11</p>
            <p className="pt-8">2024-05-11</p>
            <p className="pt-8">2024-05-11</p>
            <p className="pt-8">2024-05-11</p>
            <p className="pt-8">2024-05-11</p>
            <p className="pt-8">2024-05-11</p>
            
            </div>

            <div className="pt-8">
              
            <p className="pt-8">7652</p>
            <p className="pt-8">7652</p>
            <p className="pt-8">7652</p>
            <p className="pt-8">7652</p>
            <p className="pt-8">7652</p>
            <p className="pt-8">7652</p>
            <p className="pt-8">7652</p>
            <p className="pt-8">7652</p>
            <p className="pt-8">7652</p>
            <p className="pt-8">7652</p> 
            <p className="pt-8">7652</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContractCalls;