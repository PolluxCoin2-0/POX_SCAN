import SearchBar from "./SearchBar";
import { useState } from "react";
import  {RespresentativeData} from "../../data/Resprentative";
import LineChartComp from "../../components/LineChart";

const SuperRepresentatives = () => {
  const [onSearch, setOnSearch] = useState("");
  return (
    <div className="bg-light-sky-blue">
      <div>
        <SearchBar onSearch={setOnSearch} />
      </div>

      <p>Super Representatives</p>
      <div>
        <div></div>
        <div>
          <div className="w-1/2"><LineChartComp/></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p>Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

      <div className="">
        <div className="flex flex-row justify-evenly p-5 bg-lightest-gray">
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
          <div key={index} className="flex flex-row justify-evenly p-3 border-b-2 border-text-bg-gray">
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
