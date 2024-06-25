


import { SearchBarExpand } from "../../../../components"

const OnchainDataSize = () => {
  return (
    <div className="bg-light-sky-blue">

      <div>
        <SearchBarExpand/>
      </div>

      <div >
        <p className="m-12 text-xl font-bold">On-Chain Data Size</p>
        <div className="flex flex-row justify-between">
          <div className="bg-white rounded-2xl w-[1300px]  h-[500px] ml-12 shadow-xl">
            
          </div>

          <div className="flex flex-col mr-12 ">
            <div className="bg-white rounded-2xl shadow-2xl w-[450px] h-[180px] ">
            <p className="text-lg font-bold pt-7 pl-10 pr-8">About</p>
            <p className="pl-10 pt-1 text-light-gray leading-5 text-md">The On-Chain data size chart shows the <br/>total size of data on TRON, in bytes. A<br/>
            higher on-chain data size requires a <br/> a higher node storgae volume.</p>
            </div>

            <div className="bg-white rounded-2xl w-[450px] h-[280px] mt-10 shadow-xl">
              <p className="pt-8 pl-10 text-lg font-bold p-2">Highlights</p>
              <p className="pl-10 pt-1 text-light-gray text-md">The current data size is 1.90t bytes.</p>
              <p className="pl-10 pt-14 text-lg font-bold">You may be interested in</p>
              <p className="pl-10 pt-1 text-light-gray text-md">Average Block Size</p>
            </div>
          </div>
        </div>
      </div>

      
      <div >
        <p className="m-12 text-xl font-bold">List</p>
        <div className="bg-white rounded-md m-12 shadow-lg p-10">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p>Date(UTC)</p>
            <p>Chain</p>
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
              
            <p className="pt-8">100</p>
            <p className="pt-8">100</p>
            <p className="pt-8">100</p>
            <p className="pt-8">100</p>
            <p className="pt-8">100</p>
            <p className="pt-8">100</p>
            <p className="pt-8">100</p>
            <p className="pt-8">100</p>
            <p className="pt-8">100</p>
            <p className="pt-8">100</p> 
            <p className="pt-8">100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnchainDataSize;