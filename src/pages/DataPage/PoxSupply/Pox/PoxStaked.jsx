import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components";
import BarHashChart1 from "../../../../components/BarHashChart1";
import { getPoxStakedTableData } from "../../../../utils/axios/Data";

const PoxStaked = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getPoxStakedTableData();
        console.log(data);
        setData(data);
        
        
      } catch (error) {
        console.log('error', error);
      } 
    };

    fetchData();
  }, []);

  return (
    <div className="px-12 pb-12">

      <div>
        <SearchBarExpand />
      </div>

      <div className="text-xl font-bold">
        <p>POX Supply</p>
        <div className="bg-white mt-8 rounded-2xl pl-40 py-14 shadow-lg">
        <div className="h-96 pl-5 pt-12 w-[1050px]">
        <BarHashChart1 value={data?.tvlGraph} xAxis="date" yAxis="count"/>
        </div>
        </div>
      </div>

      <div >
        <p className=" text-2xl mt-10 mb-8 font-bold">List</p>
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%]">Date(UTC)</p>
            <p className="w-[50%]">Pox Price</p>
          </div>
           
              
          {data?.tvlGraph && data?.tvlGraph?.map((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%]">{param?.count}</p>
               <p className="w-[50%]">{param?.date}</p>
               
           </div>
          </>
        )
       })}

        
        </div>
      </div>
    </div>
  )
}

export default PoxStaked;