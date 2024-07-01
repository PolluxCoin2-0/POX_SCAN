


import { SearchBarExpand } from "../../../../components";
import VerticalComposedChart from "../../../../components/VerticalComposedChart";

const SrVotesDistribution = () => {
  return (
    <div className="">

      <div>
        <SearchBarExpand/>
      </div>

      <div >
        <p className="m-12 text-2xl font-bold">SR Votes Distribution</p>
        <div className="flex flex-row justify-between">
          <div className="bg-white rounded-2xl w-[1300px]  h-[500px] ml-12 shadow-xl">
            <div className="h-[500px] p-8">
            <VerticalComposedChart/>
            </div>
            
          </div>

          <div className="flex flex-col mr-12 ">
            <div className="bg-white rounded-2xl shadow-2xl w-[450px] h-[180px] ">
            <p className="text-lg font-bold pt-7 pl-10 pr-8">About</p>
            <p className="pl-10 pt-1 text-light-gray leading-5 text-md">The SR Vote Distribution chart shows<br/>distribution votes on SRs in the latest
            <br/> round.</p>
            </div>

            <div className="bg-white rounded-2xl w-[450px] h-[280px] mt-10 shadow-xl">
              <p className="pt-4 pl-10 text-lg font-bold p-2">Highlights</p>
              <p className="pl-10 pt-1 text-light-gray text-sm">Untill now the top 3 SRs in this round and <br/>their votes share are:<br/> 
               Binance Staking(9.75%) <br/> Crypto Labs(3.87%) <br/> Luganodes(3.79%) <br/> Untill now, the top 27 SRs in this round are
               <br/> the same as that in the last round.</p>
              <p className="pl-10 pt-4 text-lg font-bold">You may be interested in</p>
              <p className="pl-10 pt-1 text-light-gray text-sm">Real-time Block Distribution Vote</p>
            </div>
          </div>
        </div>
      </div>

      
      <div >
        <p className="m-12 text-xl font-bold">List</p>
        <div className="bg-white rounded-md m-12 shadow-lg p-10">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p>Date(UTC)</p>
            <p>Block</p>
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
              
            <p className="pt-8">64230</p>
            <p className="pt-8">64230</p>
            <p className="pt-8">64230</p>
            <p className="pt-8">64230</p>
            <p className="pt-8">64230</p>
            <p className="pt-8">64230</p>
            <p className="pt-8">64230</p>
            <p className="pt-8">64230</p>
            <p className="pt-8">64230</p>
            <p className="pt-8">64230</p> 
            <p className="pt-8">64230</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SrVotesDistribution;