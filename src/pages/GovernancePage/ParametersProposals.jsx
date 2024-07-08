import { useEffect, useState } from "react";
import { ParameterData } from "../../data/Parameters";
import Pagination from "../../components/Pagination";
import { getNetworkParameterData } from "../../utils/axios/Governance";

const ParameterTable = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getNetworkParameterData();
        console.log(data);
        setData(data?.message);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, [])

  // For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Example total pages

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

 return (
    <div className="bg-white pt-2 pb-8">
    <div className="flex flex-row justify-between mt-7 ml-2 mr-2 rounded-xl bg-lightest-gray pt-3 pb-3 pl-5 pr-5">
          <p>Number</p>
          <p className="">Parameter</p>
          <p>Current Value</p>
        </div>

        {data?.map ((parameter, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p>{parameter?.number}</p>
               <p>{parameter?.description}</p>
               <p>{parameter?.value}</p>
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
  )
}



const ParametersProposals = () => {
  const [isRender, setIsRender] = useState("Network Parameter");

  const renderItemComponent = () => {
    switch (isRender) {
      case "Network Parameter":
        return <ParameterTable />;
      case "Committee Proposals":
        return <ParameterTable />;
     
      default:
        return null;
    }
  };

 
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



      <div className=" rounded-xl my-7 p-10">
        <div className="flex flex-row space-x-8">
          <p className={`cursor-pointer py-3 px-4 whitespace-nowrap ${isRender === "Network Parameter" ? "bg-white  rounded-t-2xl" : "text-black"}`}
           onClick={() => setIsRender("Network Parameter")}>Network Parameter</p>

          <p  className={`cursor-pointer py-3 px-4 whitespace-nowrap ${isRender === "Committee Proposals" ? "bg-white  rounded-t-2xl" : "text-black"}`}
          onClick={() => setIsRender("Committee Proposals")}>Committee  Proposals</p>

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
  )
}

export default ParametersProposals