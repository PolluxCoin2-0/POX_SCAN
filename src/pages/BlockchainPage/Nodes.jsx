// import React from 'react'
import { SearchBarExpand } from '../../components'

const Nodes = () => {
  return (
    <div className="bg-light-sky-blue">
      {/* Search Box */}

      <div>
      <SearchBarExpand/>
      </div>
      
      
      {/* Nodes */}
      <div>
        <p className="text-2xl font-bold pl-12">Nodes</p>
        <div className="flex flex-row justify-start gap-20 m-12 ">
          <div className="bg-white rounded-xl px-24 py-8 shadow-lg">
            <p className="text-3xl font-bold">89</p>
            <p className="text-light-gray">Nodes</p>
          </div>
          <div className="bg-white rounded-xl px-16 py-8 shadow-lg">
            <p className="text-3xl font-bold">79</p>
            <p className="text-light-gray"> Countries/Regions</p>
          </div>
        </div>
      </div>

      {/* Nodes Distribution >> Map */}
      <div>
        <p className="text-2xl font-bold pl-12">Nodes Distribution</p>
        {/* Map Integration */}
        <div className="bg-white px-80 py-64 shadow-lg m-12 rounded-xl">
        
        </div>
      </div>

      {/* Nodes Ranking  */}
      <div>
        <p className="text-2xl font-bold pl-12">Nodes Ranking</p>
        <p className="text-lg text-light-gray pl-12 pt-2">Ranked By Country And Region</p>
        {/* Chart Integration */}
        <div className="bg-white px-80 py-64 shadow-lg m-12 rounded-xl">
        
        </div>
      </div>
    </div>
  )
}

export default Nodes