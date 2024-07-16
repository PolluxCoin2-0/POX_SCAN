import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import {
  getCommitteeProposalData,
  getNetworkParameterData,
} from "../../utils/axios/Governance";
import { shortenString } from "../../utils/shortenString";
import { formatTimestamp } from "../../utils/formatTimestamp ";

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
        <p className="w-[10%]">Number</p>
        <p className="w-[70%]">Parameter</p>
        <p className="w-[20%]">Current Value</p>
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

  return (
    <div className="bg-white pt-2 pb-8">
      <div className="flex flex-row justify-evenly  mt-7 ml-2 mr-2 rounded-xl bg-lightest-gray pt-3 pb-3 pl-5 pr-5">
        <p className="w-[8%]">No.</p>
        <p className="w-[14%]">Content</p>
        <p className="w-[20%]">Proposer</p>
        <p className="w-[16%]">Created / Expire on (UTC)</p>
        <p className="w-[12%]">Status</p>
        <p className="w-[14%]">Upvotes / Total Votes</p>
        <p className="w-[14%]">Operation</p>
      </div>

      {data1?.map &&
        data1?.map((param, index) => {
          return (
            <>
              <div className="flex flex-row justify-evenly p-5 border-b-2 border-b-lightest-gray">
                <p className="w-[8%]">{param?.proposal_id}</p>
                <p className="w-[14%] text-overflow: ellipsis">
                  {param?.parameters?.[0]?.description &&
                    param?.parameters?.[0]?.description}
                </p>
                <p className="w-[20%]">
                  {param?.proposer_address &&
                    shortenString(param?.proposer_address, 10)}
                </p>
                <p className="w-[16%]">
                  {formatTimestamp(param?.create_time)}/{" "}
                  {formatTimestamp(param?.expiration_time)}
                </p>
                <p className="w-[12%]">{param?.state}</p>
                <p className="w-[14%]"></p>
                <p className="w-[14%]">View Details Committee Proposals </p>
              </div>
            </>
          );
        })}
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
            className={`cursor-pointer py-3 px-4 whitespace-nowrap ${
              isRender === "Network Parameter"
                ? "bg-white  rounded-t-2xl"
                : "text-black"
            }`}
            onClick={() => setIsRender("Network Parameter")}
          >
            Network Parameter
          </p>

          <p
            className={`cursor-pointer py-3 px-4 whitespace-nowrap ${
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
