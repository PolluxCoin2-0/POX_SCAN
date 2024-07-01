// import React from 'react'
import { SearchBarExpand } from "../../components";

const Nodes = () => {
  return (
    <div className="px-12 ">
      {/* Search Box */}

      <div>
        <SearchBarExpand />
      </div>

      {/* Nodes */}
      <div className="pb-14 ">
        <p className="text-2xl font-bold">Nodes</p>
        <div className="flex flex-row justify-start gap-20 pt-6">
          <div className="bg-white rounded-2xl px-24 py-8 shadow-lg">
            <p className="text-3xl font-bold">89</p>
            <p className="text-light-gray">Nodes</p>
          </div>
          <div className="bg-white rounded-2xl px-16 py-8 shadow-lg">
            <p className="text-3xl font-bold">79</p>
            <p className="text-light-gray"> Countries/Regions</p>
          </div>
        </div>
      </div>

      {/* Nodes Distribution >> Map */}
      <div className="pb-14 ">
        <p className="text-2xl font-bold pb-6">Nodes Distribution</p>
        {/* Map Integration */}
        <div className="bg-white px-80 py-64 shadow-lg rounded-2xl "></div>
      </div>

      {/* Nodes Ranking  */}
      <div className="pb-14 ">
        <p className="text-2xl font-bold">Nodes Ranking</p>
        <p className="text-lg text-light-gray pt-2 pb-6">
          Ranked By Country And Region
        </p>
        {/* Chart Integration */}
        <div className="bg-white px-80 py-64 shadow-lg  rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Nodes;
