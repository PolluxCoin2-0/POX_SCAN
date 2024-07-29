import SearchBarExpand from "../../components/SearchBarExpand";
import { useEffect, useState } from "react";
import CustomPieChart from "../../components/CustomPieChart";
import TinyChartComp from "../../components/TinyChartComp";
import { getPartnersTableData, getSuperTableData } from "../../utils/axios/Governance";
import { extractSiteName } from "../../utils/extractSiteName";
import { Link } from "react-router-dom";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import CountdownTimer from "./CountDownTimer";




const Table1 = ({data}) => {
 
  return (
    <div className="bg-white pt-2  rounded-tl-none rounded-2xl">
    <div className="flex flex-row items-center justify-evenly bg-light-orange p-3 rounded-tl-none rounded-2xl m-4">
      <p className="w-[5%] text-center   font-bold ">Rank</p>
      <p className="w-[10%] text-center  font-bold  ">Name</p>
      <p className="w-[9%] text-center  font-bold ">Current Version</p>
      <p className="w-[6%] text-center  font-bold  ">Status</p>
      <p className="w-[8%] text-center  font-bold  ">Last Block</p>
      <p className="w-[10%] text-center font-bold   ">Block Produced</p>
      <p className="w-[8%] text-center font-bold   ">Block Missed</p>
      <p className="w-[8%] text-center font-bold   ">Productivity</p>
      <p className="w-[8%] text-center  font-bold  ">Current Vote</p>
      <p className="w-[10%] text-center font-bold  ">Vote Weightage</p>
      <p className="w-[10%]  text-center font-bold  ">Reward Distribution</p>
      <p className="w-[8%] text-center  font-bold  ">APR</p>
    </div>
  
    {data?.witnesses && data?.witnesses.map((representative, index) => (
      <div
        key={index}
        className="flex flex-row justify-evenly p-3 border-b-2 border-lightest-gray"
      >
        <p className="w-[5%]  text-center ">{index + 1}</p>
        <Link to={`/producerdetailpage/${representative?.poxaddress}`} className="w-[10%] text-dark-red text-center ">
        <p >{representative?.url && extractSiteName(representative?.url)}</p>
        </Link> 
        
        <p className="w-[9%]  text-center">1</p>
        <p className="w-[6%]  flex justify-center"><IoCheckmarkCircleOutline size={24} color="green" /></p> 
        <p className="w-[8%] text-center">{representative.latestBlockNum && representative?.latestBlockNum ? representative?.latestBlockNum : 0}</p>
        <p className="w-[10%]  text-center">{representative.totalProduced && representative?.totalProduced ? representative?.totalProduced : 0}</p>
        <p className="w-[8%]  text-center">{representative.totalMissed && representative?.totalMissed ? representative?.totalMissed : 0}</p>
        <p className="w-[8%]  text-center">{representative.productivity.toFixed(8)}</p>
        <p className="w-[8%]  text-center">{representative.voteCount}</p>
        <p className="w-[10%]  text-center">{representative.voteWeightage.toFixed(8)}%</p>
        <p className="w-[10%]  text-center">{representative.RewardDistribution}</p>
        <p className="w-[8%]  text-center">{representative.apr}%</p>
      </div>
    ))}
    
  </div>
  
  );
};
 
const CardSuperRepresentative = ({title, leftSubTitle, totalCount, rightSubTitle, totalvalues}) => {
  return (
    <>
      <div className="pb-3 flex flex-row">
        <div>
          <p className="text-lg font-bold">{title}</p>
          <p className="text-light-gray pt-4">{leftSubTitle} </p>
          <p className="text-xl font-bold pt-0">{totalCount}</p>
          <p className="pt-3 text-light-gray flex flex-row gap-1">
            {rightSubTitle}:{" "}
            <span className="text-dark-green font-bold">
             {totalvalues==="timer"?<CountdownTimer/>:totalvalues} 
            </span>
          </p>
        </div>

        <div className="w-[40%] pl-6 pr-0">
          <TinyChartComp />
        </div>
      </div>
    </>
  );
};

const SuperRepresentatives = () => {
  const [onSearch, setOnSearch] = useState("");
  const [isRender, setIsRender] = useState("Super Representative");

  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchDataFunction;
        switch (isRender) {
          case "Super Representative":
            fetchDataFunction = getSuperTableData;
            
            break;
          case "SR Partner":
            fetchDataFunction = getPartnersTableData;
            break;
          case "SR Candidates":
            fetchDataFunction = getSuperTableData; // Adjust as per your API structure
            break;
          default:
            fetchDataFunction = getSuperTableData;
        }

        

        const result = await fetchDataFunction();
      
        setData(result?.message || []);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [isRender]);

  const renderItemComponent = () => {
    switch (isRender) {
      case "Super Representative":
        return <Table1 data={data} />;
      case "SR Partner":
        return <Table1 data={data} />;
      case "SR Candidates":
        return "No Data Found";
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
        <div className="bg-white w-[50%] h-96 mt-10 rounded-2xl shadow-lg">
          <p className="text-xl font-bold pt-10 pl-10">
            Real-time Block Distribution
          </p>
          <CustomPieChart />
        </div>

        <div className="flex flex-row mt-10 w-[50%]">
          <div className="w-full mr-3">
            <div className="bg-white  mb-3 rounded-tl-2xl  shadow-lg pl-5 pt-5">
              <CardSuperRepresentative 
              title="Votes"
              leftSubTitle="Total (Real Time)"
              totalCount={data?.totalVotes}
              rightSubTitle="Next Round"
              totalvalues="timer"/>
            </div>
            <div className="bg-white rounded-bl-2xl shadow-lg pl-5 pt-5">
              <CardSuperRepresentative 
              title="Super Representatives" 
              className="text-nowrap"
              leftSubTitle="Total"
              totalCount={data?.totalSr}
              rightSubTitle="Last 30 days"
              totalvalues={data?.pageNosr}/>
            </div>
          </div>

          <div className="w-full">
            <div className="bg-white  mb-3 rounded-tr-2xl shadow-lg pl-5 pt-5">
              <CardSuperRepresentative 
              title="Blocks Produced"
              leftSubTitle="Max. Sendbox"
              rightSubTitle="Min. inbox"
              totalvalues={""}
              />
            </div>
            <div className="bg-white rounded-br-2xl shadow-lg pl-5 pt-5">
              <CardSuperRepresentative 
              title="Productivity"
              leftSubTitle="Highest Sendbox"
              rightSubTitle="Lowest inbox"
              totalvalues={""}/>
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
        <div className="flex flex-row items-center space-x-12  rounded-xl">
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
