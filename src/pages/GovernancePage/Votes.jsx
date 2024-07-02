import SearchBarExpand from "../../components/SearchBarExpand";
import SearchBar from "../../components/SearchBar";
import { VotesData } from "../../data/Votes";
import VoteAdd from "../../assets/Voteadd.png";
import VoteTotal from "../../assets/Votetotal.png";
import Pagination from "../../components/Pagination";
import { useState } from "react";

const Votes = () => {

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


      <p className="text-xl font-bold pb-5">Votes</p>
      <div className=" flex flex-row space-x-5 w-full">
         <div className="w-[50%] rounded-xl bg-white shadow-xl flex flex-row justify-between pb-10 h-64">
          <div className=" pl-20 p-10">
            <div className="flex flex-row justify-between">
              <div>
                <img src={VoteTotal} 
                alt="vote-add" 
                className=""
                />
              </div>
              <div className="pl-14 pb-4">
                <p className="text-light-gray">Real-time Votes this round</p>
                <p className="text-lg font-bold">44,628,534,525 <span className="text-sm font-bold text-dark-green">+1,939,145</span></p>
              </div>
            </div>

              <div className="border-b-2 border-text-bg-gray border-dashed w-[100%]"></div>

              <div className="flex flex-row justify-between">
              <div >
                <img src={VoteAdd} 
                alt="vote-add" 
                className="pt-5"
                />
              </div>
              <div className="pt-4">
                <p className="text-light-gray">Most Votes Gained this round</p>
                <p className="text-lg font-bold">44,628,534,525 <span className="text-sm font-bold text-dark-green">+1,939,145</span></p>
              </div>
            </div>

          </div>
          <div>
            222
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
                <p className="font-bold text-xl">--</p>
                <p className="text-light-gray py-2 rounded-lg pl-3 mt-6 bg-lightest-gray">Get TRON Power</p>
              </div>
              <div className="border-2 border-dashed border-text-bg-gray"></div>
              <div>
                <p className="text-light-gray">Available Votes/ Total Votes</p>
                <p  className="font-bold text-xl">--</p>
                <p className="text-light-gray py-2 rounded-lg pl-5 mt-6 bg-lightest-gray">Vote</p>
              </div>
               <div className="border-2 border-dashed border-text-bg-gray"></div>
              <div>
                <p className="text-light-gray">Claimable POX Rewards</p>
                <p  className="font-bold text-xl">--</p>
                <p className="text-light-gray py-2 rounded-lg pl-5 mt-6 bg-lightest-gray">Claim</p>
              </div>
          </div>

          </div>
      </div>
</div>

{/*List */}
      <div className="bg-[#FAFAFA] py-10 mt-20 shadow-xl rounded-2xl">
        <div className="flex flex-row justify-between items-center bg-[#FFFFFF] mx-6 px-4 py-2 mb-6">
        <div className="border-2 border-lightest-gray rounded-xl">
           <SearchBar/>
         </div>

         <button className="bg-lightest-gray px-4 py-1 rounded-md">Vote</button>
        </div>
         <div className="bg-[#FAFAFA] px-6">
            <div className="flex flex-row justify-evenly p-5 bg-text-bg-gray rounded-lg">
            <p>Name</p>
            <p>Ranking</p>
            <p>Real-time Votes</p>
            <p>Percentage</p>
            <p>Productivity</p>
            <p>Reward Distribution</p>
            <p>APR</p>
            <p>My Votes</p>
            </div>

            
            {VotesData.map ((voter, index) => {
              return (

                <>
                <div className="flex flex-row justify-evenly p-5 border-b-2 border-text-bg-gray">
                  <p>{voter.Name}</p>
                  <p>{voter.Ranking}</p>
                  <p>{voter.RealtimeVotes}</p>
                  <p>{voter.Productivity}</p>
                  <p>{voter.RewardDistribution}</p>
                  <p>{voter.APR}</p>
                  <p>{voter.MyVotes}</p>
                  <p>3</p>
            
            
            </div>
            
            </>
         
              )
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
  )
}

export default Votes;