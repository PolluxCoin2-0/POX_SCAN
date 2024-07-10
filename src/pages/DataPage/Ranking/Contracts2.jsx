import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../components";
import { getRankingContractData } from "../../../utils/axios/Data";
import { shortenString } from "../../../utils/shortenString";

const CardForContracts2 = ({title,}) => {

  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getRankingContractData();
        console.log(data);
        setData(data);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, []);

  return (
      <>
      <p className="text-2xl font-bold pb-8 pt-8">{title}</p>
      <div className="bg-white rounded-xl pt-6 pl-10 pr-10 pb-10">
        <div className="flex flex-row justify-around bg-lightest-gray p-2 rounded-lg">
          <p className="text-light-gray w-[20%]">Rank</p>
          <p className="text-light-gray w-[60%]">Account</p>
          <p className="text-light-gray w-[20%]">Total Count</p>
          
        </div>

        {data?.calling?.map && data?.calling?.map((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-around p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[20%]">1</p>
               <p className="w-[60%]">{param?._id && shortenString(param?._id, 10)}</p>
               <p className="w-[20%]">{param?.totalCount}</p>
               
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
        
      <div className="flex flex-row space-x-8">
          <p className="bg-light-mid-gray px-6 py-1 rounded-lg">1 Day </p>
          <p className="bg-light-mid-gray px-6 py-1 rounded-lg"> 3 Day </p>
          <p className="bg-light-mid-gray px-6 py-1 rounded-lg">7 Day</p>
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