import SearchBar from "./SearchBar";
import { useState } from "react";
import  {RespresentativeData} from "../../data/Resprentative";
import LineChartComp from "../../components/LineChart";
// import DistributionChartComp from "../../components/DistributionChart";
// import BarChartComp from "../../components/Barchart"

const SuperRepresentatives = () => {
  const [onSearch, setOnSearch] = useState("");
  return (
    <div className="bg-light-sky-blue">
      <div>
        <SearchBar onSearch={setOnSearch} />
      </div>

      <p className=" text-2xl font-bold">Super Representatives</p>
      <div className=" flex flex-row justify-evenly">
        <div className="bg-white border-2">
          <p>Real-time Block Distribution</p>
          <LineChartComp />
        </div>

        <div className="bg-white border-2 flex flex-col">
          <div>
          <div className=""><LineChartComp/></div>
          <div></div>
          </div>
         
          <div></div>
          <div></div>
        </div>
      </div>

      <p className="text-md font-bold ml-12 leading-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className="text-md font-bold ml-12 leading-10">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <p className="text-md font-bold ml-12 leading-10">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <p className="text-md font-bold ml-12 leading-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

      <div className="bg-white m-12 rounded-xl ">
        <div className="flex flex-row justify-evenly p-5  rounded-xl">
          <p className="bg-white">Super Representatives</p>
          <p>SR Partner</p>
          <p>SR Candidates</p>
          <p>Only the first 27 records are displayed</p>
        </div>

        <div className="flex flex-row justify-evenly bg-light-orange p-3 rounded-lg m-4">
          <p>Ranks</p>
          <p>Name</p>
          <p>Current Version</p>
          <p>Status</p>
          <p>Last Block</p>
          <p>Block Produced</p>
          <p>Block Missed</p>
          <p>Productivity</p>
          <p>Current Vote</p>
          <p>Reward Distribution</p>
          <p>APR</p>
        </div>

        {RespresentativeData.map((representative, index) => (
          <div key={index} className="flex flex-row justify-evenly p-3 border-b-2 border-lightest-gray ">
            <p>{representative.Rank}</p>
            <p>{representative.Name}</p>
            <p>{representative.CurrentVersion}</p>
            <p>{representative.Status}</p>
            <p>{representative.LastBlock}</p>
            <p>{representative.BlockProduced}</p>
            <p>{representative.BlockMissed}</p>
            <p>{representative.Productivity}</p>
            <p>{representative.CurrentVote}</p>
            <p>{representative.RewardDistribution}</p>
            <p>{representative.Apr}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuperRepresentatives;
