import { ParameterData } from "../../data/Parameters"

const ParametersProposals = () => {
  return (
    <div className="p-16">

      <div>

        <p className="text-xl font-bold">Parameters & Proposals</p>
        <div className="bg-lightest-brown p-10 mt-10 rounded-xl">
        <p className="font-bold">The committee is made upto of 27 super representative (SRS) who are responible for modifying dynamic parameters such as blocks rewards and transaction fees on the network.</p>
        <p className="text-light-brown pt-5 font-bold">* Each SR, SR partner and SR candidates is entitled to initiate proposals. SRS also have the right to vote for the proposals.</p>
        <p className="text-light-brown pt-5 font-bold">* After the voting end, proposals with votes from atleast 18 SRs will be adopted. The changes will be applied to the network parameter in the next maintenance period.</p>
        </div>
        
      </div>



      <div className=" bg-white rounded-xl my-7 p-10">
        <div className="flex flex-row space-x-8">
          <p>Network Parameter</p>
          <p>Committee  Proposals</p>
        </div>

        <div className="flex flex-row justify-between mt-7 ml-2 mr-2 rounded-xl bg-lightest-gray pt-3 pb-3 pl-5 pr-5">
          <p>Number</p>
          <p className="">Parameter</p>
          <p>Current Value</p>
        </div>

       {ParameterData.map ((parameter, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p>{parameter.Number}</p>
               <p>{parameter.Parameter}</p>
               <p>{parameter.CurrentValue}</p>
           </div>
          </>
        )
       })}
        



      </div>
    </div>
  )
}

export default ParametersProposals