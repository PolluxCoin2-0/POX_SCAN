import { SearchBarExpand } from "../../components"
import { BiSolidCopyAlt } from "react-icons/bi";
import { RiQrCodeFill } from "react-icons/ri";
import { AiOutlineQuestion } from "react-icons/ai";
import AreaChartComp from "../../components/AreaChart";
import { useEffect, useState } from "react";
import { getPoxPriceTableData } from "../../utils/axios/Data";
import { IoMdArrowUp } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";
import { useParams } from "react-router-dom";
import { getProducerDetailData } from "../../utils/axios/Blockchain";
import { extractSiteName } from "../../utils/extractSiteName";

const ProducerDetailPage = () => {
  const witnessAddress = useParams().id;
  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getProducerDetailData (witnessAddress);
        console.log(data);
        setData(data?.message);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, []);

    // const handleCopy = (address) => {
    //     navigator.clipboard.writeText(address);
    //     toast.success("Hash copied successfully!");
    //   };
    
  return (
    <div className="px-12 pb-12">
      
      {/* Search Bar */}
      <div>
        <SearchBarExpand />
      </div>

      {/* First  */}
      <div className="flex flex-row justify-between">
        <div>
            <p className="text-xl font-bold">Account</p>

            <div className="flex flex-row space-x-4">
                <p className="text-lg font-semibold pt-3"></p>{data?.address}
                <p className="text-xl p-2 bg-white rounded-full cursor-pointer ">
              <BiSolidCopyAlt
                // onClick={() => handleCopy(accountData?.address)}
              />
            </p>
            <p className="text-xl bg-white p-2 rounded-full cursor-pointer">
              <RiQrCodeFill />
            </p>
            </div>

            <p className="mt-2 py-1 pl-5 mr-80 font-semibold bg-lightest-gray rounded-md">Add a private tag</p>
        </div>


        <div className="flex flex-row space-x-10 mt-14">
            <div>
                <div className="flex flex-row space-x-2">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p>Recent Activity (UTC)</p>
                </div>
            
                <p>2024-07-19T00:00:40.423Z</p>
            </div>

            <div>
                <div className="flex flex-row space-x-2">
                <p className="bg-lightest-gray rounded-md pt-1 px-1">
                  <AiOutlineQuestion />
                </p>
                <p>Created on (UTC)</p>
                </div>
                <p>2024-07-19T00:00:40.423Z</p>
            </div>
        </div>
      </div>

     {/* Second div */}
     <div className="flex flex-row justify-between space-x-5 w-full mt-5">
        <div className="w-[50%] bg-white rounded-lg shadow-lg p-5">
               <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-2 pb-4">
                <div className="flex flex-row space-x-2">
                <p className="bg-lightest-gray rounded-md font-bold pt-1 px-1"><AiOutlineQuestion /></p>
                <p className="font-bold">Name</p>
                </div>
                <p>{data?.checkSR?.url && extractSiteName(data?.checkSR?.url)}</p>
               </div>

               <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2">
                <p className="bg-lightest-gray rounded-md font-bold pt-1 px-1"><AiOutlineQuestion /></p>
                <p className="font-bold">Website</p>
                </div>
                <p>{data?.checkSR?.url}</p>
               </div>

               <div className="flex flex-row justify-between border-b-[1px] border-text-bg-gray pt-4 pb-4">
                <div className="flex flex-row space-x-2">
                <p className="bg-lightest-gray rounded-md font-bold pt-1 px-1"><AiOutlineQuestion /></p>
                <p className="font-bold">Block Count/Efficiency：</p>
                </div>
                <p> <span className="text-dark-skyblue"> {data?.checkSR?.totalProduced} </span>/ /99.18</p>
               </div>

               <div className="flex flex-row justify-between pt-4 pb-2">
                <div className="flex flex-row space-x-2">
                <p className="bg-lightest-gray font-bold rounded-md pt-1 px-1"><AiOutlineQuestion /></p>
                <p className="font-bold">Round Ranking/Votes：
                </p>
                </div>
                <p>{data?.checkSR?.ranking}/ {data?.checkSR?.voteCount}</p>
               </div>
        </div>

        <div className="w-[50%]   flex flex-row space-x-5">
            <div className="w-[33%] bg-white rounded-lg shadow-lg p-5">

              <div className="flex flex-row space-x-2">
              <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /></p>
                <p className="font-bold"> Current Ranking</p>
              </div>

              <p className="text-xl font-semibold pt-3">{data?.checkSR?.ranking}</p>

              <div className="pt-10 flex justify-end">
              <img src="https://poxscan.io/images/cup.svg" alt="cup-image" />
              </div>
             
              <div className=" w-full flex flex-row">
                <p  className="w-[100%] border-[3px] border-light-mid-red rounded-lg mt-3 mb-1 "></p>
                <p className=" border-r-[5px]  border-dark-red mt-2  rounded "></p>
              </div>

              <div className="flex flex-row justify-between pt-3">
                <p>1</p>
                <p>2</p>
              </div>
            </div>


            <div className="w-[33%] bg-white rounded-lg shadow-lg p-5">

              <div className="flex flex-row space-x-2">
              <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /></p>
                <p className="font-bold">Current Votes</p>
              </div>

              <p className="text-xl font-semibold pt-3">{data?.checkSR?.voteCount}</p>

              <div className="w-[250px] h-[120px] pt-5">
            <AreaChartComp 
              value={data}
              xDataKey="date"
              yDataKey="value"
              componentChartColor="#C23631"/>
            </div>
            </div>


            <div className="w-[33%] bg-white rounded-lg shadow-lg p-5">

              <div className="flex flex-row space-x-2">
              <p className="bg-lightest-gray rounded-md pt-1 px-1"><AiOutlineQuestion /></p>
                <p className="font-bold">Reward Distribution</p>
              </div>

              <div className=" "></div>
              
              <div className="mt-36">
              <div className="flex flex-row justify-between">
                 <div className="flex flex-row space-x-2">
                 <p className="text-xl font-bold text-dark-red">98%</p>
                 <p className="pt-2 text-dark-red"><IoMdArrowUp /></p>
                 </div>
               
                <div className="flex flex-row space-x-2">
                <p className="text-xl font-bold text-dark-green">2%</p>
                <p className="pt-2 text-dark-green"><IoMdArrowDown /></p>
                </div>
               
              </div>

              <div className="flex flex-row justify-between">
                <p className="text-sm text-light-gray">Voters</p>
                <p  className="text-sm text-light-mid-gray">SR Rewards</p>
              </div>
              </div>
            



              <div></div>
            </div>
        </div>
     </div>

    

     
    </div>
  )
}

export default ProducerDetailPage
