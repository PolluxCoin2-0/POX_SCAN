// import React from 'react'
import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../components";
import { getBlockchainNodeMapData } from "../../utils/axios/Blockchain";

const Nodes = () => {

  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    const fetchData=async()=>{
      try {
        const NodeMapData = await getBlockchainNodeMapData();
        setMapData(NodeMapData?.message);
        }
        catch (error) {
          console.log(error);
        }
      } 
      fetchData();
    fetchData();
  }, []);

  return (
    <div className="px-4 md:px-12 ">
      {/* Search Box */}
      <div>
        <SearchBarExpand />
      </div>

      {/* Nodes */}
      <div className="pb-14 ">
        <p className="text-2xl font-bold">Nodes</p>
        <div className="flex flex-col md:flex-row justify-start gap-10 md:gap-20 pt-6">
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
        <div className="bg-white px-8 py-64 shadow-lg rounded-2xl overflow-x-auto "></div>
      </div>

      {/* Nodes Ranking  */}
      <div className="pb-14 ">
        <p className="text-2xl font-bold">Nodes Ranking</p>
        <p className="text-lg text-light-gray pt-2 pb-6">
          Ranked By Country And Region
        </p>
        {/* Chart Integration */}
        <div className="bg-white px-8 py-64 shadow-lg  rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Nodes;
