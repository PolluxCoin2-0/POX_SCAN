import SearchBarExpand from "../../components/SearchBarExpand";
import { useEffect, useState } from "react";
import CustomPieChart from "../../components/CustomPieChart";
import TinyChartComp from "../../components/TinyChartComp";
import { getSuperTableData } from "../../utils/axios/Governance";


const Table1 = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getSuperTableData();

        setData(data?.message);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, [])
  return (
    <div className="bg-white pt-2">
      <div className="flex flex-row justify-evenly bg-light-orange p-3 rounded-lg m-4">
        <p className="w-[8%]">Ranks</p>
        <p className="w-[8%]">Name</p>
        <p className="w-[8%]">Current Version</p>
        <p className="w-[8%]">Status</p>
        <p className="w-[8%]">Last Block</p>
        <p className="w-[8%]">Block Produced</p>
        <p className="w-[8%]">Block Missed</p>
        <p className="w-[8%]">Productivity</p>
        <p className="w-[8%]">Current Vote</p>
        <p className="w-[8%]">Vote Weightage</p>
        <p className="w-[8%]">Reward Distribution</p>
        <p className="w-[8%]">APR</p>
      </div>

      {data?.witnesses && data?.witnesses.map((representative, index) => (
        <div
          key={index}
          className="flex flex-row justify-evenly p-3 border-b-2 border-lightest-gray "
        >
          <p className="w-[8%]">{representative.Rank}</p>
          <p className="w-[8%]">{representative.url}</p>
          <p className="w-[8%]">{representative.CurrentVersion}</p>
          <p className="w-[8%]">{representative.Status}</p> 
          <p className="w-[8%]">{representative.latestBlockNum}</p>
          <p className="w-[8%]">{representative.totalProduced}</p>
          <p className="w-[8%]">{representative.totalMissed}</p>
          <p className="w-[8%]">{representative.productivity.toFixed(8)}</p>
          <p className="w-[8%]">{representative.voteCount}</p>
          <p className="w-[8%]">{representative.voteWeightage.toFixed(8)}%</p>
          <p className="w-[8%]">{representative.RewardDistribution}</p>
          <p className="w-[8%]">{representative.apr}%</p>
        </div>
      ))}
    </div>
  );
};

const CardSuperRepresentative = () => {
  return (
    <>
      <div className="pb-3 flex flex-row">
        <div>
          <p className="text-lg font-bold">Votes</p>
          <p className="text-light-gray ">Total(Real-time)</p>
          <p className="text-xl font-bold pt-3">12255201</p>
          <p className="pt-3 text-light-gray">
            Next Round:{" "}
            <span className="text-dark-green font-bold">1223.89%</span>
          </p>
        </div>

        <div className="w-[60%] pr-8">
          <TinyChartComp />
        </div>
      </div>
    </>
  );
};

const SuperRepresentatives = () => {
  const [onSearch, setOnSearch] = useState("");
  const [isRender, setIsRender] = useState("Super Representative");

  const renderItemComponent = () => {
    switch (isRender) {
      case "Super Representative":
        return <Table1 />;
      case "SR Partner":
        return <Table1 />;
      case "SR Candidates":
        return <Table1 />;
      default:
        return null;
    }
  };

  return (
    <div className="px-12 pb-10">
      <div>
        <SearchBarExpand onSearch={setOnSearch} />
      </div>

      <p className=" text-2xl font-bold">Super Representatives</p>
      <div className=" flex flex-row justify-evenly w-full space-x-10">
        <div className="bg-white w-[50%] h-96 mt-10 rounded-2xl">
          <p className="text-xl font-bold pt-10 pl-10">
            Real-time Block Distribution
          </p>
          <CustomPieChart />
        </div>

        <div className="flex flex-row mt-10 w-[50%]">
          <div className="w-full mr-3">
            <div className="bg-white  mb-3 rounded-tl-2xl pl-10 pt-5">
              <CardSuperRepresentative />
            </div>
            <div className="bg-white rounded-bl-2xl  pl-10 pt-5">
              <CardSuperRepresentative />
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white  mb-3 rounded-tr-2xl pl-10 pt-5">
              <CardSuperRepresentative />
            </div>
            <div className="bg-white rounded-br-2xl pl-10 pt-5">
              <CardSuperRepresentative />
            </div>
          </div>
        </div>
      </div>

      <p className="text-lg font-bold  pt-10 leading-10">
        On The POLLUX Network, All POX Holders Can Apply To Be SR Candidates And
        Have The Chance To Become SRs OR SR Partner.
      </p>
      <p className="text-lg font-bold  pt-5 leading-10">
        Any POX Holder Can Vote For SR Candidates, Among Which The Top 27
        Most-Voted Candidates will Become SRs, While Have The Chance To Become
        SRs OR SR Partner{" "}
      </p>
      <p className="text-lg font-bold pt-5 leading-10">
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. All POX Holders
        Can Apply To Be SR Candidates And Have The Chance To Become SRs OR SR
        Partner.
      </p>
      <p className="text-lg font-bold pt-5 leading-10">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>

      <div className=" mt-10 rounded-2xl ">
        <div className="flex flex-row space-x-12  rounded-xl">
          <p
            className={`cursor-pointer py-3 px-4 ${isRender === "Super Representative" ? "bg-white  rounded-t-2xl" : "text-black"}`}
            onClick={() => setIsRender("Super Representative")}
          > 
            Super Representatives
          </p>
          <p
            className={`cursor-pointer py-3 px-4 ${isRender === "SR Partner" ? "bg-white  rounded-t-2xl" : "text-black"}`}
            onClick={() => setIsRender("SR Partner")}
          >
            SR Partner
          </p>
          <p
            className={`cursor-pointer py-3 px-4 ${isRender === "SR Candidates" ? "bg-white  rounded-t-2xl" : "text-black"}`}
            onClick={() => setIsRender("SR Candidates")}
          >
            SR Candidates
          </p>
          
          <p >Only the first 27 records are displayed</p>
          
          
        </div>

        

        <div>{renderItemComponent()}</div>
      </div>
    </div>
  );
};

export default SuperRepresentatives;
