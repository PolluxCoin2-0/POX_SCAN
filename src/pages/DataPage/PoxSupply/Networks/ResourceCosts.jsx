


import { SearchBarExpand } from "../../../../components"

const ResourceCosts = () => {
  return (
    <div className="bg-light-sky-blue">

      <div>
        <SearchBarExpand/>
      </div>

      <div >
        <p className="m-12 text-xl font-bold">Resource Costs</p>
        <div className="flex flex-row justify-between">
          <div className="bg-white rounded-2xl w-[1300px]  h-[500px] ml-12 shadow-xl">
            
          </div>

          <div className="flex flex-col mr-12 ">
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
        <p className="m-12 text-xl font-bold">List</p>
        <div className="bg-white rounded-md m-12 shadow-lg p-10">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p>Date(UTC)</p>
            <p>Pox Price</p>
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