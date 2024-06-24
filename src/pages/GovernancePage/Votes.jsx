import SearchBarExpand from "../../components/SearchBarExpand";
import SearchBar from "../../components/SearchBar";
import { VotesData } from "../../data/Votes";

const Votes = () => {
  return (
    <div className="bg-light-sky-blue">
      <div>
      <SearchBarExpand />
      </div>


      <p>Votes</p>
      <div>
         <div></div>
         <div></div>
      </div>


      <div className="">
         <div>
           <SearchBar />
         </div>

        
         
         <div className="bg-white">
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
        
         
         </div>
      
      </div>
    
    </div>
  )
}

export default Votes