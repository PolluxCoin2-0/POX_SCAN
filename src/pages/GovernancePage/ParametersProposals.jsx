import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import {
  getCommitteeProposalData,
  getNetworkParameterData,
} from "../../utils/axios/Governance";
import { shortenString } from "../../utils/shortenString";
import { formatTimestamp } from "../../utils/formatTimestamp ";
import CommitteeProposalPage from "./CommitteeProposalPage";

const ParameterTable = () => {
  const [data, setData] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNetworkParameterData();
        setData(data?.message);
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
    <div className="bg-white pt-2 pb-8">
      <div className="flex flex-row justify-between mt-7 ml-2 mr-2 rounded-xl bg-lightest-gray pt-3 pb-3 pl-5 pr-5">
        <p className="w-[10%] font-bold ">Number</p>
        <p className="w-[70%] font-bold ">Parameter</p>
        <p className="w-[20%] font-bold ">Current Value</p>
      </div>

      {data?.map &&
        data?.map((parameter, index) => {
          return (
            <>
              <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
                <p className="w-[10%]">{parameter?.number + 1}</p>
                <p className="w-[70%]">{parameter?.description}</p>
                <p className="w-[20%]">
                  {parameter?.value && parameter?.value
                    ? parameter?.value
                    : "Not Specified"}
                </p>
              </div>
            </>
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
  );
};

const CommitteProposalTable = () => {
  const [data1, setData1] = useState({});
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await getCommitteeProposalData();
        console.log(data1);
        setData1(data1?.message);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  // function to render the committee proposal on the basis of proposal id

function getProposalById (proposal_id) {
  let array = data1;
  for(let i=0; i< array.length; i++){
    if(array[i].proposal_id === proposal_id)
      return (array[i]);
  }
  return null;
}

const handleModal =(id)=>{
  const data = getProposalById(id);
  setModalData(data);
  handleShowModal();
}

const handleShowModal =()=>{
  setIsShowModal(!isShowModal);
}

  return (
    <div className="bg-white pt-2 pb-8 ">
      <div className="flex flex-row justify-evenly  mt-7 ml-2 mr-2 rounded-xl bg-lightest-gray pt-3 pb-3 pl-5 pr-5">
        <p className="w-[5%]  font-bold text-center ">Number</p>
        <p className="w-[20%] font-bold text-center  ">Content</p>
        <p className="w-[17%] font-bold text-center  ">Proposer</p>
        <p className="w-[16%] font-bold text-center ">Created / Expire on (UTC)</p>
        <p className="w-[12%] font-bold text-center  ">Status</p>
        <p className="w-[12%] font-bold text-center ">Upvotes / Total Votes</p>
        <p className="w-[18%] font-bold text-center  ">Operation</p>
      </div>

      {data1?.map &&
        data1?.map((param, index) => {
          return (
            <>
              <div className="flex flex-row justify-evenly p-5 border-b-2 border-b-lightest-gray">
                <p className="w-[5%] text-center  ">#{param?.proposal_id}</p>
                <p className="w-[20%]  truncate text-center ">
                  {param?.parameters?.[0]?.description &&
                    param?.parameters?.[0]?.description}
                </p>
                <p className="w-[17%] text-center ">
                  {param?.proposer_address &&
                    shortenString(param?.proposer_address, 10)}
                </p>
                <p className="w-[16%] text-center  ">
                  {formatTimestamp(param?.create_time)} {" "}
                  {formatTimestamp(param?.expiration_time)}
                </p>
                <p className="w-[12%] text-center text-dark-green ">{param?.state}</p>
                <p className="w-[12%] text-center "></p>
                <p className="w-[18%] text-center cursor-pointer text-dark-red underline text-nowrap " onClick={()=>handleModal(param?.proposal_id)}>View Details Committee Proposals </p>
              </div>
            </>
          );
        })}
          {
          isShowModal && <CommitteeProposalPage value={modalData} isShowModal={isShowModal} handleShowModal={handleShowModal}/>
        }
    </div>
  );
};

const ParametersProposals = () => {
  const [isRender, setIsRender] = useState("Network Parameter");

  const renderItemComponent = () => {
    switch (isRender) {
      case "Network Parameter":
        return <ParameterTable />;
      case "Committee Proposals":
        return <CommitteProposalTable />;

      default:
        return null;
    }
  };

  return (
    <div className="p-16">
      <div>
        <p className="text-xl font-bold">Parameters & Proposals</p>
        <div className="bg-lightest-brown p-10 mt-10 rounded-xl">
          <p className="font-bold">
            The committee is made upto of 27 super representative (SRS) who are
            responible for modifying dynamic parameters such as blocks rewards
            and transaction fees on the network.
          </p>
          <p className="text-light-brown pt-5 font-bold">
            * Each SR, SR partner and SR candidates is entitled to initiate
            proposals. SRS also have the right to vote for the proposals.
          </p>
          <p className="text-light-brown pt-5 font-bold">
            * After the voting end, proposals with votes from atleast 18 SRs
            will be adopted. The changes will be applied to the network
            parameter in the next maintenance period.
          </p>
        </div>
      </div>

      <div className=" rounded-xl my-7 p-10">
        <div className="flex flex-row space-x-8">
          <p
            className={`cursor-pointer font-bold text-center border-2py-3 px-4 whitespace-nowrap ${
              isRender === "Network Parameter"
                ? "bg-white  rounded-t-2xl"
                : "text-black"
            }`}
            onClick={() => setIsRender("Network Parameter")}
          >
            Network Parameter
          </p>

          <p
            className={`cursor-pointer font-bold py-3 px-4 whitespace-nowrap ${
              isRender === "Committee Proposals"
                ? "bg-white  rounded-t-2xl"
                : "text-black"
            }`}
            onClick={() => setIsRender("Committee Proposals")}
          >
            Committee Proposals
          </p>

          <div className="flex flex-row justify-end w-full space-x-8 pb-3">
            <button className="bg-white py-1 px-4 rounded-md text-black cursor-pointer">
              Raise a Proposal
            </button>

            <button className="bg-white py-1 px-4 rounded-md text-black cursor-pointer">
              My Proposals
            </button>
          </div>
        </div>

        <div>{renderItemComponent()}</div>
      </div>
    </div>
  );
};

export default ParametersProposals;
