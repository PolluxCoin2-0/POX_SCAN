import { SearchBarExpand } from "../../../../components"
import BarHashChart from "../../../../components/BarHashChart";
const PoxSupply = () => {
  return (
    <div className="">

      <div>
        <SearchBarExpand />
      </div>

      <div className="m-12 text-xl font-bold">
        <p>POX Supply</p>
        <div className="bg-white rounded-md  px-12 py-6 shadow-lg">
        <div className="h-96 pt-14">
            <BarHashChart  width="1000"/>
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

export default PoxSupply;