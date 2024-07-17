import { useEffect, useState } from "react";
import { SearchBarExpand } from "../../../../components"
import { getPoxPriceTableData } from "../../../../utils/axios/Data";
import AreaChartComp from "../../../../components/AreaChart";


const PoxPrice = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const data = await getPoxPriceTableData();
        console.log(data);
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
        <div className="bg-white rounded-xl   mt-8 h-[500px]  shadow-xl">

        <div className="w-[1200px] h-[400px] ml-32 pt-10">
            <AreaChartComp 
            value={data}  
            xDataKey="date"
            yDataKey="value"
            componentChartColor="#C23631"/>
            </div>
        </div>
      </div>

      <div >
        <p className="text-2xl mb-10 mt-10 font-bold">List</p>
        <div className="bg-white rounded-xl shadow-xl p-10">
          <div className="flex flex-row  justify-between bg-lightest-gray ml-8 mr-8 pt-2 pb-2 rounded-md text-light-gray">
            <p className="w-[50%] text-center">Date(UTC)</p>
            <p className="w-[50%] text-center">Pox Price</p>
          </div>
          
          {data?.map && data?.map ((param, index) => {
        return (
          <>
           <div className="flex flex-row justify-between p-5 border-b-2 border-b-lightest-gray">
               <p className="w-[50%] text-center">{param?.date}</p>
               <p className="w-[50%] text-center">{param?.value}</p>
               
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