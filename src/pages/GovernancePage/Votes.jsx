import SearchBar from "./SearchBar";

const Votes = () => {
  return (
    <div className="bg-light-sky-blue">
      <div>
      <SearchBar />
      </div>


      <p>Votes</p>
      <div>
         <div></div>
         <div></div>
      </div>


      <div>
         <div>
           <SearchBar />
         </div>


         <div className="">
            <div className="flex flex-row justify-evenly bg-lightest-gray">
            <p>Name</p>
            <p>Ranking</p>
            <p>Real-time Votes</p>
            <p>Percentage</p>
            <p>Productivity</p>
            <p>Reward Distribution</p>
            <p>APR</p>
            <p>My Votes</p>
            </div>
         
         </div>
      
      </div>
    
    </div>
  )
}

export default Votes