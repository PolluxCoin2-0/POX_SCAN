import { RxCross1 } from "react-icons/rx";
import { secondsAgo } from "../../utils/secondAgo";

const CommitteeProposalPage = ({ value, isShowModal, handleShowModal }) => {
  return (
    isShowModal && (
      <div className="fixed z-10 backdrop-blur-[1px] bg-dark-brown bg-opacity-30 h-screen w-full inset-0">
        <div className="flex flex-col items-center justify-center rounded-lg h-full ">
          <div className="border-[1px] border-text-bg-gray bg-white p-5 rounded-lg overflow-x-scroll w-[60%]">
            <div className="flex flex-row justify-between border-b-[1px] border-lightest-gray pr-2">
              <p className="text-2xl font-bold pb-3">Committee Proposals</p>
              <p
                className="text-light-gray cursor-pointer"
                onClick={handleShowModal}
              >
                <RxCross1 size={24} />
              </p>
            </div>

            <div className="flex flex-row space-x-4 mt-4 border-b-[1px] border-text-bg-gray pb-4">
              <p className="text-xl font-semibold">
                # {value?.proposal_id} Proposal
              </p>
              <p className="bg-light-green text-dark-green px-3 rounded-md font-semibold text-sm pt-1">
                EXECUTED
              </p>
            </div>

            <div>
              <div className="flex flex-row space-x-40 border-b-[1px] border-text-bg-gray pb-4 pt-4">
                <p className="font-semibold">Proposal Content:</p>
                <p className="text-dark-green font-semibold">
                  {value?.parameters?.[0]?.description}
                </p>
              </div>

              <div className="flex flex-row space-x-40 border-b-[1px] border-text-bg-gray pb-4 pt-4">
                <p className="font-semibold">Proposal Address:</p>
                <p className="text-dark-yellow font-semibold">
                  {value?.proposer_address && value?.proposer_address}
                </p>
              </div>

              <div className="flex flex-row space-x-44 border-b-[1px] border-text-bg-gray pb-4 pt-4">
                <p className="font-semibold">Proposal Value:</p>
                <p className="font-semibold">{value?.parameters?.[0]?.value}</p>
              </div>

              <div className="flex flex-row space-x-44 border-b-[1px] border-text-bg-gray pb-4 pt-4">
                <p className="font-semibold">Expiration Time:</p>
                <p className="font-semibold">
                  {value?.expiration_time && secondsAgo(value?.expiration_time)}{" "}
                </p>
              </div>

              <div className="flex flex-row space-x-48 border-b-[1px] border-text-bg-gray pb-4 pt-4">
                <p className="font-semibold">Create Time:</p>
                <p className="font-semibold">
                  {value?.create_time && secondsAgo(value?.create_time)}
                </p>
              </div>

              <div className="flex flex-row space-x-52 border-b-[1px] border-text-bg-gray pb-4 pt-4">
                <p className="font-semibold">Approvals:</p>
                <p className="text-dark-yellow font-semibold ">
                  {value?.approvals && value?.approvals}
                </p>
              </div>

              <div className="flex flex-row space-x-60 border-b-[1px] border-text-bg-gray pb-4 pt-4">
                <p className="font-semibold">State:</p>
                <p className="font-semibold text-dark-green">
                  {value?.state && value?.state}
                </p>
              </div>

              <div className="flex flex-row space-x-56 border-b-[1px] border-text-bg-gray pb-4 pt-4">
                <p className="font-semibold">Upvotes:</p>
                <p className="text-dark-green font-semibold">14</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CommitteeProposalPage;
