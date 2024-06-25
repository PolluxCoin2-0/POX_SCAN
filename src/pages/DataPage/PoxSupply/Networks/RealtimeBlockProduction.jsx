


import { SearchBarExpand } from "../../../../components"
import PieChartComp from "../../../../components/PieChartComp";

const RealtimeBlockProduction = () => {
  return (
    <div className="bg-light-sky-blue">

      <div>
        <SearchBarExpand/>
      </div>

      <div >
        <p className="m-12 text-2xl font-bold">Real-Time Block Production</p>
        <div className="flex flex-row justify-between">
          <div className="bg-white rounded-2xl w-[1300px]  h-[500px] ml-12 shadow-xl">
            <div className="h-80 pt-20">
            <PieChartComp />
            </div>
            
          </div>

          <div className="flex flex-col mr-12 ">
            <div className="bg-white rounded-2xl shadow-2xl w-[450px] h-[180px] ">
            <p className="text-lg font-bold pt-7 pl-10 pr-8">About</p>
            <p className="pl-10 pt-1 text-light-gray leading-5 text-md">The real-time block production chart<br/>shows the block distribution of Super 
            <br/> Super Representatives (SRs), who are obliged to <br/> to verify transaction and produces block. <br/>
            SRs are elected every 6 hours.</p>
            </div>

            <div className="bg-white rounded-2xl w-[450px] h-[280px] mt-10 shadow-xl">
              <p className="pt-5 pl-10 text-lg font-bold p-2">Highlights</p>
              <p className="pl-10 pt-1 text-light-gray text-lg">In this round 27 SRs have <br/>
              produced 6858 blocks with 1 SR(s)<br/> missing 1 block(s) until now.</p>
              <p className="pl-10 pt-8 text-lg font-bold">You may be interested in</p>
              <p className="pl-10 pt-1 text-light-gray text-lg">SR Votes Distribution Vote</p>
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

export default RealtimeBlockProduction;