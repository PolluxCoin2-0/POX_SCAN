import { useEffect, useState } from "react";
import { shortenString } from "../../../utils/shortenString";
import { getRankingContractDayThreeData } from "../../../utils/axios/Data";

const TableData = ({title, tableDataArray, type}) => {

    const [data, setData] = useState({});
  
    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const data = await getRankingContractDayThreeData();
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
      <p className="text-light-gray text-center w-[20%]">Rank</p>
      <p className="text-light-gray text-center w-[60%]">Account</p>
      <p className="text-light-gray text-center w-[20%]">Total Count</p>
    </div>

    {tableDataArray?.map && tableDataArray?.map((param, index) => {
      // Calculate rank dynamically
      const rank = index + 1;

      return (
        <div key={index} className="flex flex-row justify-around p-5 border-b-2 border-b-lightest-gray">
          <p className="w-[20%]">{rank}</p>
          
          <p className="w-[60%]">{type ==="contractAddress"? shortenString(param?.contractAddress, 10): shortenString(param?._id, 10)}</p>
          <p className="w-[20%]">{param?.totalCount}</p>
        </div>
      );
    })}
  </div>
</>

    )
  }

const ContractDay3 = () => {
  const [data, setData] = useState({});
  
    useEffect(() => {
      
      const fetchData = async () => {
        try {
          const data = await getRankingContractDayThreeData();
          console.log(data);
          setData(data);
          
          
        } catch (error) {
          console.log('error', error);
        } 
      };
  
      fetchData();
    }, []);
  
  return (
    <div>
      <div className="flex felx-row justify-between w-full">
        <div className="w-[49%]">
          <TableData
          title="Top Contacts by Calls"
          tableDataArray={data?.calls}
          type="contractAddress"/>
        </div>

        <div className="w-[49%] ">
          <TableData
          title="Top Contracts by Calling Accounts"
          tableDataArray={data?.calling}
          type="_id"/>
        </div>
      </div>
    </div>
  )
}

export default ContractDay3
