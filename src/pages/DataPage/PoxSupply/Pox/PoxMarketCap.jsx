import { SearchBarExpand } from "../../../../components"
import VerticalComposedChart from "../../../../components/VerticalComposedChart";
const PoxMarketCap = () => {
  return (
    <div className="bg-light-sky-blue px-12 pb-12">

      <div>
        <SearchBarExpand />
      </div>

      <div className=" text-xl font-bold">
        <p>POX Supply</p>
        <div className="bg-white rounded-md mt-5 px-12 py-6 mb-12 shadow-lg">
        <div className="pt-5 pl-14 pr-20  h-[550px]">
            <VerticalComposedChart  width="1000"/>
            </div>
        </div>
      </div>

      <div >
        <p className=" text-2xl mb-10 font-bold">List</p>
        <div className="bg-white rounded-md  shadow-lg p-10">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p>Date(UTC)</p>
            <p>Pox Price</p>
          </div>


          <div className="flex flex-row justify-around  border-b-2 border-b-lightest-gray">
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

export default PoxMarketCap;