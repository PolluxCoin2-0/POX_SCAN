import React from 'react'
import { SearchBarExpand } from '../../components'

const Nodes = () => {
  return (
    <div>
      {/* Search Box */}
      <SearchBarExpand/>
      
      {/* Nodes */}
      <div>
        <p>Nodes</p>
        <div>
          <div>
            <p>89</p>
            <p>Nodes</p>
          </div>
          <div>
            <p>79</p>
            <p>Countries/Regions</p>
          </div>
        </div>
      </div>

      {/* Nodes Distribution >> Map */}
      <div>
        <p>Nodes Distribution</p>
        {/* Map Integration */}
      </div>

      {/* Nodes Ranking  */}
      <div>
        <p>Nodes Ranking</p>
        <p>Ranked By Country And Region</p>
        {/* Chart Integration */}
      </div>
    </div>
  )
}

export default Nodes