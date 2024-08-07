import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import BarHashChart from "../../../../components/BarHashChart";
import { getPoxSupplyTableData } from "../../../../utils/axios/Data";


const PoxSupply = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getPoxSupplyTableData();
        
        setData(data?.message);
        
        
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

      <div className="text-xl font-bold pb-12">
        <p className="pb-6">POX Supply</p>
        <div className="bg-white rounded-2xl  px-12 py-2 shadow-lg">
        <div className="h-auto pt-14 ">
          <div className="w-[1300px] pl-20 pb-5">
          <BarHashChart  
            value={data}
            xAxis="_id"
            yAxis="supply"/>
          </div>
         
            </div>
        </div>
      </div>

      <div className="">
        <p className=" text-xl font-bold pb-6">List</p>
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <div className="flex flex-row justify-around bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%] text-center">Date(UTC)</p>
            <p className="w-[50%] text-center">Pox Price</p>
          </div>
          
          {data?.map && data?.slice(0, 10).map ((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%] text-center">{param?._id}</p>
               <p className="w-[50%] text-center">{param?.supply}</p>
               
           </div>
          </>
        )
       })}

        
        </div>
      </div>
    </div>
  )
}

export default PoxSupply;