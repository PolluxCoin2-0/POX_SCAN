import SearchBarExpand from "../../components/SearchBarExpand";
 import { useState } from "react";
import  {RespresentativeData} from "../../data/Resprentative";
import CustomPieChart from "../../components/CustomPieChart";
import TinyChartComp from "../../components/TinyChartComp";
// import DistributionChartComp from "../../components/DistributionChart";
// import BarChartComp from "../../components/Barchart"

const CardSuperRepresentative=()=>{
  return (
    <>
      <div className="pb-3 flex flex-row">

        <div>
        <p className="text-lg font-bold">Votes</p>
        <p className="text-light-gray ">Total(Real-time)</p>
        <p className="text-xl font-bold pt-3">12255201</p>
        <p className="pt-3 text-light-gray">Next Round: <span className="text-dark-green font-bold">1223.89%</span></p>
        </div>
       

        <div className="w-[60%] pr-8">
        <TinyChartComp />
        </div>
      </div>
    </>
  )
}

const SuperRepresentatives = () => {
  const [onSearch, setOnSearch] = useState("");
  return (
    <div className="px-12 pb-10">
      <div>
        <SearchBarExpand onSearch={setOnSearch}/>
      </div>

      <p className=" text-2xl font-bold">Super Representatives</p>
      <div className=" flex flex-row justify-evenly w-full space-x-10">
        <div className="bg-white w-[50%] h-96 mt-10 rounded-xl">
          <p className="text-xl font-bold pt-10 pl-10">Real-time Block Distribution</p>
          <CustomPieChart />
        </div>

        <div className="  flex flex-row mt-10  w-[50%]">
          <div className="w-full mr-3">
          <div className="bg-white  mb-3 rounded-tl-2xl pl-10 pt-5">
            <CardSuperRepresentative/>
          
          </div>
          <div className="bg-white rounded-bl-2xl  pl-10 pt-5">
          <CardSuperRepresentative/>
          </div>
          </div>
         
          <div className="w-full">
            <div className="bg-white  mb-3 rounded-tr-2xl pl-10 pt-5">
            <CardSuperRepresentative/>
            </div>
            <div className="bg-white rounded-br-2xl pl-10 pt-5">
            <CardSuperRepresentative/>
            </div>
          </div>
        </div>

      </div>



      <p className="text-lg font-bold  pt-10 leading-10">On The POLLUX Network,  All POX Holders Can Apply To Be SR Candidates And Have The Chance To Become SRs OR SR Partner.</p>
      <p className="text-lg font-bold  pt-5 leading-10">Any POX Holder Can Vote For SR Candidates, Among Which The Top 27 Most-Voted Candidates will Become SRs, While
       Have The Chance To Become SRs OR SR Partner </p>
      <p className="text-lg font-bold pt-5 leading-10">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  All POX Holders Can Apply To Be SR Candidates And Have The Chance To Become SRs OR SR Partner.</p>
      <p className="text-lg font-bold pt-5 leading-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

      <div className="bg-white mt-10 rounded-xl ">
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
