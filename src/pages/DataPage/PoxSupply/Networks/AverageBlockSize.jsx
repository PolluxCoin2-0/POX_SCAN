


import { SearchBarExpand } from "../../../../components"

const AverageBlockSize = () => {
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
            <p className="pl-10 pt-1 text-light-gray leading-5 text-md">The average Block size chart shows the <br/>average size of blocks on TRON, in bytes.</p>
            </div>

            <div className="bg-white rounded-2xl w-[450px] h-[280px] mt-10 shadow-xl">
              <p className="pt-5 pl-10 text-lg font-bold p-2">Highlights</p>
              <p className="pl-10 pt-1 text-light-gray text-md">The average block size was 44.7k bytes<br/> yesterday.</p>
              <p className="pl-10 pt-8 text-lg font-bold">You may be interested in</p>
              <p className="pl-10 pt-1 text-light-gray text-md">On-chain Data Size</p>
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

export default AverageBlockSize;