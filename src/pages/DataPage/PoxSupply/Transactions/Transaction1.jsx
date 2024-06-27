import { SearchBarExpand } from "../../../../components"
import SimpleAreaChart from "../../../../components/SimpleAreaChart"

const Transaction1 = () => {
  return (
    <div className="bg-light-sky-blue px-12 pb-96">
      
      <div>
        <SearchBarExpand/> 
      </div>

      <div className="flex flex-row justify-between ">
        <div>
          <p className="text-2xl font-bold">Total Accounts</p>
          <div className="bg-white rounded-2xl shadow-xl w-[880px] h-[400px] mt-5">
            <div className="h-96 p-10 pt-12 w-[850px]">
            <SimpleAreaChart color=""/>
            </div>
          
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold">Active Accounts</p>
          <div className="bg-white rounded-2xl shadow-xl w-[880px] h-[400px] mt-5">
          <div className="h-96 p-10 pt-12 w-[850px]">
            <SimpleAreaChart color="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Transaction1