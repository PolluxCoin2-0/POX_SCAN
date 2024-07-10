import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import BiaxialLineChart from "../../../../components/BiaxialLineChart";
import { getPoxPriceTableData } from "../../../../utils/axios/Data";


const PoxPrice = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getPoxPriceTableData();
        
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

      <div className="text-xl font-bold">
        <p>POX Price</p>
        <div className="bg-white rounded-xl   mt-8 px-12 py-6 shadow-xl">

        <div className="h-96 pt-6">
            <BiaxialLineChart  width="1000"/>
            </div>
        </div>
      </div>

      <div >
        <p className="text-2xl mb-10 mt-10 font-bold">List</p>
        <div className="bg-white rounded-xl shadow-xl p-10">
          <div className="flex flex-row  justify-between bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%] ">Date(UTC)</p>
            <p className="w-[50%]">Pox Price</p>
          </div>
          
          {data?.map && data?.map ((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%]">{param?.date}</p>
               <p className="w-[50%]">{param?.value}</p>
               
           </div>
          </>
        )
       })}


           
        </div>
      </div>
    </div>
  )
}

export default PoxPrice