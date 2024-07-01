import { SearchBarExpand } from "../../../components";

const CardForContracts2 = ({title,}) => {
  return (
      <>
      <p className="text-2xl font-bold pb-8 pt-8">{title}</p>
      <div className="bg-white rounded-xl pt-6 pl-10 pr-10 pb-10">
        <div className="flex flex-row justify-around bg-lightest-gray p-2 rounded-lg">
          <p className="text-light-gray">Rank</p>
          <p className="text-light-gray">Account</p>
          <p className="text-light-gray">Total Count</p>
          
        </div>

        {Array(10).fill(null).map(()=>{
          return (
            <>
              <div className="flex flex-row justify-around pt-3 pb-3 border-b-[1px] border-b-text-bg-gray">
          <p>1</p>
          <p>PWfT7g5SBm...gKv18bAeFt</p>
          <p>13,306</p>
          
        </div>
            </>
          )
        })}
      
      </div>
    </>
  )
}

const Contracts2= () => {
  return (
    <div className="px-12 pb-80">

      <div>
        <SearchBarExpand />
      </div>

      <div className="flex felx-row justify-between w-full">
        <div className="w-[49%]">
          <CardForContracts2 
          title="Top Contacts by Calls"/>
        </div>

        <div className="w-[49%] ">
          <CardForContracts2
          title="Top Contracts by Calling Accounts"/>
        </div>
      </div>



    </div>
  )
}

export default Contracts2;