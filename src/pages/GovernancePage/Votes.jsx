import SearchBarExpand from "../../components/SearchBarExpand";
import SearchBar from "../../components/SearchBar";
import VoteAdd from "../../assets/Voteadd.png";
import VoteTotal from "../../assets/Votetotal.png";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { getVotesData, getVotesTableData } from "../../utils/axios/Governance";
import { extractSiteName } from "../../utils/extractSiteName";
import HollowCircleTimer from "./HollowCircleTimer";
import { Link } from "react-router-dom";
import { formatNumberWithCommas } from "../../utils/FormattingNumber";

const Votes = () => {
  const [data, setData] = useState({});
  const [votedata, setVoteData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getVotesTableData();
        const votedata = await getVotesData();
        console.log(votedata);

        setData(data?.message);
        setVoteData(votedata);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  // For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-12 pb-10">
      <div>
        <SearchBarExpand />
      </div>

      <div className="flex flex-row justify-between">
        <p className="text-xl font-bold pb-5">Votes</p>
        <div className="flex flex-row">
          <p className="text-dark-red">View Super Representatives</p>
          <IoIosArrowForward className="text-dark-red" />
        </div>
      </div>

      <div className=" flex flex-row space-x-5 w-full">
        <div className="w-[50%] rounded-xl bg-white shadow-xl flex flex-row justify-around items-center pb-6">
          <div className="pl-0 p-10">
            <div className="flex flex-row space-x-14">
              <div className="">
                <img src={VoteTotal} alt="vote-add" className="" />
              </div>
              <div className="pb-4">
                <p className="text-light-gray">Real-time Votes this round</p>
                <p className="text-lg font-bold">
                  {votedata?.realTimeTotalVotes &&
                    formatNumberWithCommas(votedata?.realTimeTotalVotes)}{" "}
                  <span className="text-sm font-bold text-dark-green">(+)</span>
                </p>
              </div>
            </div>

            <div className="border-b-2 border-text-bg-gray border-dashed w-[100%] "></div>

            <div className="flex flex-row justify-between">
              <div>
                <img src={VoteAdd} alt="vote-add" className="pt-5" />
              </div>
              <div className="pt-4 pl-14">
                <p className="text-light-gray ">Most Votes Gained this round</p>
                <p className="text-lg font-bold ">
                  {votedata?.gettingwitnessFields &&
                    extractSiteName(votedata?.gettingwitnessFields)}
                </p>
              </div>
            </div>
          </div>
          <div>
            <HollowCircleTimer />
          </div>
        </div>

        <div className="w-[50%] rounded-lg bg-white shadow-xl">
          <div className=" ">
            <div className=" flex flex-row justify-start pb-5 space-x-4 border-b-2 pt-5 border-dashed border-b-text-bg-gray mx-10">
              <p className="pt-1 text-md text-light-gray">My Accounts</p>
              <button className="bg-dark-yellow py-1 px-4 rounded-xl text-black cursor-pointer">
                Connect Wallet
              </button>
            </div>

            <div></div>

            <div className="flex flex-row justify-around pt-5">
              <div>
                <p className="text-light-gray">Available POX Balance</p>
                <p className="font-bold text-xl">0 POX</p>
                <p className="text-light-gray py-2 rounded-lg pl-3 mt-6 bg-lightest-gray">
                  Get TRON Power
                </p>
              </div>
              <div className="border-2 border-dashed border-text-bg-gray"></div>
              <div>
                <p className="text-light-gray">Available Votes/ Total Votes</p>
                <p className="font-bold text-xl">0/0</p>
                <p className="text-light-gray py-2 rounded-lg pl-5 mt-6 bg-lightest-gray">
                  Vote
                </p>
              </div>
              <div className="border-2 border-dashed border-text-bg-gray"></div>
              <div>
                <p className="text-light-gray">Claimable POX Rewards</p>
                <p className="font-bold text-xl">0</p>
                <p className="text-light-gray py-2 rounded-lg pl-5 mt-6 bg-lightest-gray">
                  Claim
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*List */}
      <div className="bg-[#FAFAFA] py-10 mt-20 shadow-xl rounded-2xl">
        <div className="flex flex-row justify-between items-center bg-[#FFFFFF] rounded-md shadow-md mx-6 px-4 py-2 mb-6">
          <p className="font-bold">Only the first 39 records are displayed.</p>
          <div className="border-2 border-lightest-gray  rounded-xl">
            <SearchBar />
          </div>

          <button className="bg-lightest-gray px-4 py-1 rounded-md">
            Vote
          </button>
        </div>
        <div className="bg-[#FAFAFA] px-6">
          <div className="flex flex-row justify-around p-4 bg-mid-light-gray rounded-lg">
            <p className="w-[7%] text-center  font-bold ">Sr.No</p>
            <p className="w-[20%] text-center font-bold ">Name</p>
            <p className="w-[10%] text-center font-bold ">Ranking</p>
            <p className="w-[10%] text-center font-bold ">Real-time Votes</p>
            <p className="w-[10%] text-center font-bold ">Percentage</p>
            <p className="w-[10%] text-center font-bold ">Productivity</p>
            <p className="w-[13%] text-center font-bold ">
              Reward Distribution
            </p>
            <p className="w-[10%] text-center font-bold ">APR</p>
            <p className="w-[10%] text-center font-bold ">My Votes</p>
          </div>

          {data?.result &&
            data?.result.map((voter, index) => {
              // Calculate rank dynamically starting from 2
              const rank = index + 2;

              return (
                <div
                  key={index}
                  className="flex flex-row justify-around p-5 border-b-2 border-text-bg-gray"
                >
                  <p className="w-[7%] text-center ">{index + 1}</p>
                  <Link
                    to={`/accountdetails/${voter?.address}`}
                    className="w-[20%] text-center  text-dark-red"
                  >
                    <p>{voter?.url && extractSiteName(voter?.url)}</p>
                  </Link>

                  <p className="w-[10%] text-center  ">{rank}</p>
                  <p className="w-[10%] text-center ">{voter.brokerage}</p>
                  <p className="w-[10%] text-center ">
                    {voter?.votePercentage.toFixed(2)}
                  </p>
                  <p className="w-[10%] text-center ">
                    {voter.productivity.toFixed(2)}
                  </p>
                  <p className="w-[13%] text-center ">{voter?.brokerage}%</p>
                  <p className="w-[10%] text-center ">{voter?.apr}</p>
                  <p className="w-[10%] text-center ">{voter.MyVotes}</p>
                </div>
              );
            })}

          <div className="flex justify-end">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Votes;
