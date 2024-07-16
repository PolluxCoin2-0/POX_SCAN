import { RxCross1 } from "react-icons/rx";

const CommitteeProposalPage = ({value}) => {

  return (
    <div className=" bg-white rounded-lg shadow-lg px-96 py-36 ">
      
      <div className="border-[1px] border-text-bg-gray p-5 rounded-lg">
      <div className="flex flex-row justify-between border-b-[1px] border-lightest-gray pr-2">
      <p className="text-2xl font-bold pb-3 ">Committee Proposals</p>
      <p className="text-light-gray"><RxCross1 size={20}/></p>

    </div>

      <div className="flex flex-row space-x-4 mt-4 border-b-[1px] border-text-bg-gray pb-4">
        <p className="text-xl font-semibold ">#  28  Proposal</p>
        <p className="bg-light-green text-dark-green px-3 rounded-md font-semibold text-sm pt-1">EXECUTED</p>
      </div>

      <div>
        <div className="flex flex-row space-x-40 border-b-[1px] border-text-bg-gray pb-4 pt-4">
            <p className=" font-semibold ">Proposal Content:</p>
            <p className=" text-dark-green font-semibold" >The maintenance time interval</p>
        </div>

        <div className="flex flex-row space-x-40 border-b-[1px] border-text-bg-gray pb-4 pt-4">

            <p className=" font-semibold ">Proposal Address:</p>
            <p className="text-dark-yellow font-semibold">PNLKUWSfXBmynfg8zDHoRZWViQmrJiobaA</p>
        </div>

        <div className="flex flex-row space-x-44 border-b-[1px] border-text-bg-gray pb-4 pt-4">
        <p className=" font-semibold ">Proposal Value:</p>
        <p className="font-semibold">21600000</p>
        </div>

        <div className="flex flex-row space-x-44 border-b-[1px] border-text-bg-gray pb-4 pt-4">
            <p className=" font-semibold ">Expiration Time:</p>
            <p className="font-semibold">87 days ago</p>
        </div>

        <div className="flex flex-row space-x-48 border-b-[1px] border-text-bg-gray pb-4 pt-4">
        <p className=" font-semibold ">Create Time:</p>
        <p className="font-semibold">87 days ago</p>
        </div>

        <div className="flex flex-row space-x-52 border-b-[1px] border-text-bg-gray pb-4 pt-4">
            <p className=" font-semibold ">Approvals:</p>
            <p className="text-dark-yellow font-semibold">HJKDSEYWENFDLFSPOASJWQKHUITADHWEQWEDFGJVKGFGOOOPPPOOOOSDADA</p>
        </div>

        <div className="flex flex-row space-x-60 border-b-[1px] border-text-bg-gray pb-4 pt-4">
        <p className="font-semibold ">State:</p>
        <p className="font-semibold text-dark-green">DISAPPROVED</p>
        </div>

        <div className="flex flex-row space-x-56 border-b-[1px] border-text-bg-gray pb-4 pt-4">
        <p className=" font-semibold ">Upvotes:</p>
        <p className="text-dark-green font-semibold">14</p>
        </div>
      </div>

      </div>
     


    </div>
  )
}

export default CommitteeProposalPage
